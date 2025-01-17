import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"

const Root = () => {

    useEffect(() => {

        document.title = "Inferno"

    }, [])

    return (
        <>

        <div className="container">
            <Header />
            </div>
            <Outlet />
        </>
    )
}

export default Root