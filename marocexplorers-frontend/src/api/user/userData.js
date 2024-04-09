import instance from 'src/config/axiosConfig'
import { loginService, registerService, logoutService } from './userService'

export const login = async (data) => {

    try {
        const response = await loginService(data)
        return response.data.data.access_token.token
    } catch(error) {
        throw error
    }
    
}

export const register = async (data) => {

    try {
        const response = await registerService(data)
        return response.data.data.access_token.token
    } catch(error) {
        error = error.response.data.errors
        throw error
    }
    
}

export const logout = async () => {

    try {
        await logoutService()
    } catch(error) {
        
        error = error.response.data.errors
        throw error
    }
    
}