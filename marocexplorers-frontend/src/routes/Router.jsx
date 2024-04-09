import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from 'src/components/pages/HomePage'
import LoginPage from 'src/components/pages/auth/LoginPage'
import RegisterPage from 'src/components/pages/auth/RegisterPage'
import PublicLayout from 'src/components/layouts/PublicLayout'
import DashboardLayout from 'src/components/layouts/DashboardLayout'
import AddItinerary from 'src/components/pages/dashboard/AddItinerary'
import DashboardPage from 'src/components/pages/dashboard/DashboardPage'
import EditItinerary from 'src/components/pages/dashboard/EditItinerary'

const routes = [
    {
        path: '/',
        element: <PublicLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
        ]
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/register',
        element: <RegisterPage />
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <DashboardPage />
            },
            {
                path: '/dashboard/itinerary',
                element: <AddItinerary />
            },
            {
                path: '/dashboard/:id/edit',
                element: <EditItinerary />
            },
        ]
    },
]

const router = createBrowserRouter(routes)

const Routes = () => {
    return <RouterProvider router={router} />
}

export default Routes