import React, { useState } from 'react';
import { FiUser, FiFileText, FiCalendar, FiArrowLeft, FiEdit, FiMail, FiPhone, FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import HeaderPage from '../UI/HeaderPage';

const AccountInfo = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+91 98765 43210',
  });
  const [isEditing, setIsEditing] = useState(false);

  const activityLog = [
    { id: 1, action: 'Logged in', date: '2025-05-20 09:00 AM' },
    { id: 2, action: 'Updated profile', date: '2025-05-19 03:15 PM' },
    { id: 3, action: 'Booked appointment', date: '2025-05-18 11:30 AM' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically make an API call to save the updated user info
    console.log('Updated user info:', userInfo);
  };

  return (
    <div className="min-h-screen bg-[#E6E6FA] flex flex-col">
      {/* Header */}
      <HeaderPage />

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row flex-grow">
        {/* Sidebar */}
        <aside className="lg:w-1/4 w-full bg-white p-6 shadow-lg space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-blue-600 mb-4 flex items-center">
              <FiFileText className="mr-2" /> Quick Actions
            </h2>
            <ul className="space-y-3">
              <li>
                <Link to="/book-appointment" className="w-full flex items-center px-4 py-3 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition">
                  <FiCalendar className="mr-2" /> Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/view-prescriptions" className="w-full flex items-center px-4 py-3 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition">
                  <FiFileText className="mr-2" /> View Prescriptions
                </Link>
              </li>
              <li>
                <Link to="/upload-documents" className="w-full flex items-center px-4 py-3 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition">
                  <FiFileText className="mr-2" /> Upload Documents
                </Link>
              </li>
              <li>
                <Link to="/billing-info" className="w-full flex items-center px-4 py-3 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition">
                  <FiFileText className="mr-2" /> Billing Info
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-blue-600 mb-4 flex items-center">
              <FiUser className="mr-2" /> Settings
            </h2>
            <ul className="space-y-3">
              <li>
                <Link to="/notification" className="w-full flex items-center px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg transition">
                  <FiFileText className="mr-2" /> Notification
                </Link>
              </li>
              <li>
                <Link to="/account-info" className="w-full flex items-center px-4 py-3 bg-blue-600 text-white rounded-lg transition">
                  <FiUser className="mr-2" /> Account Info
                </Link>
              </li>
              <li>
                <Link to="/change-password" className="w-full flex items-center px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg transition">
                  <FiFileText className="mr-2" /> Change Password
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Section */}
        <section className="flex-1 p-8 space-y-8 overflow-auto">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="text-blue-600 hover:text-blue-800">
              <FiArrowLeft size={24} />
            </Link>
            <h1 className="text-3xl font-bold text-blue-600 flex items-center">
              <FiUser className="mr-2" /> Account Info
            </h1>
          </div>

          {/* User Information */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-blue-600 flex items-center">
                <FiUser className="mr-2" /> Personal Information
              </h2>
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  <FiEdit className="mr-2" /> Edit Profile
                </button>
              ) : (
                <div className="flex space-x-4">
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={userInfo.firstName}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className={`w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 ${!isEditing ? 'bg-gray-100' : ''}`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={userInfo.lastName}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className={`w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 ${!isEditing ? 'bg-gray-100' : ''}`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <div className="flex items-center mt-1">
                  <FiMail className="mr-3 text-blue-600" />
                  <input
                    type="email"
                    name="email"
                    value={userInfo.email}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 ${!isEditing ? 'bg-gray-100' : ''}`}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <div className="flex items-center mt-1">
                  <FiPhone className="mr-3 text-blue-600" />
                  <input
                    type="text"
                    name="phone"
                    value={userInfo.phone}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 ${!isEditing ? 'bg-gray-100' : ''}`}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Account Activity */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-blue-600 mb-6 flex items-center">
              <FiClock className="mr-2" /> Account Activity
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="border-b p-4 text-blue-600">Action</th>
                    <th className="border-b p-4 text-blue-600">Date & Time</th>
                  </tr>
                </thead>
                <tbody>
                  {activityLog.map((activity) => (
                    <tr key={activity.id} className="hover:bg-gray-50 transition">
                      <td className="p-4">{activity.action}</td>
                      <td className="p-4">{activity.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Account Tips */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-blue-600 mb-6 flex items-center">
              <FiUser className="mr-2" /> Account Management Tips
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center mr-3">1</span>
                Keep your contact information up to date for better communication.
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center mr-3">2</span>
                Review your account activity regularly for security.
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center mr-3">3</span>
                Contact support if you notice any unusual activity.
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

export default AccountInfo;