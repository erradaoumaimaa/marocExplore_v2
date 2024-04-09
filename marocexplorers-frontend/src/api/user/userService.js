/* eslint-disable no-useless-catch */
import instance from 'src/config/axiosConfig'

export const loginService = async (data) => {

    try {
        const response = await instance.post('/login', data)
        return response
    } catch(error) {
        throw error
    }
    
}

export const registerService = async (data) => {

    try {
        const response = await instance.post('/register', data)
        return response
    } catch(error) {
        throw error
    }
    
}

export const logoutService = async () => {

    try {
        await instance.post('/logout')
    } catch(error) {
        throw error
    }
    
}