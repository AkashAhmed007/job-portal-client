import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../Components/Footer"
function RootLayout() {
  return (
    <div className="min-h-screen">
      <div><Navbar></Navbar></div>
      <div className='min-h-[calc(100vh-68px)]'>
          <Outlet />
      </div>
      <div><Footer></Footer></div>
    </div>
  )
}

export default RootLayout