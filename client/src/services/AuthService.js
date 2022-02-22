import {$api} from "../http";


export default class AuthService {
    static async signIn(email, password) {
        return $api.post('/login', {email, password})
    }

    static async signUp(email, password) {
        return $api.post('/registration', {email, password})
    }

    static async signOut() {
        return $api.post('/logout')
    }
}