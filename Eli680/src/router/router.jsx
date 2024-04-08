import { createBrowserRouter } from "react-router-dom"
import Root from "../pages/root"
import HomePage from "../pages/HomePage"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
        ]
    }
])

export default router