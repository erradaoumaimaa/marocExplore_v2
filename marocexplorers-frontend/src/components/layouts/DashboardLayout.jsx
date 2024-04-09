import { Outlet, Navigate } from 'react-router-dom'
import Spinner from 'src/components/elements/Spinner'
import { useAuth } from 'src/providers/AuthProvider'
import DashboardNavbar from '../sections/DashboardNavbar'

const DashboardLayout = () => {
    const { token } = useAuth()

    if(!token) {
        return <Navigate to='/login'/>
    }

    return (
        <Spinner>
            <header className='fixed w-full z-20 '>
                <DashboardNavbar />
            </header>
            <main className='pt-16'>
                <Outlet />
            </main>  
            <footer>
                
            </footer>
            
        </Spinner> 
    )
}

export default DashboardLayout