import React, { useState } from 'react';
import HomePageHeader from '../UI/HomePageHeader';
import HomeHeader from '../UI/HomeHeader';
import HeaderPage from '../UI/HeaderPage';

const Appointment = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [savedSteps, setSavedSteps] = useState([]);
    const steps = [
        'Personal Info',
        'Appointment Details',
        'Medical History',
        'Insurance Details',
        'Documents Upload',
        'Payment',
        'Confirmation',
    ];

    const handleNext = () => {
        if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
    };

    const handlePrev = () => {
        if (currentStep > 0) setCurrentStep(currentStep - 1);
    };

    const handleSave = () => {
        setSavedSteps([...savedSteps, currentStep]);
    };

    const renderProgress = () => (
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
            {steps.map((step, index) => (
                <div key={index} className="flex items-center">
                    <div
                        className={`progress-step flex items-center gap-2 transition-transform duration-300 hover:scale-110 ${index === currentStep ? 'font-bold text-teal-700' : 'text-gray-600'
                            }`}
                    >
                        <div
                            className={`w-8 h-8 rounded-full text-white text-sm flex items-center justify-center ${savedSteps.includes(index)
                                ? 'bg-green-500'
                                : index === currentStep
                                    ? 'bg-teal-500'
                                    : 'bg-gray-300'
                                }`}
                        >
                            {index + 1}
                        </div>
                        <span className="text-sm">{step}</span>
                    </div>
                    {index < steps.length - 1 && (
                        <div className="flex-grow h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-2" />
                    )}
                </div>
            ))}
        </div>
    );

    const renderFormStep = () => {
        switch (currentStep) {
            case 0:
                return (
                    <div className="animate-slide-in space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-800">1. Personal Information</h2>
                        <div>
                            <label className="block text-lg text-gray-700">Full Name</label>
                            <input
                                type="text"
                                className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-lg text-gray-700">Date of Birth</label>
                            <input
                                type="date"
                                className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                            />
                        </div>
                        <div>
                            <label className="block text-lg text-gray-700">Gender</label>
                            <select className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200">
                                <option value="">Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-lg text-gray-700">Contact Number</label>
                            <input
                                type="text"
                                className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                                placeholder="+91-1234567890"
                            />
                        </div>
                        <div>
                            <label className="block text-lg text-gray-700">Email</label>
                            <input
                                type="email"
                                className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                                placeholder="johndoe@gmail.com"
                            />
                        </div>
                        <div>
                            <label className="block text-lg text-gray-700">Address</label>
                            <textarea
                                className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                                rows="3"
                                placeholder="Street, City, State, Zip"
                            ></textarea>
                        </div>
                    </div>
                );
            case 1:
                return (
                    <div className="animate-slide-in space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-800">2. Appointment Details</h2>
                        <div>
                            <label className="block text-lg text-gray-700">Appointment Date and Time</label>
                            <input
                                type="datetime-local"
                                className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                            />
                        </div>
                        <div>
                            <label className="block text-lg text-gray-700">Doctor's Specialization</label>
                            <select className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200">
                                <option value="">Select Specialization</option>
                                <option>Cardiology</option>
                                <option>Dermatology</option>
                                <option>Orthopedics</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-lg text-gray-700">Doctor's Name</label>
                            <input
                                type="text"
                                className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                                placeholder="Dr. Smith"
                            />
                        </div>
                        <div>
                            <label className="block text-lg text-gray-700">Preferred Mode of Appointment</label>
                            <select className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200">
                                <option value="">Select Mode</option>
                                <option>In-person</option>
                                <option>Online</option>
                                <option>Phone</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-lg text-gray-700">Reason for Appointment</label>
                            <textarea
                                className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                                rows="3"
                                placeholder="E.g., Regular checkup, skin issue"
                            ></textarea>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="animate-slide-in space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-800">3. Medical History</h2>
                        <div>
                            <label className="block text-lg text-gray-700">Previous Medical Conditions</label>
                            <textarea
                                className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                                rows="3"
                                placeholder="Diabetes, Hypertension, etc."
                            />
                        </div>
                        <div>
                            <label className="block text-lg text-gray-700">Medications</label>
                            <textarea
                                className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                                rows="3"
                                placeholder="List current medications"
                            />
                        </div>
                        <div>
                            <label className="block text-lg text-gray-700">Allergies</label>
                            <textarea
                                className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                                rows="3"
                                placeholder="Food, medication allergies, etc."
                            />
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="animate-slide-in space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-800">4. Insurance Details</h2>
                        <div>
                            <label className="block text-lg text-gray-700">Insurance Provider</label>
                            <input
                                type="text"
                                className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                                placeholder="Max Bupa, Star Health, etc."
                            />
                        </div>
                        <div>
                            <label className="block text-lg text-gray-700">Policy Number</label>
                            <input
                                type="text"
                                className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                            />
                        </div>
                        <div>
                            <label className="block text-lg text-gray-700">Insurance Card Upload</label>
                            <input
                                type="file"
                                accept="image/*,.pdf"
                                className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                            />
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="animate-slide-in space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-800">5. Document/Report Upload</h2>
                        <div>
                            <label className="block text-lg text-gray-700">Medical Reports Upload</label>
                            <input
                                type="file"
                                accept="application/pdf,image/jpeg,image/png"
                                className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                            />
                        </div>
                        <div>
                            <label className="block text-lg text-gray-700">Prescription Upload</label>
                            <input
                                type="file"
                                accept="application/pdf,image/jpeg,image/png"
                                className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                            />
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div className="animate-slide-in space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-800">6. Payment Details</h2>
                        <div>
                            <label className="block text-lg text-gray-700">Payment Mode</label>
                            <select className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200">
                                <option value="">Select Payment Method</option>
                                <option>Credit/Debit Card</option>
                                <option>UPI</option>
                                <option>Net Banking</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-lg text-gray-700">Payment Receipt Upload</label>
                            <input
                                type="file"
                                accept="application/pdf,image/*"
                                className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                            />
                        </div>
                    </div>
                );
            case 6:
                return (
                    <div className="animate-slide-in space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-800">7. Confirmation & Notes</h2>
                        <div>
                            <label className="block text-lg text-gray-700">Patient Consent</label>
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" className="w-5 h-5 text-teal-500 focus:ring-teal-500" />
                                <span>I agree to the terms and conditions.</span>
                            </div>
                        </div>
                        <div>
                            <label className="block text-lg text-gray-700">Additional Notes</label>
                            <textarea
                                className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                                rows="3"
                                placeholder="Mention any specific needs or instructions"
                            />
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="bg-[#E6E6FA] min-h-screen  pt-3 w-full">
            <style>
                {`
          @keyframes slideIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slide-in {
            animation: slideIn 0.5s ease-out forwards;
          }
          .progress-step:hover {
            transform: scale(1.1);
            transition: transform 0.3s ease;
          }
          .gradient-btn {
            background: linear-gradient(45deg, #10b981, #3b82f6);
            transition: all 0.3s ease;
          }
          .gradient-btn:hover {
            background: linear-gradient(45deg, #059669, #2563eb);
            transform: translateY(-2px);
          }
        `}
            </style>
            <div className="bg-[#E6E6FA] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="fixed top-0 left-0 w-full z-10">
                    <HeaderPage/>
                </div>
                <div className="mt-20">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-800">Book an Appointment</h1>
                        <p className="text-xl text-gray-600 mt-2">Fill out the form below to schedule your appointment.</p>
                    </div>
                    <div className="mt-6 flex flex-col items-center p-6 bg-white/80 rounded-2xl shadow-xl backdrop-blur-sm">
                        {renderProgress()}
                        <form className="space-y-4 w-full max-w-2xl">
                            {renderFormStep()}
                            <div className="flex justify-between mt-6">
                                <button
                                    type="button"
                                    onClick={handlePrev}
                                    className="px-6 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:shadow-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={currentStep === 0}
                                >
                                    Back
                                </button>
                                <div className="flex gap-3">
                                    <button
                                        type="button"
                                        onClick={handleSave}
                                        className="px-6 py-2 gradient-btn text-white rounded-lg shadow-md hover:shadow-lg"
                                    >
                                        Save
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleNext}
                                        className="px-6 py-2 gradient-btn text-white rounded-lg shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                        disabled={currentStep === steps.length - 1}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;