import React from 'react';

const UserDashboard = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
                <div className="text-2xl font-bold text-blue-700">MediPlan</div>
                <nav className="space-x-6 text-gray-700">
                    <a href="#dashboard" className="hover:text-blue-600">Dashboard</a>
                    <a href="#appointments" className="hover:text-blue-600">Appointments</a>
                    <a href="#history" className="hover:text-blue-600">History</a>
                    <a href="#profile" className="hover:text-blue-600">Profile</a>
                    <a href="#logout" className="text-red-500 font-medium hover:text-red-600">Logout</a>
                </nav>
            </header>

            {/* Main Content */}
            <main className="flex flex-col lg:flex-row flex-grow">
                {/* Sidebar */}
                <aside className="lg:w-1/4 w-full bg-white p-6 shadow-lg space-y-6">
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Quick Actions</h2>
                        <ul className="space-y-2">
                            <li><button className="w-full text-left px-4 py-2 bg-blue-100 hover:bg-blue-200 rounded">Book Appointment</button></li>
                            <li><button className="w-full text-left px-4 py-2 bg-blue-100 hover:bg-blue-200 rounded">View Prescriptions</button></li>
                            <li><button className="w-full text-left px-4 py-2 bg-blue-100 hover:bg-blue-200 rounded">Upload Documents</button></li>
                            <li><button className="w-full text-left px-4 py-2 bg-blue-100 hover:bg-blue-200 rounded">Billing Info</button></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-2">Settings</h2>
                        <ul className="space-y-2">
                            <li><button className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded">Notification</button></li>
                            <li><button className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded">Account Info</button></li>
                            <li><button className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded">Change Password</button></li>
                        </ul>
                    </div>
                </aside>

                {/* Dashboard Content */}
                <section className="flex-1 p-6 space-y-6 overflow-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="text-sm text-gray-500">Upcoming Appointments</h3>
                            <p className="text-2xl font-bold text-blue-600">3</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="text-sm text-gray-500">Pending Reports</h3>
                            <p className="text-2xl font-bold text-yellow-500">2</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="text-sm text-gray-500">Total Visits</h3>
                            <p className="text-2xl font-bold text-green-600">15</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="text-sm text-gray-500">Medicines Due</h3>
                            <p className="text-2xl font-bold text-red-500">1</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-4">Recent Appointments</h2>
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr>
                                    <th className="border-b p-2">Date</th>
                                    <th className="border-b p-2">Doctor</th>
                                    <th className="border-b p-2">Status</th>
                                    <th className="border-b p-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-2">2025-04-20</td>
                                    <td className="p-2">Dr. Sharma</td>
                                    <td className="p-2 text-green-600">Completed</td>
                                    <td className="p-2"><button className="text-blue-500 hover:underline">View</button></td>
                                </tr>
                                <tr>
                                    <td className="p-2">2025-04-21</td>
                                    <td className="p-2">Dr. Verma</td>
                                    <td className="p-2 text-yellow-600">Pending</td>
                                    <td className="p-2"><button className="text-blue-500 hover:underline">View</button></td>
                                </tr>
                                <tr>
                                    <td className="p-2">2025-04-22</td>
                                    <td className="p-2">Dr. Iyer</td>
                                    <td className="p-2 text-blue-600">Scheduled</td>
                                    <td className="p-2"><button className="text-blue-500 hover:underline">View</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-4">Medical Reminders</h2>
                        <ul className="space-y-2">
                            <li className="flex items-center justify-between">
                                <span>Vitamin D Supplement</span>
                                <span className="text-sm text-gray-500">Daily at 8 AM</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span>Blood Test</span>
                                <span className="text-sm text-gray-500">2025-04-25</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span>Eye Check-up</span>
                                <span className="text-sm text-gray-500">2025-05-01</span>
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

export default UserDashboard;