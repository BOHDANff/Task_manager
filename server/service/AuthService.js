import User from "../models/UserModel.js";
import {compareSync, hash} from "bcrypt";
import {v4} from "uuid";
import MailService from "./MailService.js";
import TokenService from "./TokenService.js";
import UserDto from "../dtos/UserDto.js";
import ApiError from "../exceptions/ApiError.js";


class AuthService {
    async generateAndSaveToken(user) {
        const userDto = new UserDto(user)
        const tokens = TokenService.generateToken({...userDto})
        await TokenService.saveToken(userDto.id, tokens.refreshToken)
        return {...tokens, user: userDto}
    }

    async registration(email, password, username) {
        const candidate = await User.findOne({email})
        if (candidate) {
            throw ApiError.BadRequest(`User with email ${email} has already existed`)
        }
        const isPasswordUnique = await User.findOne({username})
        if (isPasswordUnique) {
            throw ApiError.BadRequest(`User with username ${username} has already existed`)
        }
        const hashedPassword = await hash(password, 3)
        const confirmationLink = v4()

        const user = await User.create({email, password: hashedPassword, confirmationLink, username})
        await MailService.sendActivationMail(email, `${process.env.API_URL}/auth/confirm/${confirmationLink}`)

        const userData = await this.generateAndSaveToken(user)
        return userData
    }

    async confirm(confirmationLink) {
        const user = await User.findOne({confirmationLink})
        if (!user) {
            throw ApiError.BadRequest(`Incorrect confirmation link`)
        }
        user.confirmedAt = true
        await user.save()
    }

    async login(email, password) {
        const user = await User.findOne({email})
        if (!user) {
            throw ApiError.BadRequest('Wrong email or password')
        }
        const isPswrdRight = compareSync(password, user.password)
        if (!isPswrdRight) {
            throw ApiError.BadRequest('Wrong email or password')
        }
        const userData = await this.generateAndSaveToken(user)
        return userData
    }

    async logout(refreshToken) {
        const token = await TokenService.deleteToken(refreshToken)
        return token
    }

    async refresh(refreshToken) {
        if(!refreshToken) {
            return new ApiError.UnauthorizedError()
        }
        const tokenData = TokenService.validateRefreshToken(refreshToken)
        const tokenFromDB = await TokenService.findToken(refreshToken)
        if (!tokenData || !tokenFromDB){
            return new ApiError.UnauthorizedError()
        }
        const user = await User.findOne({refreshToken})
        const userData = await this.generateAndSaveToken(user)
        return userData
    }
}

export default new AuthService()