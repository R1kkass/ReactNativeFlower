import axios from 'axios'
import { domen } from '../const/domen'

class UserApi {
    async registration(data) {
        const create = await axios.post(`${domen}/user/registration`, {
            email: data.login,
            password: data.password,
            basketId: Date.now()
        })
        return create.data.refreshToken
    }

    async auth(data) {
        const auth = await axios.post(`${domen}/user/login`, data)
        return auth.data.refresh_token
    }

    async refresh(token: string) {
        const refresh = await axios.post(`${domen}/user/refresh`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return refresh.data.access_token
    }
}

export const userApi = new UserApi() 