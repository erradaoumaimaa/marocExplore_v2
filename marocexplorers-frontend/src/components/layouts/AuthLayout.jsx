import React from 'react'
import { useAuth } from 'src/providers/AuthProvider'
import { Link, Navigate } from 'react-router-dom'
import Spinner from 'src/components/elements/Spinner'
import maroc from 'src/assets/maroc.jpg'
const AuthLayout = ({ children, title, button, credentialsFunction, data, login = true}) => {
    const { token, setToken } = useAuth()

    if(token) {
        return <Navigate to='/'/>
    }

    const sendCredentials = async (data) => {
        try {
            const response = await credentialsFunction(data)
            setToken(response)
        } catch(error) {
            console.log('An error occured:', error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        sendCredentials(data)
    }
    return (
        <Spinner>
            <main>
            <section className="grid grid-cols-3 bg-neutral-700" style={{
      backgroundImage: `url(${maroc})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
                    <div className='flex items-center justify-center'>
                        <Link to='/' className="w-24 p-4 rounded-full bg-jaune">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M4 12L8 8M4 12L8 16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </Link>
                    </div>
                    
                    <div className="relative min-h-screen flex items-center justify-center bg-center py-12 px-4 sm:px-6 lg:px-8 bg-no-repeat bg-cover relative items-center" >
                        <div className="absolute inset-0 z-0"></div>
                        <div className="max-w-md w-full space-y-8 p-10 bg-black rounded-xl shadow-lg z-10">
                            <div className="grid  gap-8 grid-cols-1 ">
                                <div className="flex flex-col ">
                                    <div className="flex flex-col sm:flex-row items-center">
                                        <h1 className="block w-full text-center text-2xl font-bold mb-6 text-white"> {title} </h1>
                                        <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
                                    </div>
                                    <div className="mt-5">
                                        <form onSubmit={handleSubmit}>

                                            {children}

                                        <button className="mt-3 text-lg font-semibold
                                                        w-full text-white rounded-lg
                                                        px-6 py-3 block shadow-xl hover:text-white  bg-orange"> {button}
                                                        </button>

                                            <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
                                                <a href="#" className="flex-2 underline text-jaune">
                                                                Forgot password?
                                                            </a>

                                                <p className="flex-1  text-md mx-4 my-1 sm:my-auto text-white">
                                                    or
                                                </p>

                                                {login ? (
                                                    <Link to="/register" className="flex-2 underline text-jaune">
                                                        Don't have an account yet?
                                                    </Link>
                                                ) : (
                                                    <Link to="/login" className="flex-2 underline text-jaune">
                                                        Already have an account?
                                                    </Link>
                                                )}
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Spinner>
    )
}

export default AuthLayout