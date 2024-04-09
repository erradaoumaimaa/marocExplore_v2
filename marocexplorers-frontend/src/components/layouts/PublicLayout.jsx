import Navbar from 'src/components/sections/Navbar'
import Footer from 'src/components/sections/Footer'
import { Outlet } from 'react-router-dom'
import Spinner from 'src/components/elements/Spinner'

const PublicLayout = () => {

    return (
        <Spinner>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>  
            <footer>
                <Footer />
            </footer>
            
        </Spinner> 
    )
}

export default PublicLayout