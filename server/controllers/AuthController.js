import AuthService from "../service/AuthService.js";


class AuthController {
    async registration(req, res, next) {
        try {
            const {email, password} = req.body
            const userData = await AuthService.registration(email, password)
            res.cookies('refreshToken', userData.refreshToken, {maxAge: 30*23*60*60*100, httpOnly:true}) //maxAge: 30d
            return res.json(userData)
        }
        catch (e) {
            console.log(e)
        }
    }

    async login(req, res, next) {
        try {

        }
        catch (e) {

        }
    }

    async logout(req, res, next) {
        try {

        }
        catch (e) {

        }
    }

    async activate(req, res, next) {
        try {

        }
        catch (e) {

        }
    }

    async refresh(req, res, next) {
        try {

        }
        catch (e) {

        }
    }

}

export default new AuthController