import React, { useState } from 'react';
import { FiBell, FiFileText, FiCalendar, FiUser, FiArrowLeft, FiTrash2, FiMail, FiPhone } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import HeaderPage from '../../UI/HeaderPage';
import DashboardSidebar from './DashboardSidebar';

const Notification = () => {
    const [notifications, setNotifications] = useState([
        { id: 1, message: 'Your appointment with Dr. Sharma is tomorrow at 10 AM.', date: '2025-05-19', type: 'Appointment' },
        { id: 2, message: 'New lab report available for download.', date: '2025-05-18', type: 'Report' },
        { id: 3, message: 'Payment of $50 due for consultation.', date: '2025-05-17', type: 'Billing' },
    ]);

    const [preferences, setPreferences] = useState({
        email: true,
        sms: false,
        app: true,
    });

    const handlePreferenceChange = (type) => {
        setPreferences({ ...preferences, [type]: !preferences[type] });
    };

    const handleClearNotification = (id) => {
        setNotifications(notifications.filter((notif) => notif.id !== id));
    };

    const handleClearAll = () => {
        setNotifications([]);
    };

    return (
        <div className="min-h-screen bg-[#E6E6FA] flex flex-col">
            {/* Header */}
            <HeaderPage ButtonText={"Log out"} />

            {/* Main Content */}
            <main className="flex flex-col lg:flex-row flex-grow  mt-17">
                {/* Sidebar */}
                <DashboardSidebar />

                {/* Main Section */}
                <section className="flex-1 p-8 space-y-8 overflow-auto">
                    <div className="flex items-center space-x-4">
                        <Link to="/user-dashboard" className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-800">
                            <FiArrowLeft size={24} />
                            <h1 className="text-3xl font-bold text-blue-600 flex items-center">
                                <FiBell className="mr-2" /> Notifications
                            </h1>
                        </Link>
                    </div>

                    {/* Notification Preferences */}
                    <div className="bg-white p-4 sm:p-8 rounded-xl shadow-lg">
                        <h2 className="text-xl font-semibold text-blue-600 mb-6 flex items-center">
                            <FiBell className="mr-2" /> Notification Preferences
                        </h2>
                        <div className="space-y-4">
                            {/* Email */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 w-full">
                                <div className="flex items-center">
                                    <FiMail className="mr-3 text-blue-600" size={20} />
                                    <span className="text-gray-700">Email Notifications</span>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer mt-2 sm:mt-0">
                                    <input
                                        type="checkbox"
                                        checked={preferences.email}
                                        onChange={() => handlePreferenceChange('email')}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 border-1 border-gray-600 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 transition-colors flex items-center">
                                        <div className={`w-5 h-5 border-1 border-gray-600 bg-white rounded-full shadow transition-transform duration-300 ${preferences.email ? 'translate-x-5' : 'translate-x-0.5'}`} />
                                    </div>
                                </label>
                            </div>
                            {/* SMS */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 w-full">
                                <div className="flex items-center">
                                    <FiPhone className="mr-3 text-blue-600" size={20} />
                                    <span className="text-gray-700">SMS Notifications</span>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer mt-2 sm:mt-0">
                                    <input
                                        type="checkbox"
                                        checked={preferences.sms}
                                        onChange={() => handlePreferenceChange('sms')}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 border-1 border-gray-600 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 transition-colors flex items-center">
                                        <div className={`w-5 h-5 bg-white border-1 border-gray-600 rounded-full shadow transition-transform duration-300 ${preferences.sms ? 'translate-x-5' : 'translate-x-0.5'}`} />
                                    </div>
                                </label>
                            </div>
                            {/* App */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 w-full">
                                <div className="flex items-center">
                                    <FiBell className="mr-3 text-blue-600" size={20} />
                                    <span className="text-gray-700">App Notifications</span>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer mt-2 sm:mt-0">
                                    <input
                                        type="checkbox"
                                        checked={preferences.app}
                                        onChange={() => handlePreferenceChange('app')}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 border-1 border-gray-600 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 transition-colors flex items-center">
                                        <div className={`w-5 h-5 bg-white border-1 border-gray-600 rounded-full shadow transition-transform duration-300 ${preferences.app ? 'translate-x-5' : 'translate-x-0.5'}`} />
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Recent Notifications */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold text-blue-600 flex items-center">
                                <FiBell className="mr-2" /> Recent Notifications
                            </h2>
                            {notifications.length > 0 && (
                                <button
                                    onClick={handleClearAll}
                                    className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                                >
                                    <FiTrash2 className="mr-2" /> Clear All
                                </button>
                            )}
                        </div>
                        {notifications.length > 0 ? (
                            <ul className="space-y-4">
                                {notifications.map((notif) => (
                                    <li key={notif.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                        <div>
                                            <p className="text-gray-700">{notif.message}</p>
                                            <p className="text-sm text-gray-500">{notif.date} | {notif.type}</p>
                                        </div>
                                        <button
                                            onClick={() => handleClearNotification(notif.id)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            <FiTrash2 size={20} />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-500 text-center">No notifications to display.</p>
                        )}
                    </div>

                    {/* Notification Tips */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h2 className="text-xl font-semibold text-blue-600 mb-6 flex items-center">
                            <FiBell className="mr-2" /> Notification Tips
                        </h2>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start">
                                <span className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center mr-3">1</span>
                                Enable notifications to stay updated on appointments and payments.
                            </li>
                            <li className="flex items-start">
                                <span className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center mr-3">2</span>
                                Clear old notifications to keep your inbox organized.
                            </li>
                            <li className="flex items-start">
                                <span className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center mr-3">3</span>
                                Choose your preferred notification method for convenience.
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

export default Notification;