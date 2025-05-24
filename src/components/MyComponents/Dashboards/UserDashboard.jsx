import React, { useState } from 'react';
import { FiCalendar, FiFileText, FiUpload, FiDollarSign, FiBell, FiUser, FiLock, FiClock, FiTablet, FiEye, FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router'
import HeaderPage from '../UI/HeaderPage';
import { Sidebar } from '../UI/Sidebar';
import DashboardSidebar from './Pages/DashboardSidebar';

const UserDashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reminder, setReminder] = useState({ name: '', date: '', time: '' });
    const navigate = useNavigate(); 
    const handleNavigation = (route) => {
		navigate(route);
	}
    const handleReminderSubmit = (e) => {
        e.preventDefault();
        console.log('New Reminder:', reminder);
        setIsModalOpen(false);
        setReminder({ name: '', date: '', time: '' });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <HeaderPage ButtonText={"Log out"} />

            {/* Main Content */}
            <main className=" bg-[#E6E6FA] flex flex-col lg:flex-row flex-grow mt-17">
                {/* Sidebar */}
                <DashboardSidebar/>

                {/* Dashboard Content */}
                <section className="flex-1 p-8 space-y-8 overflow-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        <div className="bg-white p-6 flex flex-col justify-between rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                            <h3 className="text-sm text-gray-500 flex items-center">
                                <FiCalendar className="mr-2 text-2xl text-[#2C2C54]" /> Upcoming Appointments
                            </h3>
                            <p className="text-3xl font-bold text-[#2C2C54] mt-2">3</p>
                        </div>
                        <div className="bg-white p-6 flex flex-col justify-between rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                            <h3 className="text-sm text-gray-500 flex items-center">
                                <FiFileText className="mr-2 text-2xl text-yellow-500" /> Pending Reports
                            </h3>
                            <p className="text-3xl font-bold text-yellow-500 mt-2">2</p>
                        </div>
                        <div className="bg-white p-6 flex flex-col justify-between rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                            <h3 className="text-sm text-gray-500 flex items-center">
                                <FiClock className="mr-2 text-2xl text-green-600" /> Total Visits
                            </h3>
                            <p className="text-3xl font-bold text-green-600 mt-2">15</p>
                        </div>
                        <div className="bg-white p-6 flex flex-col justify-between rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                            <h3 className="text-sm text-gray-500 flex items-center">
                                <FiTablet className="mr-2 text-2xl text-red-500" /> Medicines Due
                            </h3>
                            <p className="text-3xl font-bold text-red-500 mt-2">1</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h2 className="text-xl font-semibold text-[#2C2C54] mb-6 flex items-center">
                            <FiCalendar className="mr-2 text-2xl" /> Recent Appointments
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-white">
                                        <th className="border-b p-4 text-[#2C2C54]">Date</th>
                                        <th className="border-b p-4 text-[#2C2C54]">Doctor</th>
                                        <th className="border-b p-4 text-[#2C2C54]">Status</th>
                                        <th className="border-b p-4 text-[#2C2C54]">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-gray-50 transition">
                                        <td className="p-4">2025-04-20</td>
                                        <td className="p-4">Dr. Sharma</td>
                                        <td className="p-4 text-green-600">Completed</td>
                                        <td className="p-4">
                                            <button className="flex items-center text-blue-500 hover:text-blue-700 transition">
                                                <FiEye className="mr-1" /> View
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition">
                                        <td className="p-4">2025-04-21</td>
                                        <td className="p-4">Dr. Verma</td>
                                        <td className="p-4 text-yellow-600">Pending</td>
                                        <td className="p-4">
                                            <button className="flex items-center text-blue-500 hover:text-blue-700 transition">
                                                <FiEye className="mr-1" /> View
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition">
                                        <td className="p-4">2025-04-22</td>
                                        <td className="p-4">Dr. Iyer</td>
                                        <td className="p-4 text-[#2C2C54]">Scheduled</td>
                                        <td className="p-4">
                                            <button className="flex items-center text-blue-500 hover:text-blue-700 transition">
                                                <FiEye className="mr-1" /> View
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold text-[#2C2C54] flex items-center">
                                <FiTablet className="mr-2 text-2xl" /> Medical Reminders
                            </h2>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                            >
                                <FiPlus className="mr-2 text-2xl" /> Add Reminder
                            </button>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <span className="flex items-center text-gray-700">
                                    <FiTablet className="mr-2 text-2xl text-[#2C2C54]" /> Vitamin D Supplement
                                </span>
                                <span className="text-sm text-gray-500">Daily at 8 AM</span>
                            </li>
                            <li className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <span className="flex items-center text-gray-700">
                                    <FiFileText className="mr-2 text-2xl text-[#2C2C54]" /> Blood Test
                                </span>
                                <span className="text-sm text-gray-500">2025-04-25</span>
                            </li>
                            <li className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <span className="flex items-center text-gray-700">
                                    <FiEye className="mr-2 text-2xl text-[#2C2C54]" /> Eye Check-up
                                </span>
                                <span className="text-sm text-gray-500">2025-05-01</span>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>

            {/* Reminder Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
                        <h2 className="text-xl font-semibold text-[#2C2C54] mb-6">Set Medical Reminder</h2>
                        <form onSubmit={handleReminderSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Reminder Name</label>
                                <input
                                    type="text"
                                    value={reminder.name}
                                    onChange={(e) => setReminder({ ...reminder, name: e.target.value })}
                                    className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                                    placeholder="e.g., Blood Pressure Check"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Date</label>
                                <input
                                    type="date"
                                    value={reminder.date}
                                    onChange={(e) => setReminder({ ...reminder, date: e.target.value })}
                                    className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Time</label>
                                <input
                                    type="time"
                                    value={reminder.time}
                                    onChange={(e) => setReminder({ ...reminder, time: e.target.value })}
                                    className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                                    required
                                />
                            </div>
                            <div className="flex space-x-4 mt-6">
                                <button
                                    type="submit"
                                    className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                >
                                    Save Reminder
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="flex-1 px-4 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Footer */}
            <footer className="bg-white p-4 text-center shadow-inner text-sm text-gray-500">
                © 2025 MediPlan | All rights reserved
            </footer>
        </div>
    );
};

export default UserDashboard;