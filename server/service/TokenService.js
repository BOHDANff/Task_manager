import jwt from "jsonwebtoken";
import TokenModel from "../models/TokenModel.js";


class TokenService {
    generateToken(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_KEY, {expiresIn: '30m'})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_KEY, {expiresIn: '30d'})
        return {
        accessToken,
        refreshToken
    }
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

    async deleteToken(refreshToken) {
        const token = await TokenModel.deleteOne({refreshToken})
        return token
    }

    validateRefreshToken(refreshToken) {
        try {
            const userData = jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY)
            return userData
        } catch (e) {
            return null
        }
    }

    async findToken(refreshToken) {
        const token = await TokenModel.findOne({refreshToken})
        return token
    }
}

export default new TokenService()