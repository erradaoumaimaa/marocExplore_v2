import React, { useState } from 'react'
import { login } from 'src/api/user/userData'
import Input from 'src/components/elements/Input'
import AuthLayout from 'src/components/layouts/AuthLayout'


const LoginPage = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    return (
        <AuthLayout
            title="Welcom Back !👋 to Explore Morocco"
            button="Sign in"
            credentialsFunction={login}
            data={data}
        >
            <Input 
                name='email'
                type='email'
                onChange={handleChange}
            />
            <Input 
                name='password'
                type='password'
                onChange={handleChange}
            />
        </AuthLayout>
    )
}

export default LoginPage