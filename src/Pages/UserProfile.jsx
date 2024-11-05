import useAuth from '../hooks/useAuth'
import { Helmet } from 'react-helmet-async'
import wallpaper from '../assets/wallpaper.jpg'
import LoadingSpinner from '../spinner/LoadingSpinner'

const UserProfile = () => {
  const { user, loading, isLoading } = useAuth()
  console.log(user)
  if (isLoading || loading) return <LoadingSpinner />
  return (
    <div className='flex justify-center items-center h-screen'>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className='bg-white shadow-lg rounded-2xl w-3/5'>
        <img
          alt='profile'
          src={wallpaper}
          className='w-full mb-4 h-48'
        />
        <div className='flex flex-col items-center justify-center p-4 -mt-16'>
          <a href='#' className='relative block'>
            <img
              alt='profile'
              src={user?.photoURL}
              className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
            />
          </a>

          <p className='p-2 uppercase px-4 text-xs text-white bg-blue-500 rounded-full'>
           Job Seeker
          </p>
          <div className='w-full p-2 mt-4 rounded-lg'>
            <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
              <p className='flex flex-col'>
                Name
                <span className='font-bold text-black '>
                  {user?.displayName}
                </span>
              </p>
              <p className='flex flex-col'>
                Email
                <span className='font-bold text-black '>{user?.email}</span>
              </p>

              <div>
                <button className='bg-green-800 px-10 py-1 rounded-lg text-green-100 cursor-pointer hover:bg-green-500 hover:text-green-200 block mb-1'>
                  Update Profile
                </button>
                <button className='bg-green-800 px-7 py-1 rounded-lg text-green-100 cursor-pointer hover:bg-green-500 hover:text-green-200'>
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile