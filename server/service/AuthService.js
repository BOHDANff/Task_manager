import User from "../models/UserModel.js";
import {hash} from "bcrypt";
import {v4} from "uuid";
import MailService from "./MailService.js";
import TokenService from "./TokenService.js";
import UserDto from "../dtos/UserDto.js";


class AuthService {
    async registration(email, password, username) {
        const candidate = await User.findOne({email})
        if (candidate) {
            throw new Error(`User with email ${email} has already exists`)
        }
        const hashedPassword = await hash(password, 3)
        const activationLink = v4()

        const user = await User.create({email, password: hashedPassword, activationLink, username})
        await MailService.sendActivationMail(email, activationLink)

        const userDto = new UserDto(user)
        const tokens = TokenService.generateToken({...userDto})
        await TokenService.saveToken(userDto.id, tokens.refreshToken)
        return { ...tokens, user: userDto}
     }
}

export default new AuthService()