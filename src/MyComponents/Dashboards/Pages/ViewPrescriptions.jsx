import React from 'react';
import { FiFileText, FiDownload, FiCalendar, FiUser, FiTablet, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';
import HeaderPage from '../../UI/HeaderPage';

const ViewPrescriptions = () => {
    const adminName = localStorage.getItem('adminName') || 'Admin';
    const prescriptions = [
        {
            id: 1,
            date: '2025-04-20',
            doctor: 'Dr. Sharma',
            medication: 'Paracetamol 500mg',
            dosage: '1 tablet every 8 hours',
        },
        {
            id: 2,
            date: '2025-04-15',
            doctor: 'Dr. Verma',
            medication: 'Amoxicillin 250mg',
            dosage: '2 capsules daily for 5 days',
        },
        {
            id: 3,
            date: '2025-04-10',
            doctor: 'Dr. Iyer',
            medication: 'Vitamin D3 1000IU',
            dosage: '1 tablet daily',
        },
    ];

    return (
        <div className="min-h-screen bg-[#E6E6FA] flex flex-col">
            {/* Header */}
            <HeaderPage ButtonText={"Log out"} adminName={adminName} />
            {/* Main Content */}
            <main className="flex flex-col lg:flex-row flex-grow mt-17">
                {/* Sidebar */}
                <DashboardSidebar />

                {/* Main Section */}
                <section className="flex-1 p-8 space-y-8 overflow-auto">
                    <div className="flex items-center space-x-4">
                        <Link to="/user-dashboard" className="text-blue-600 hover:text-blue-800">
                            <FiArrowLeft size={24} />
                        </Link>
                        <h1 className="text-3xl font-bold text-blue-600 flex items-center">
                            <FiFileText className="mr-2" /> View Prescriptions
                        </h1>
                    </div>

                    {/* Prescriptions List */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h2 className="text-xl font-semibold text-blue-600 mb-6">Your Prescriptions</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-blue-50">
                                        <th className="border-b p-4 text-blue-600">Date</th>
                                        <th className="border-b p-4 text-blue-600">Doctor</th>
                                        <th className="border-b p-4 text-blue-600">Medication</th>
                                        <th className="border-b p-4 text-blue-600">Dosage</th>
                                        <th className="border-b p-4 text-blue-600">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {prescriptions.map((prescription) => (
                                        <tr key={prescription.id} className="hover:bg-gray-50 transition">
                                            <td className="p-4">{prescription.date}</td>
                                            <td className="p-4">{prescription.doctor}</td>
                                            <td className="p-4 flex items-center">
                                                <FiTablet className="mr-2 text-blue-600" /> {prescription.medication}
                                            </td>
                                            <td className="p-4">{prescription.dosage}</td>
                                            <td className="p-4">
                                                <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                                    <FiDownload className="mr-2" /> Download PDF
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Prescription Tips */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h2 className="text-xl font-semibold text-blue-600 mb-6 flex items-center">
                            <FiTablet className="mr-2" /> Medication Tips
                        </h2>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start">
                                <span className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center mr-3">1</span>
                                Always take your medication as prescribed by your doctor.
                            </li>
                            <li className="flex items-start">
                                <span className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center mr-3">2</span>
                                Set reminders to ensure you don’t miss a dose.
                            </li>
                            <li className="flex items-start">
                                <span className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center mr-3">3</span>
                                Contact your doctor if you experience any side effects.
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

export default ViewPrescriptions;