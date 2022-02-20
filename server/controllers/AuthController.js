import AuthService from "../service/AuthService.js";


class AuthController {
    async registration(req, res, next) {
        try {
            const {email, password, username} = req.body
            const userData = await AuthService.registration(email, password, username)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 23 * 60 * 60 * 100, httpOnly: true}) //maxAge: 30d
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    async login(req, res, next) {
        try {

        } catch (e) {
            next(e)
        }
    }

    async logout(req, res, next) {
        try {

        } catch (e) {
            next(e)
        }
    }

    async confirm(req, res, next) {
        try {
            const confirmationLink = req.params.link
            await AuthService.confirm(confirmationLink)
            return res.redirect(process.env.CLIENT_URL)
        } catch (e) {
            next(e)
        }
    }

    async refresh(req, res, next) {
        try {

        } catch (e) {
            next(e)
        }
    }

}

export default new AuthController