import React, { useState } from 'react';
import { FiLock, FiFileText, FiCalendar, FiUser, FiArrowLeft, FiEye, FiEyeOff } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import HeaderPage from '../../UI/HeaderPage';
import DashboardSidebar from './DashboardSidebar';

const ChangePassword = () => {
    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.currentPassword) newErrors.currentPassword = 'Current password is required';
        if (!formData.newPassword) newErrors.newPassword = 'New password is required';
        else if (formData.newPassword.length < 8) newErrors.newPassword = 'New password must be at least 8 characters long';
        if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your new password';
        else if (formData.newPassword !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
        setSuccessMessage('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSuccessMessage('');
        } else {
            // Simulate API call to change password
            console.log('Password change request:', formData);
            setSuccessMessage('Password changed successfully!');
            setFormData({ currentPassword: '', newPassword: '', confirmPassword: '' });
            setErrors({});
        }
    };

    return (
        <div className="min-h-screen bg-[#E6E6FA] flex flex-col">
            {/* Header */}
            <HeaderPage ButtonText={"Log out"} />

            {/* Main Content */}
            <main className="flex flex-col lg:flex-row flex-grow mt-17">
                {/* Sidebar */}
                <DashboardSidebar/>

                {/* Main Section */}
                <section className="flex-1 p-8 space-y-8 overflow-auto">
                    <div className="flex items-center space-x-4">
                        <Link to="/dashboard" className="text-blue-600 hover:text-blue-800">
                            <FiArrowLeft size={24} />
                        </Link>
                        <h1 className="text-3xl font-bold text-blue-600 flex items-center">
                            <FiLock className="mr-2" /> Change Password
                        </h1>
                    </div>

                    {/* Change Password Form */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h2 className="text-xl font-semibold text-blue-600 mb-6 flex items-center">
                            <FiLock className="mr-2" /> Update Your Password
                        </h2>
                        {successMessage && (
                            <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg">
                                {successMessage}
                            </div>
                        )}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Current Password</label>
                                <div className="relative mt-1">
                                    <input
                                        type={showCurrentPassword ? 'text' : 'password'}
                                        name="currentPassword"
                                        value={formData.currentPassword}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                    >
                                        {showCurrentPassword ? <FiEyeOff /> : <FiEye />}
                                    </button>
                                </div>
                                {errors.currentPassword && (
                                    <p className="mt-1 text-sm text-red-500">{errors.currentPassword}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">New Password</label>
                                <div className="relative mt-1">
                                    <input
                                        type={showNewPassword ? 'text' : 'password'}
                                        name="newPassword"
                                        value={formData.newPassword}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowNewPassword(!showNewPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                    >
                                        {showNewPassword ? <FiEyeOff /> : <FiEye />}
                                    </button>
                                </div>
                                {errors.newPassword && (
                                    <p className="mt-1 text-sm text-red-500">{errors.newPassword}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                                <div className="relative mt-1">
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                    >
                                        {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                                    </button>
                                </div>
                                {errors.confirmPassword && (
                                    <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                            >
                                Change Password
                            </button>
                        </form>
                    </div>

                    {/* Password Tips */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h2 className="text-xl font-semibold text-blue-600 mb-6 flex items-center">
                            <FiLock className="mr-2" /> Password Security Tips
                        </h2>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start">
                                <span className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center mr-3">1</span>
                                Use a strong password with at least 8 characters, including letters, numbers, and symbols.
                            </li>
                            <li className="flex items-start">
                                <span className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center mr-3">2</span>
                                Avoid using personal information (e.g., name, birthday) in your password.
                            </li>
                            <li className="flex items-start">
                                <span className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center mr-3">3</span>
                                Change your password regularly and never reuse passwords across different sites.
                            </li>
                        </ul>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-white p-4 text-center shadow-inner text-sm text-gray-500">
                © 2025 MediPlan | All rights reserved
            </footer>
        </div>
    );
};

export default ChangePassword;