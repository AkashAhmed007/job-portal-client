import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../Components/Footer"
function RootLayout() {
  return (
    <>
    <Navbar></Navbar>
    <div className='min-h-[calc(100vh-68px)]'>
        <Outlet />
    </div>
    <Footer></Footer>
    </>
  )
}

export default RootLayout