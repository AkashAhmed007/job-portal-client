import { createBrowserRouter } from "react-router-dom";
import RootLayout from '../Root/RootLayout'
import ErrorPage from "../Pages/ErrorPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage />,
  },
]);

