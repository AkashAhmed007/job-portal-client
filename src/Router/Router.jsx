import { createBrowserRouter } from "react-router-dom";
import RootLayout from '../Root/RootLayout'
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage />,
    children:[{
      path:'/',
      element:<Home></Home>
    }]
  },
]);

