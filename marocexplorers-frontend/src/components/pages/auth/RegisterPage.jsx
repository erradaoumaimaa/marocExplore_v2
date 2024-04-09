import React, { useState } from 'react'
import { register } from 'src/api/user/userData'
import Input from 'src/components/elements/Input'
import AuthLayout from 'src/components/layouts/AuthLayout'


const RegisterPage = () => {
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
            title="Explore Morocco"
            button="Sign up"
            credentialsFunction={register}
            data={data}
            login={false}
        >
            <Input 
                name='name'
                onChange={handleChange}
            />
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

export default RegisterPage