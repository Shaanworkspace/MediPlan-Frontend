import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import stethoscopeBg from '../../../assets/stethoscope.jpg'; // adjust path as needed
import HomePageHeader from '../UI/HomePageHeader';
import { useNavigate } from 'react-router'
const SignupForm = () => {
    // State to handle input values (for form handling and validation)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        company: ''
    });
    const navigate = useNavigate();
    const handleNavigation = (route) => {
        navigate(route);
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form validation and submission logic here
    };

    return (
        <div className='bg-[#E6E6FA]'>
            {/* Navbar */}
            <div className="fixed top-0 left-0 w-full z-1">
                <HomePageHeader />
            </div>
            <div className="pt-20  min-h-screen mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 bg-cover bg-center flex items-center justify-center" >
                <div className="backdrop-blur-md p-8 rounded-2xl w-full max-w-4xl mx-4">
                    <h2 className="text-4xl font-bold text-center text-black mb-6">Create an Account</h2>

                    <form className="space-y-4 pt-3 " onSubmit={handleSubmit}>
                        <div className="flex space-x-4">
                            <div className="w-1/2">
                                <label htmlFor="firstName" className="block font-medium text-gray-700">First Name</label>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 mt-1 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="John"
                                />
                            </div>
                            <div className="w-1/2">
                                <label htmlFor="lastName" className="block font-medium text-gray-700">Last Name</label>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 mt-1 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>


                        <div>
                            <label htmlFor="email" className="block font-medium text-gray-700">Email Address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="example@email.com"
                                className="w-full px-4 py-2 mt-1 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />

                        </div>
                        <div className="flex space-x-4">

                            <div className='w-1/2'>
                                <label htmlFor="password" className="block font-medium text-gray-700">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="********"
                                    className="w-full px-4 py-2 mt-1 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div className='w-1/2'>
                                <label htmlFor="confirmPassword" className="block font-medium text-gray-700">Confirm Password</label>
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="********"
                                    className="w-full px-4 py-2 mt-1 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                        </div>
                        <div className="flex space-x-4">

                            <div className="w-1/2">
                                <label htmlFor="phone" className="block font-medium text-gray-700">Phone Number</label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="123-456-7890"
                                    className="w-full px-4 py-2 mt-1 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            <div className='w-1/2'>
                                <label htmlFor="company" className="block font-medium text-gray-700">Company</label>
                                <input
                                    id="company"
                                    name="company"
                                    type="text"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Ex. Google"
                                    className="w-full px-4 py-2 mt-1 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="hover:shadow-xl shadow-md duration-300 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl transition-all"
                        >
                            Sign Up
                        </button>
                    </form>

                    <div className="my-4 flex items-center justify-between">
                        <hr className="w-1/3 border-gray-300" />
                        <span className="text-gray-500 text-sm">or continue with</span>
                        <hr className="w-1/3 border-gray-300" />
                    </div>

                    <div className="flex gap-4 justify-center">
                        <button className="hover:shadow-xl font-semibold bg-white shadow-md duration-300 flex items-center gap-2 border px-4 py-2 rounded-lg transition">
                            <FcGoogle alt="Google" className="w-5 h-5" />
                            <span>Sign up with Google</span>
                        </button>
                        <button className="hover:shadow-xl shadow-md duration-300 bg-black/80 text-white font-semibold flex items-center gap-2 border px-4 py-2 rounded-lg transition">
                            <FaGithub alt="GitHub" className="w-5 h-5" />
                            <span>Sign up with GitHub</span>
                        </button>
                    </div>

                    <p className="mt-6 text-center text-sm text-gray-600">
                        Already have an account? <a onClick={() => { handleNavigation("/login") }} className="text-blue-600 underline">Login</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;