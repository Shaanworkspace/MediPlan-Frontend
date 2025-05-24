import React from 'react'
import { FiCalendar, FiFileText, FiUpload, FiDollarSign, FiBell, FiUser, FiLock, FiClock, FiTablet, FiEye, FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router'
const DashboardSidebar = () => {
    const navigate = useNavigate();
    const handleNavigation = (route) => {
        navigate(route);
    }
    return (
        <div className="lg:w-1/4 w-full bg-[#E6E6FA] p-6 shadow-lg space-y-6">
            <div>
                <h2 className="text-lg font-semibold text-[#2C2C54] mb-4 flex items-center">
                    <FiBell className="mr-2 text-2xl" /> Quick Actions
                </h2>
                <ul className="space-y-3">
                    <li>
                        <button onClick={() => handleNavigation('/book-appointment')} className="w-full flex items-center px-4 py-3 bg-white hover:bg-blue-300 hover:shadow-xl shadow-lg  duration-300 text-[#2C2C54] rounded-lg transition">
                            <FiCalendar className="mr-2 text-2xl " /> Book Appointment
                        </button>
                    </li>
                    <li onClick={() => handleNavigation('/present')}>
                        <button className="w-full flex items-center px-4 py-3 bg-white hover:bg-blue-300 hover:shadow-xl shadow-lg  duration-300 text-[#2C2C54] rounded-lg transition">
                            <FiFileText className="mr-2 text-2xl" /> View Prescriptions
                        </button>
                    </li>
                    <li onClick={() => handleNavigation('/upload-documents')}>
                        <button className="w-full flex items-center px-4 py-3 bg-white hover:bg-blue-300 hover:shadow-xl shadow-lg  duration-300 text-[#2C2C54] rounded-lg transition">
                            <FiUpload className="mr-2 text-2xl" /> Upload Documents
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleNavigation('/info')} className="w-full flex items-center px-4 py-3 bg-white hover:bg-blue-300 hover:shadow-xl shadow-lg  duration-300 text-[#2C2C54] rounded-lg transition">
                            <FiDollarSign className="mr-2 text-2xl" /> Billing Info
                        </button>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="text-lg font-semibold text-[#2C2C54] mb-4 flex items-center">
                    <FiUser className="mr-2 text-2xl" /> Settings
                </h2>
                <ul className="space-y-3">
                    <li onClick={() => handleNavigation('/notification')} >
                        <button className="w-full flex items-center px-4 py-3 bg-gray-50 hover:bg-blue-300 hover:shadow-xl shadow-lg  duration-300 text-gray-700 rounded-lg transition">
                            <FiBell className="mr-2 text-2xl" /> Notification
                        </button>
                    </li>
                    <li onClick={() => handleNavigation('/account-info')} >
                        <button className="w-full flex items-center px-4 py-3 bg-gray-50 hover:bg-blue-300 hover:shadow-xl shadow-lg  duration-300 text-gray-700 rounded-lg transition">
                            <FiUser className="mr-2 text-2xl" /> Account Info
                        </button>
                    </li>
                    <li onClick={() => handleNavigation('/change-password')} >
                        <button className="w-full flex items-center px-4 py-3 bg-gray-50 hover:bg-blue-300 hover:shadow-xl shadow-lg  duration-300 text-gray-700 rounded-lg transition">
                            <FiLock className="mr-2 text-2xl" /> Change Password
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DashboardSidebar