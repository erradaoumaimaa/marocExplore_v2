import React, { useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useAuth } from 'src/providers/AuthProvider'
import { logout } from 'src/api/user/userData'

const Navbar = () => {
    const { token, setToken } = useAuth()
    const ref = useRef(null)

    const handleDropdown = () => {
        const dropdown = ref.current
        dropdown.classList.toggle('z-[-10]')
        dropdown.classList.toggle('opacity-0')
        // setTimeout(() => {
        //     dropdown.classList.toggle('opacity-0')
        // }, 100)
        
    }

    const handleLogout = async () => {
        try {
            await logout()
        } catch(error) {
            console.log('An error occured:', error)
        }
        setToken(null)
    }

    const logo = {
        href: "/",
        title: "Explore Morocco"
    }

    const mainLinks = [
        {
            href: "/",
            title: "Home"
        },
        {
            href: "/explore",
            title: "Explore"
        },
        {
            href: "/favoris",
            title: "Favoris"
        },
    ]

    const authLinks = [
        {
            href: "/register",
            title: "Sign In"
        },
        {
            href: "/login",
            title: "Login"
        }
    ]

    return (
        <nav className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto my-8">
            <div className="header-wrapper flex items-center justify-between">
                    <Link
                        to={logo.href}
                        className="text-2xl font-semibold "
                    >
                        {logo.title}
                    </Link>

                    <ul className='flex items-center space-x-8 text-sm font-semibold'>
                        {mainLinks.map((link) => (
                            <li key={link.title}>
                                <NavLink
                                    to={link.href}
                                    className="hover:text-orange-500"
                                    activeClassName="active border-b-2 border-jaune pb-2"
                                >
                                    {link.title}
                                </NavLink>
                            </li>
                        ))}

                        {token ? (
                            <div className='relative w-10'>
                                <button onClick={handleDropdown} className='w-full'>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.5 8.5C14.5 9.88071 13.3807 11 12 11C10.6193 11 9.5 9.88071 9.5 8.5C9.5 7.11929 10.6193 6 12 6C13.3807 6 14.5 7.11929 14.5 8.5Z" fill="#000000"></path> <path d="M15.5812 16H8.50626C8.09309 16 7.87415 15.5411 8.15916 15.242C9.00598 14.3533 10.5593 13 12.1667 13C13.7899 13 15.2046 14.3801 15.947 15.2681C16.2011 15.5721 15.9774 16 15.5812 16Z" fill="#000000" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-darkreader-inline-fill="" data-darkreader-inline-stroke=""></path> <circle cx="12" cy="12" r="10" stroke="#000000" stroke-width="2" data-darkreader-inline-stroke=""></circle> </g></svg>
                                </button>
                                <div ref={ref} className='absolute transition-all z-[-10] opacity-0 bottom-0 left-0 translate-y-[100%] w-24 bg-gray-300 rounded shadow-xl flex flex-col'>
                                    <Link to="/dashboard" className="transition-all p-2 w-full text-start hover:bg-jaune">Dashboard</Link>
                                    <button onClick={handleLogout} className="transition-all p-2 w-full text-start hover:bg-jaune">Logout</button>
                                </div>
                            </div>
                        ) : (
                            <>
                                <li key="register">
                                    <Link
                                        to="/register"
                                        className="font-semibold text-jaune"
                                    >
                                        Sign In
                                    </Link>
                                </li>

                                <li key="login">
                                    <Link
                                        to="/login"
                                        className="cta px-3 py-2 rounded text-white font-semibold bg-black"
                                    >
                                        Login
                                    </Link>
                                </li>
                            </>
                        )}
                        
                    </ul>
                </div>
            </nav>
    )
}

export default Navbar