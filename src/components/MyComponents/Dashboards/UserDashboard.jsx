import React, { useState } from 'react';
import HeaderPage from '../UI/HeaderPage'; // Importing your header component

const Appointment = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-[#E6E6FA] flex flex-col min-h-screen">
            <div className="mx-auto min-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div
                    className={`transition-all duration-300 ease-in-out`}
                    style={{
                        width: open ? 'calc(100% - 256px)' : '100%',
                    }}
                >
                    {/* Header */}
                    <div className="fixed top-0 left-0 w-full z-10">
                        <HeaderPage ButtonText={`${open ? 'Close' : 'Open'} Panel`} onToggle={() => setOpen((prev) => !prev)} />
                    </div>

                    {/* Main Area */}
                    <div className="mt-5 min-h-screen">
                        <div className="bg-[#E6E6FA] min-h-screen flex flex-col items-center">
                            <div className="w-full max-w-7xl p-6">
                                <h1 className="text-4xl font-semibold text-center text-gray-800">Book an Appointment</h1>
                                <p className="text-xl text-center text-gray-600 mt-2">Fill out the form below to schedule an appointment.</p>
                            </div>

                            {/* Appointment Form */}
                            <div className="w-full max-w-7xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="bg-white shadow-lg hover:shadow-xl transition duration-300 rounded-lg p-6">
                                    <form className="space-y-6">
                                        <div>
                                            <label htmlFor="fullName" className="block text-gray-700">Full Name</label>
                                            <input
                                                type="text"
                                                id="fullName"
                                                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 transition duration-300"
                                                placeholder="Enter your full name"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-gray-700">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 transition duration-300"
                                                placeholder="Enter your email"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="date" className="block text-gray-700">Preferred Appointment Date</label>
                                            <input
                                                type="date"
                                                id="date"
                                                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 transition duration-300"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-gray-700">Additional Notes</label>
                                            <textarea
                                                id="message"
                                                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 transition duration-300"
                                                rows="4"
                                                placeholder="Any specific requests or notes?"
                                            ></textarea>
                                        </div>

                                        {/* Submit Button */}
                                        <div className="flex justify-center mt-6">
                                            <button
                                                type="submit"
                                                className="bg-teal-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-teal-800 transition duration-300"
                                            >
                                                Book Appointment
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Drawer (Optional) */}
                <div
                    id="drawer-navigation"
                    className={`fixed top-0 right-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform bg-white ${open ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <button
                        onClick={() => setOpen(false)}
                        className="absolute top-2.5 right-2.5 text-gray-400 hover:text-gray-900 rounded-lg text-sm p-1.5"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <h5 className="text-base font-semibold text-gray-500">Appointment Panel</h5>
                </div>
            </div>
        </div>
    );
};

export default Appointment;
