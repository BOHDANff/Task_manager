import {sign} from "jsonwebtoken";
import TokenModel from "../models/TokenModel.js";


class TokenService {
    generateToken(payload) {
        const accessToken = sign(payload, process.env.JWT_SECRET_KEY, {expiresIn: '30m'})
        const refreshToken = sign(payload, process.env.JWT_SECRET_KEY, {expiresIn: '30d'})
        return (
            accessToken,
            refreshToken
        )
    }
    async saveToken(userId, refreshToken) {
        const tokenData = await TokenModel.findOne({user: userId})
        if(tokenData) {
            tokenData.refreshToken = refreshToken
            return tokenData.save()
        }
        const token = await TokenModel.create({user: userId, refreshToken})
        return token
    }

}

export default new TokenService()