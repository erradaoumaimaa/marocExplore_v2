import React, { useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useAuth } from 'src/providers/AuthProvider'
import { logout } from 'src/api/user/userData'

const DashboardNavbar = () => {
    const { token, setToken } = useAuth()

    const handleLogout = async () => {
        try {
            await logout()
        } catch(error) {
            console.log('An error occured:', error)
        }
        setToken(null)
    }

    return (
        <nav className="px-4 py-4 flex justify-between items-center bg-white">
            <div className="header-logo px-8">
                <Link to='/' className="text-2xl font-semibold text-blue">Maroc Explore</Link>
            </div>
            <div className="lg:hidden">
                <button className="navbar-burger flex items-center text-blue-600 p-3">
                    <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Mobile menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </button>
            </div>
            <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
                <li><Link className="text-sm font-bold" to="/dashboard">Dashboard</Link></li>
                <li className="text-gray-300 text-jaune">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                </li>
                <div className="flex items-center space-x-2">
                    <span>
                        <svg className="text-[#FFD200] w-7 h-7"
                        xmlns="http://www.w3.org/2000/svg" width="24"  height="24"  viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="9" y1="12" x2="15" y2="12" />  <line x1="12" y1="9" x2="12" y2="15" /></svg>
                    </span>
                    <span ><Link className="text-sm font-bold" to="/dashboard/itinerary">Add Route</Link> </span>
                </div>
                <li className="text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-jaune w-4 h-4 current-fill" fill="none" stroke="currentColor"viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                </li>
                <li><Link className="text-sm font-bold" to="#">Services</Link></li>
                
                
            </ul>
            <button onClick={handleLogout} className="cta bg-black px-8 py-2 rounded text-white font-semibold">Logout</button>
        </nav>
    )
}

export default DashboardNavbar