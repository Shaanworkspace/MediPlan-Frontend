import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FiUser, FiMail, FiLock, FiPhone, FiUserCheck } from "react-icons/fi";
import HomePageHeader from '../UI/HomePageHeader';
import { useNavigate } from 'react-router';
import axios from 'axios';
import HomeHeader from '../UI/HomeHeader';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        role: '',
    });
    const navigate = useNavigate();

    const handleNavigation = (route) => {
        navigate(route);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate password match
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // Validate email format
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            alert("Invalid email format");
            return;
        }

        // Validate role selection
        if (!formData.role) {
            alert("Please select a role");
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/auth/register', {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                password: formData.password,
                confirmPassword: formData.confirmPassword,
                passwordWithoutEncryption: formData.password,
                phone: formData.phone,
                role: formData.role,
            });

            alert('Registration successful!');

            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
                phone: '',
                role: '',
            });

            navigate('/login');
        } catch (err) {
            console.error('Registration error:', err.response);

            // Handle different types of error messages gracefully
            const errorMsg = err.response?.data
                ? typeof err.response.data === 'string'
                    ? err.response.data
                    : JSON.stringify(err.response.data, null, 2)
                : 'Registration failed. Please try again.';

            alert(errorMsg);
        }
    };

    return (
        <div className="bg-[#E6E6FA] min-h-screen">
            {/* Navbar */}     
                <HomeHeader />
            {/* Main Content */}
            <div className="pt-24 mt-4 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="bg-white bg-opacity-90 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-full max-w-3xl border border-blue-200 transform transition-all duration-300 hover:shadow-3xl">
                    <h2 className="text-4xl font-bold text-center text-blue-600 mb-8 tracking-tight">
                        Create Your Account
                    </h2>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="flex space-x-4">
                            {/* First Name */}
                            <div className="w-1/2">
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                <div className="relative">
                                    <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 hover:border-blue-300"
                                        placeholder="John"
                                    />
                                </div>
                            </div>
                            {/* Last Name */}
                            <div className="w-1/2">
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                <div className="relative">
                                    <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 hover:border-blue-300"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <div className="relative">
                                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="example@email.com"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 hover:border-blue-300"
                                />
                            </div>
                        </div>

                        <div className="flex space-x-4">
                            {/* Password */}
                            <div className="w-1/2">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <div className="relative">
                                    <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="********"
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 hover:border-blue-300"
                                    />
                                </div>
                            </div>
                            {/* Confirm Password */}
                            <div className="w-1/2">
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                                <div className="relative">
                                    <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="********"
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 hover:border-blue-300"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex space-x-4">
                            {/* Phone */}
                            <div className="w-1/2">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <div className="relative">
                                    <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="123-456-7890"
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 hover:border-blue-300"
                                    />
                                </div>
                            </div>
                            {/* Role Dropdown */}
                            <div className="w-1/2">
                                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                                <div className="relative">
                                    <FiUserCheck className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
                                    <select
                                        id="role"
                                        name="role"
                                        value={formData.role}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 hover:border-blue-300 appearance-none"
                                    >
                                        <option value="">Select Role</option>
                                        <option value="ADMIN">Admin</option>
                                        <option value="PATIENT">Patient</option>
                                        <option value="CARE_GIVER">Caregiver</option>
                                    </select>

                                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
                        >
                            Sign Up
                        </button>
                    </form>

                    <div className="my-6 flex items-center justify-between">
                        <hr className="w-1/3 border-gray-300" />
                        <span className="text-gray-500 text-sm font-medium">or continue with</span>
                        <hr className="w-1/3 border-gray-300" />
                    </div>

                    <div className="flex gap-4 justify-center">
                        <button className="bg-white text-gray-700 font-semibold flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-xl transition-all duration-300 hover:bg-gray-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300">
                            <FcGoogle className="w-5 h-5" />
                            <span>Sign up with Google</span>
                        </button>
                        <button className="bg-gray-900 text-white font-semibold flex items-center gap-2 border border-gray-700 px-6 py-3 rounded-xl transition-all duration-300 hover:bg-gray-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300">
                            <FaGithub className="w-5 h-5" />
                            <span>Sign up with GitHub</span>
                        </button>
                    </div>

                    <p className="mt-8 text-center text-sm text-gray-600">
                        Already have an account?{' '}
                        <button
                            onClick={() => handleNavigation("/login")}
                            className="text-blue-600 font-semibold hover:underline focus:outline-none"
                        >
                            Login
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;