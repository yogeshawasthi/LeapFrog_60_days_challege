import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <h1>Hellow , this is homepage</h1>
    },
    {
        path: '/about',
        element: <h1>This is about page</h1>
    }
])

export default router