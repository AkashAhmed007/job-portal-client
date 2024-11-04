import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import avatarImg from "../assets/placeholder.jpg";
function Navbar() {
  const { user, logOut } = useAuth();
  console.log(user);
  const [theme, setTheme] = useState("light");
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  useEffect(() => {
    const setLocalStorageTheme = localStorage.setItem("theme", theme);
    const getTheme = localStorage.getItem(setLocalStorageTheme);
    document.querySelector("html").setAttribute("data-theme", getTheme);
  }, [theme]);

  return (
    <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex justify-between items-center h-16 mx-auto">
        <div className="navbar bg-base-100 lg:hidden">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 dark:text-gray-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link>Home</Link>
                </li>
                <li>
                  <Link>All Jobs</Link>
                </li>
                {user && (
                  <div>
                    <li className="flex">
                      <Link>Applied Jobs</Link>
                    </li>
                    <li className="flex">
                      <Link>Add A Jobs</Link>
                    </li>
                    <li className="flex">
                      <Link>My Jobs</Link>
                    </li>
                  </div>
                )}
                <li>
                  <Link>Blogs</Link>
                </li>
                <li>
                  <Link>User Profile</Link>
                </li>
                {user ? (
                  ""
                ) : (
                  <div>
                    <li>
                      <Link to="/login">Sign In</Link>
                    </li>
                    <li>
                      <Link to="/register">Sign Up</Link>
                    </li>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>

        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 32 32"
            className="w-8 h-8 dark:text-violet-600"
          >
            <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
            <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
          </svg>
          <span className="ml-2 font-bold text-2xl">CareerNest</span>
        </a>

        <div className="flex items-center justify-around lg:space-x-4">
          <ul className="items-center hidden space-x-3 lg:flex">
            <ul className="items-stretch hidden space-x-4 lg:flex">
              <li className="flex">
                <Link
                  to="/"
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600"
                >
                  Home
                </Link>
              </li>
              <li className="flex">
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
                >
                  All Jobs
                </Link>
              </li>
              {user && (
                <div className="flex">
                  <li className="flex">
                    <Link
                      rel="noopener noreferrer"
                      href="#"
                      className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
                    >
                      Applied Jobs
                    </Link>
                  </li>
                  <li className="flex">
                    <Link
                      rel="noopener noreferrer"
                      href="#"
                      className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
                    >
                      Add A Jobs
                    </Link>
                  </li>
                  <li className="flex">
                    <Link
                      rel="noopener noreferrer"
                      href="#"
                      className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
                    >
                      My Jobs
                    </Link>
                  </li>
                </div>
              )}
              <li className="flex">
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
                >
                  Blogs
                </Link>
              </li>
              <li className="flex">
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
                >
                  User Profile
                </Link>
              </li>
            </ul>
          </ul>

          <div className="flex justify-between space-x-4">
            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="user image"
                      referrerPolicy="no-referrer"
                      src={user && user.photoURL ? user.photoURL : avatarImg}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">
                      {user ? user.displayName : user.email}
                    </a>
                  </li>
                  <li>
                    <button onClick={logOut}>Logout</button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="flex justify-center items-center gap-2">
                <Link
                  to="/login"
                  className="border border-blue-600 hover:bg-blue-900 hover:text-blue-100 dark:border-blue-400 dark:hover:bg-blue-700 transform transition duration-300 text-black-900 font-semibold rounded hidden lg:block px-4 py-2"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="border border-blue-600 hover:bg-blue-900 hover:text-blue-100 dark:border-blue-400 dark:hover:bg-blue-700 transform transition duration-300 text-black-900 font-semibold rounded hidden lg:block px-4 py-2"
                >
                  Sign Up
                </Link>
              </div>
            )}

            <div className="flex items-center justify-center">
              <label className="swap swap-rotate">
                <input
                  onChange={handleToggle}
                  type="checkbox"
                  value="dark"
                  className="theme-controller"
                />
                <svg
                  className="swap-off h-10 w-10 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                <svg
                  className="swap-on h-10 w-10 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
