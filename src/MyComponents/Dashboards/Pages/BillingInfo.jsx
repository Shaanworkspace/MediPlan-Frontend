import React, { useState } from 'react';
import { FiDollarSign, FiFileText, FiCalendar, FiUser, FiArrowLeft, FiCreditCard, FiPlus, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import HeaderPage from '../../UI/HeaderPage';
import DashboardSidebar from './DashboardSidebar';

const BillingInfo = () => {
    const [paymentMethods, setPaymentMethods] = useState([
        { id: 1, type: 'Credit Card', lastFour: '1234', expiry: '12/26' },
        { id: 2, type: 'Debit Card', lastFour: '5678', expiry: '09/25' },
    ]);
    const [showAddPaymentModal, setShowAddPaymentModal] = useState(false);
    const [newPayment, setNewPayment] = useState({ type: '', number: '', expiry: '' });

    const billingHistory = [
        { id: 1, date: '2025-04-20', description: 'Consultation Fee', amount: '$50.00', status: 'Paid' },
        { id: 2, date: '2025-04-15', description: 'Lab Test', amount: '$30.00', status: 'Paid' },
        { id: 3, date: '2025-04-10', description: 'Medication', amount: '$20.00', status: 'Pending' },
    ];

    const handleAddPayment = (e) => {
        e.preventDefault();
        const lastFour = newPayment.number.slice(-4);
        const newMethod = {
            id: paymentMethods.length + 1,
            type: newPayment.type,
            lastFour: lastFour,
            expiry: newPayment.expiry,
        };
        setPaymentMethods([...paymentMethods, newMethod]);
        setShowAddPaymentModal(false);
        setNewPayment({ type: '', number: '', expiry: '' });
    };

    const handleDeletePayment = (id) => {
        setPaymentMethods(paymentMethods.filter((method) => method.id !== id));
    };

    return (
        <div className="min-h-screen bg-[#E6E6FA] flex flex-col">
            {/* Header */}
            <HeaderPage ButtonText={"Log out"} />

            {/* Main Content */}
            <main className="flex  mt-17 flex-col lg:flex-row flex-grow">
                {/* Sidebar */}
                <DashboardSidebar/>

                {/* Main Section */}
                <section className="flex-1 p-8 space-y-8 overflow-auto">
                    <div className="flex items-center space-x-4">
                        <Link to="/dashboard" className="text-blue-600 hover:text-blue-800">
                            <FiArrowLeft size={24} />
                        </Link>
                        <h1 className="text-3xl font-bold text-blue-600 flex items-center">
                            <FiDollarSign className="mr-2" /> Billing Info
                        </h1>
                    </div>

                    {/* Payment Methods */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold text-blue-600 flex items-center">
                                <FiCreditCard className="mr-2" /> Payment Methods
                            </h2>
                            <button
                                onClick={() => setShowAddPaymentModal(true)}
                                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                            >
                                <FiPlus className="mr-2" /> Add Payment Method
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {paymentMethods.map((method) => (
                                <div key={method.id} className="p-6 bg-gray-50 rounded-lg flex items-center justify-between">
                                    <div className="flex items-center">
                                        <FiCreditCard className="mr-4 text-blue-600" size={24} />
                                        <div>
                                            <p className="text-gray-700 font-semibold">{method.type} ending in {method.lastFour}</p>
                                            <p className="text-sm text-gray-500">Expires {method.expiry}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleDeletePayment(method.id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        <FiTrash2 size={20} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Billing History */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h2 className="text-xl font-semibold text-blue-600 mb-6 flex items-center">
                            <FiFileText className="mr-2" /> Billing History
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-blue-50">
                                        <th className="border-b p-4 text-blue-600">Date</th>
                                        <th className="border-b p-4 text-blue-600">Description</th>
                                        <th className="border-b p-4 text-blue-600">Amount</th>
                                        <th className="border-b p-4 text-blue-600">Status</th>
                                        <th className="border-b p-4 text-blue-600">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {billingHistory.map((bill) => (
                                        <tr key={bill.id} className="hover:bg-gray-50 transition">
                                            <td className="p-4">{bill.date}</td>
                                            <td className="p-4">{bill.description}</td>
                                            <td className="p-4">{bill.amount}</td>
                                            <td className={`p-4 ${bill.status === 'Paid' ? 'text-green-600' : 'text-yellow-600'}`}>
                                                {bill.status}
                                            </td>
                                            <td className="p-4">
                                                <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                                    <FiFileText className="mr-2" /> View Invoice
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Billing Tips */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h2 className="text-xl font-semibold text-blue-600 mb-6 flex items-center">
                            <FiDollarSign className="mr-2" /> Billing Tips
                        </h2>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start">
                                <span className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center mr-3">1</span>
                                Keep your payment methods updated to avoid payment issues.
                            </li>
                            <li className="flex items-start">
                                <span className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center mr-3">2</span>
                                Review your billing history regularly for accuracy.
                            </li>
                            <li className="flex items-start">
                                <span className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center mr-3">3</span>
                                Contact support if you notice any discrepancies in your bills.
                            </li>
                        </ul>
                    </div>
                </section>
            </main>

            {/* Add Payment Method Modal */}
            {showAddPaymentModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
                        <h2 className="text-xl font-semibold text-blue-600 mb-6 flex items-center">
                            <FiCreditCard className="mr-2" /> Add Payment Method
                        </h2>
                        <form onSubmit={handleAddPayment} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Card Type</label>
                                <select
                                    value={newPayment.type}
                                    onChange={(e) => setNewPayment({ ...newPayment, type: e.target.value })}
                                    className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                                    required
                                >
                                    <option value="">Select Card Type</option>
                                    <option value="Credit Card">Credit Card</option>
                                    <option value="Debit Card">Debit Card</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Card Number</label>
                                <input
                                    type="text"
                                    value={newPayment.number}
                                    onChange={(e) => setNewPayment({ ...newPayment, number: e.target.value })}
                                    className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                                    placeholder="1234 5678 9012 3456"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                                <input
                                    type="text"
                                    value={newPayment.expiry}
                                    onChange={(e) => setNewPayment({ ...newPayment, expiry: e.target.value })}
                                    className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                                    placeholder="MM/YY"
                                    required
                                />
                            </div>
                            <div className="flex space-x-4 mt-6">
                                <button
                                    type="submit"
                                    className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                >
                                    Add Payment Method
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowAddPaymentModal(false)}
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

export default BillingInfo;