import React from 'react';
import { useNavigate } from 'react-router'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import stethoscopeBg from '../../../assets/stethoscope.jpg'; // adjust path as needed
import HomePageHeader from '../UI/HomePageHeader';
const LoginForm = () => {
  const navigate = useNavigate();
  const handleNavigation = (route) => {
    navigate(route);
  }
  return (
    <div className='bg-[#E6E6FA]'>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-1">
        <HomePageHeader />
      </div>
      <div className="mt-8 sm:mt-4 min-h-screen mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 bg-cover bg-center flex flex-col items-center justify-center">
        <div className=" bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-lg mx-4">
          <h2 className="text-3xl font-bold text-center text-black mb-6">Welcome to MediPlan</h2>

          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="example@email.com"
                className="w-full px-4 py-2 mt-1 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label htmlFor="password" className="block font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="********"
                className="w-full px-4 py-2 mt-1 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl transition-all"
              >
                Login
              </button>
            </div>
          </form>

          <div className="my-4 flex items-center justify-between">
            <hr className="w-1/3 border-gray-300" />
            <span className="text-gray-500 text-sm">or continue with</span>
            <hr className="w-1/3 border-gray-300" />
          </div>

          <div className="flex gap-4 justify-center">
            <button className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:shadow transition">

              <FcGoogle alt="Google" className="w-5 h-5" />
              <span>Login with Google</span>
            </button>
            <button className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:shadow transition">

              <FaGithub alt="GitHub" className="w-5 h-5" />
              <span>Login with GitHub</span>
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don’t have an account? <a href="#" onClick={() => { handleNavigation("/signup") }} className="text-blue-600 underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
