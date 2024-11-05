import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Root/RootLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";

import AllJobs from "../Components/AllJobs";
import OnSiteJob from "../Components/OnSiteJob";
import RemoteJob from "../Components/RemoteJob";
import HybridJob from "../Components/HybridJob";
import PartTimeJob from "../Components/PartTimeJob";
import Blog from "../Pages/Blog";
import AddJobs from "../Pages/AddJobs";
import UserProfile from "../Pages/UserProfile";
import SignUp from "../Pages/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            index: true,
            element: <AllJobs></AllJobs>,
          },
          {
            path: "onsite-job",
            element: <OnSiteJob></OnSiteJob>,
          },
          {
            path: "remote-job",
            element: <RemoteJob></RemoteJob>,
          },
          {
            path: "hybrid-job",
            element: <HybridJob></HybridJob>,
          },
          {
            path: "part-time-job",
            element: <PartTimeJob></PartTimeJob>,
          },
        ],
      },
      {
        path: "/login",
        element: <SignIn></SignIn>,
      },
      {
        path: "/register",
        element: <SignUp></SignUp>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path:'all-jobs',
        element:<AllJobs></AllJobs>
      },
      {
        path:'addjobs',
        element:<AddJobs></AddJobs>
      },
      {
        path:'/profile',
        element:<UserProfile></UserProfile>
      }
    ],
  },
]);
