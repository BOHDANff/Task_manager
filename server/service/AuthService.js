import User from "../models/UserModel.js";
import {hash} from "bcrypt";
import {v4} from "uuid";
import MailService from "./MailService.js";
import TokenService from "./TokenService.js";
import UserDto from "../dtos/UserDto.js";
import ApiError from "../exceptions/ApiError.js";


class AuthService {
    async registration(email, password, username) {
        const candidate = await User.findOne({email})
        if (candidate) {
            throw ApiError.BadRequest(`User with email ${email} has already existed`)
        }
        const hashedPassword = await hash(password, 3)
        const confirmationLink = v4()

        const user = await User.create({email, password: hashedPassword, confirmationLink, username})
        await MailService.sendActivationMail(email, `${process.env.API_URL}/auth/confirm/${confirmationLink}`)

        const userDto = new UserDto(user)
        const tokens = TokenService.generateToken({...userDto})
        await TokenService.saveToken(userDto.id, tokens.refreshToken)
        return { ...tokens, user: userDto}
     }

     async confirm(confirmationLink) {
         const user = await User.findOne({confirmationLink})
         if (!user) {
             throw ApiError.BadRequest(`Incorrect confirmation link`)
         }
         user.confirmedAt = true
         await user.save()
     }
}

export default new AuthService()