import UserModel from "../models/UserModel.js";
import {hash} from "bcrypt";
import {v4} from "uuid";
import MailService from "./MailService.js";
import TokenService from "./TokenService.js";
import UserDto from "../dtos/UserDto.js";
import tokenService from "./TokenService.js";


class AuthService {
    async registration(email, password) {
        const candidate = await UserModel.findOne({email})
        if (candidate) {
            throw new Error(`User with email ${email} has already exists`)
        }
        const hashedPassword = await hash(password)
        const activationLink = v4()

        const user = await UserModel.create({email, password: hashedPassword, activationLink})
        await MailService.sendActivationMail(email, activationLink)

        const userDto = new UserDto(user)
        const tokens = TokenService.generateToken({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return { ...tokens, user: userDto}
     }
}

export default new AuthService()