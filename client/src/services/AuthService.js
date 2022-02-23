import {$api} from "../http";

export default class AuthService {
    static async signIn(email, password) {
        return $api.post('auth/login', {email, password})
    }

    static async signUp(email, password, username) {
        return $api.post('auth/registration', {email, password, username})
    }

    static async signOut() {
        return $api.post('auth/logout')
    }
}