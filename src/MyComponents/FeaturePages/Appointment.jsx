import React, { useState } from 'react';
import HomePageHeader from '../UI/HomePageHeader';
import HomeHeader from '../UI/HomeHeader';
import HeaderPage from '../UI/HeaderPage';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from 'axios';
const Appointment = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [savedSteps, setSavedSteps] = useState([]);
    const adminName = localStorage.getItem('adminName') || 'Admin';
    const [appointmentData, setAppointmentData] = useState({
        user: {
            id: null, // or set the logged-in user's ID here if available
        },
        appointmentDateTime: '',
        doctorSpecialization: '',
        doctorName: '',
        appointmentMode: '',
        reasonForAppointment: '',
        previousMedicalConditions: '',
        medications: '',
        allergies: '',
        insuranceProvider: '',
        policyNumber: '',
        insuranceDocument: null,
        medicalReport: null,
        prescription: null,
        paymentMode: '',
        paymentReceipt: null,
        patientConsent: false,
        additionalNotes: '',
    });
    const steps = [
        'Personal Info',
        'Appointment Details',
        'Medical History',
        'Insurance Details',
        'Documents Upload',
        'Payment',
        'Confirmation',
    ];
    const handleSubmitAppointment = async () => {
        const email = localStorage.getItem('email');
        const userId = localStorage.getItem('id');
        const token = localStorage.getItem("token");

        if (!email || !userId || !token) {
            alert("User session expired. Please login again.");
            return;
        }

        try {
            // Set the user ID inside appointmentData
            const formData = new FormData();

            // ✅ Correct way to nest object in FormData (Spring can't read 'user.id' unless manually mapped)
            formData.append('userId', userId); // send as separate field
            formData.append('appointmentDateTime', appointmentData.appointmentDateTime);
            formData.append('doctorSpecialization', appointmentData.doctorSpecialization);
            formData.append('doctorName', appointmentData.doctorName);
            formData.append('appointmentMode', appointmentData.appointmentMode);
            formData.append('reasonForAppointment', appointmentData.reasonForAppointment);
            formData.append('previousMedicalConditions', appointmentData.previousMedicalConditions);
            formData.append('medications', appointmentData.medications);
            formData.append('allergies', appointmentData.allergies);
            formData.append('insuranceProvider', appointmentData.insuranceProvider);
            formData.append('policyNumber', appointmentData.policyNumber);
            formData.append('paymentMode', appointmentData.paymentMode);
            formData.append('patientConsent', appointmentData.patientConsent);
            formData.append('additionalNotes', appointmentData.additionalNotes);

            // 📎 Optional files
            if (appointmentData.insuranceDocument) {
                formData.append('insuranceDocument', appointmentData.insuranceDocument);
            }
            if (appointmentData.medicalReport) {
                formData.append('medicalReport', appointmentData.medicalReport);
            }
            if (appointmentData.prescription) {
                formData.append('prescription', appointmentData.prescription);
            }
            if (appointmentData.paymentReceipt) {
                formData.append('paymentReceipt', appointmentData.paymentReceipt);
            }

            // 📤 API call
            const res = await axios.post(
                `${import.meta.env.VITE_API_BASE_URL}/appointment/create`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`,
                    },
                }
            );

            alert('Appointment booked successfully!');
            console.log(res.data);
        } catch (err) {
            console.error('❌ Error booking appointment:', err);
            alert('Failed to book appointment. Please try again.');
        }
    };


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
                        <div className='text-xl text-green-800'>Auto Filled, Move to next...</div>
                    </div>
                );
            case 1:
                return (
                    <div className="animate-slide-in space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-800">2. Appointment Details</h2>
                        <div className='flex justify-between'>
                            <div>
                                <label className="block text-lg text-gray-700">Appointment Date and Time</label>
                                <Input
                                    type="datetime-local"
                                    value={appointmentData.appointmentDateTime}
                                    onChange={(e) =>
                                        setAppointmentData({ ...appointmentData, appointmentDateTime: e.target.value })
                                    }
                                    className="w-full mt-1 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                                />
                            </div>
                            <div>
                                <label className="block text-lg text-gray-700">Doctor's Specialization</label>
                                <select onChange={(e) =>
                                    setAppointmentData({ ...appointmentData, doctorSpecialization: e.target.value })
                                } value={appointmentData.doctorSpecialization} className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200">
                                    <option value="">Select Specialization</option>
                                    <option>Cardiology</option>
                                    <option>Dermatology</option>
                                    <option>Orthopedics</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex justify-between'>

                            <div>
                                <label value={appointmentData.doctorName} className="block text-lg text-gray-700">Doctor's Name</label>
                                <input
                                    onChange={(e) =>
                                        setAppointmentData({ ...appointmentData, doctorName: e.target.value })
                                    }
                                    type="text"
                                    className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                                    placeholder="Dr. Smith"
                                />
                            </div>
                            <div>
                                <label className="block text-lg text-gray-700">Preferred Mode of Appointment</label>
                                <select onChange={(e) => { setAppointmentData({ ...appointmentData, appointmentMode: e.target.value }) }} value={appointmentData.appointmentMode} className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200">
                                    <option value="">Select Mode</option>
                                    <option>In-person</option>
                                    <option>Online</option>
                                    <option>Phone</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-lg text-gray-700">Reason for Appointment</label>
                            <Textarea
                                value={appointmentData.reasonForAppointment}
                                onChange={(e) =>
                                    setAppointmentData({ ...appointmentData, reasonForAppointment: e.target.value })
                                }
                                placeholder="E.g., Regular checkup, skin issue"
                                className="mt-1"
                            />
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="animate-slide-in space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-800">3. Medical History</h2>
                        <div>
                            <label className="block text-lg text-gray-700">Previous Medical Conditions</label>
                            <Textarea
                                value={appointmentData.previousMedicalConditions}
                                onChange={(e) =>
                                    setAppointmentData({ ...appointmentData, previousMedicalConditions: e.target.value })
                                }
                                className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                                rows="3"
                                placeholder="Diabetes, Hypertension, etc."
                            />
                        </div>

                        <div>
                            <label className="block text-lg text-gray-700">Medications</label>
                            <Textarea
                                value={appointmentData.medications}
                                onChange={(e) =>
                                    setAppointmentData({ ...appointmentData, medications: e.target.value })
                                }
                                className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                                rows="3"
                                placeholder="List current medications"
                            />
                        </div>

                        <div>
                            <label className="block text-lg text-gray-700">Allergies</label>
                            <Textarea
                                value={appointmentData.allergies}
                                onChange={(e) =>
                                    setAppointmentData({ ...appointmentData, allergies: e.target.value })
                                }
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
                            <Input
                                type="text"
                                value={appointmentData.insuranceProvider}
                                onChange={(e) =>
                                    setAppointmentData({ ...appointmentData, insuranceProvider: e.target.value })
                                }
                                placeholder="Max Bupa, Star Health, etc."
                                className="mt-1"
                            />
                        </div>

                        <div>
                            <label className="block text-lg text-gray-700">Policy Number</label>
                            <Input
                                type="text"
                                value={appointmentData.policyNumber}
                                onChange={(e) =>
                                    setAppointmentData({ ...appointmentData, policyNumber: e.target.value })
                                }
                                className="mt-1"
                            />
                        </div>

                        <div>
                            <label className="block text-lg text-gray-700">Insurance Card Upload</label>
                            <Input
                                type="file"
                                accept="image/*,.pdf"
                                onChange={(e) =>
                                    setAppointmentData({
                                        ...appointmentData,
                                        insuranceDocument: e.target.files?.[0] || null,
                                    })
                                }
                                className="mt-1"
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
                            <Input
                                type="file"
                                accept="application/pdf,image/jpeg,image/png"
                                onChange={(e) =>
                                    setAppointmentData({
                                        ...appointmentData,
                                        medicalReport: e.target.files?.[0] || null,
                                    })
                                }
                                className="mt-1"
                            />
                        </div>

                        <div>
                            <label className="block text-lg text-gray-700">Prescription Upload</label>
                            <Input
                                type="file"
                                accept="application/pdf,image/jpeg,image/png"
                                onChange={(e) =>
                                    setAppointmentData({
                                        ...appointmentData,
                                        prescription: e.target.files?.[0] || null,
                                    })
                                }
                                className="mt-1"
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
                            <select
                                value={appointmentData.paymentMode}
                                onChange={(e) =>
                                    setAppointmentData({ ...appointmentData, paymentMode: e.target.value })
                                }
                                className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                            >
                                <option value="">Select Payment Method</option>
                                <option value="Card">Credit/Debit Card</option>
                                <option value="UPI">UPI</option>
                                <option value="NetBanking">Net Banking</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-lg text-gray-700">Payment Receipt Upload</label>
                            <Input
                                type="file"
                                accept="application/pdf,image/*"
                                onChange={(e) =>
                                    setAppointmentData({
                                        ...appointmentData,
                                        paymentReceipt: e.target.files?.[0] || null,
                                    })
                                }
                                className="mt-1"
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
                                <input value={appointmentData.patientConsent} type="checkbox" className="w-5 h-5 text-teal-500 focus:ring-teal-500" />
                                <span>I agree to the terms and conditions.</span>
                            </div>
                        </div>
                        <div>
                            <label className="block text-lg text-gray-700">Additional Notes</label>
                            <Textarea
                                value={appointmentData.additionalNotes}
                                onChange={(e) =>
                                    setAppointmentData({ ...appointmentData, additionalNotes: e.target.value })
                                }
                                className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                                rows="3"
                                placeholder="Mention any specific needs or instructions"
                            />
                        </div>
                        <button
                            type="button"
                            onClick={handleSubmitAppointment}
                            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition mt-4"
                        >
                            Submit Appointment
                        </button>

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
                    <HeaderPage ButtonText={"Log out"} adminName={adminName} />
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