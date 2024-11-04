import { createBrowserRouter } from "react-router-dom";
import RootLayout from '../Root/RootLayout'
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage />,
    children:[{
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/login',
      element:<SignIn></SignIn>
    },
    {
      path:'/register',
      element:<SignUp></SignUp>
    },
  ]
  },
]);

