import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { ImSpinner3 } from "react-icons/im";
import useAuth from "../hooks/useAuth";
import { imageUpload } from "../ImageUpload/index";
import { useState } from "react";
import axios from "axios";
const SignUp = () => {
  const {
    createUser,
    signInWithGoogle,
    updateUserProfile,
    loading,
    setLoading,
  } = useAuth();

  const [userRole, setUserRole] = useState("");
  const isGoogleDisabled = !userRole;

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];
    const role = userRole;
    const users = {
      name,
      email,
      password,
      image,
      role,
    };
    const response = await axios.post("http://localhost:8000/users", users);
    console.log(response);

    try {
      setLoading(true);
      const image_url = await imageUpload(image);

      //userCreate
      await createUser(email, password, role, image_url);
      //updateUserProfile
      await updateUserProfile(name, image_url);
      navigate("/");
      toast.success("Signup Successful!");
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      const response = await signInWithGoogle();
      console.log(
        response.user.displayName,
        response.user.email,
        response.user.photoURL,
        userRole
      );

      const users = {
       name : response.user.displayName,
       email :  response.user.email,
       image_url :response.user.photoURL,
       role : userRole
      }

      const result = await axios.post("http://localhost:8000/users",users)
      console.log(result)

      navigate("/");
      toast.success("Signup Successful");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-md m-6 p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">Welcome to CareerNest</p>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Sign up as:</label>
          <div className="flex space-x-4">
            <button
              onClick={() => setUserRole("jobSeeker")}
              className={`py-2 px-4 rounded ${
                userRole === "jobSeeker"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              Job Seeker
            </button>
            <button
              onClick={() => setUserRole("recruiter")}
              className={`py-2 px-4 rounded ${
                userRole === "recruiter"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              Recruiter
            </button>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
                autoComplete="email"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                autoComplete="new-password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
              />
            </div>
          </div>

          <div>
            <button
              disabled={loading}
              type="submit"
              className="bg-blue-500 w-full rounded-md py-3 text-white"
            >
              {loading ? (
                <ImSpinner3 className="animate-spin m-auto" />
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <button
          onClick={handleGoogleSignIn}
          disabled={isGoogleDisabled}
          className={`mt-4 px-4 py-2 ${
            isGoogleDisabled ? "bg-gray-400" : "bg-blue-600 text-white"
          } rounded`}
        >
          <div className="flex justify-center items-center">
            <FcGoogle size={32} />

            <p>Continue with Google</p>
          </div>
        </button>
        <p className="px-6 text-sm text-center text-gray-400 pt-2">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-blue-500 text-gray-600"
          >
            Sign In
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
