import React, { useState } from 'react';
import HomePageHeader from '../UI/HomePageHeader';


const Appointment = () => {
	const [currentStep, setCurrentStep] = useState(0);
	const [savedSteps, setSavedSteps] = useState([]);
	const steps = [
		"Personal Info",
		"Appointment Details",
		"Medical History",
		"Insurance Details",
		"Documents Upload",
		"Payment",
		"Confirmation",
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
		<div className="flex justify-center gap-4 flex-wrap mb-6">
			{steps.map((step, index) => (
				<div key={index} className={`flex items-center gap-2 ${index === currentStep ? 'font-bold text-teal-700' : 'text-gray-600'}`}>
					<div className={`w-6 h-6 rounded-full text-white text-sm flex items-center justify-center ${savedSteps[index] ? 'bg-green-500' : 'bg-gray-400'}`}>{index + 1}</div>
					<span>{step}</span>
				</div>
			))}
		</div>
	);

	const renderFormStep = () => {
		switch (currentStep) {
			case 0:
				return (
					<>
						<h2 className="text-2xl font-semibold mb-4">1. Personal Information</h2>

						<label className="block text-lg text-gray-700">Full Name</label>
						<input type="text" className="input-style" placeholder="John Doe" />

						<label className="block text-lg text-gray-700 mt-4">Date of Birth</label>
						<input type="date" className="input-style" />

						<label className="block text-lg text-gray-700 mt-4">Gender</label>
						<select className="input-style">
							<option value="">Select Gender</option>
							<option>Male</option>
							<option>Female</option>
							<option>Other</option>
						</select>

						<label className="block text-lg text-gray-700 mt-4">Contact Number</label>
						<input type="text" className="input-style" placeholder="+91-1234567890" />

						<label className="block text-lg text-gray-700 mt-4">Email</label>
						<input type="email" className="input-style" placeholder="johndoe@gmail.com" />

						<label className="block text-lg text-gray-700 mt-4">Address</label>
						<textarea className="input-style" rows="3" placeholder="Street, City, State, Zip"></textarea>
					</>
				);
			case 1:
				return (
					<>
						<h2 className="text-2xl font-semibold mb-4">2. Appointment Details</h2>

						<label className="block text-lg text-gray-700">Appointment Date and Time</label>
						<input type="datetime-local" className="input-style" />

						<label className="block text-lg text-gray-700 mt-4">Doctor's Specialization</label>
						<select className="input-style">
							<option value="">Select Specialization</option>
							<option>Cardiology</option>
							<option>Dermatology</option>
							<option>Orthopedics</option>
						</select>

						<label className="block text-lg text-gray-700 mt-4">Doctor's Name</label>
						<input type="text" className="input-style" placeholder="Dr. Smith" />

						<label className="block text-lg text-gray-700 mt-4">Preferred Mode of Appointment</label>
						<select className="input-style">
							<option value="">Select Mode</option>
							<option>In-person</option>
							<option>Online</option>
							<option>Phone</option>
						</select>

						<label className="block text-lg text-gray-700 mt-4">Reason for Appointment</label>
						<textarea className="input-style" rows="3" placeholder="E.g., Regular checkup, skin issue"></textarea>
					</>
				);
			case 2:
				return (
					<>
						<h2 className="text-2xl font-semibold mb-4">3. Medical History</h2>

						<label className="block text-lg text-gray-700">Previous Medical Conditions</label>
						<textarea className="input-style" rows="3" placeholder="Diabetes, Hypertension, etc." />

						<label className="block text-lg text-gray-700 mt-4">Medications</label>
						<textarea className="input-style" rows="3" placeholder="List current medications" />

						<label className="block text-lg text-gray-700 mt-4">Allergies</label>
						<textarea className="input-style" rows="3" placeholder="Food, medication allergies, etc." />
					</>
				);
			case 3:
				return (
					<>
						<h2 className="text-2xl font-semibold mb-4">4. Insurance Details</h2>

						<label className="block text-lg text-gray-700">Insurance Provider</label>
						<input type="text" className="input-style" placeholder="Max Bupa, Star Health, etc." />

						<label className="block text-lg text-gray-700 mt-4">Policy Number</label>
						<input type="text" className="input-style" />

						<label className="block text-lg text-gray-700 mt-4">Insurance Card Upload</label>
						<input type="file" accept="image/*,.pdf" className="input-style" />
					</>
				);
			case 4:
				return (
					<>
						<h2 className="text-2xl font-semibold mb-4">5. Document/Report Upload</h2>

						<label className="block text-lg text-gray-700">Medical Reports Upload</label>
						<input type="file" accept="application/pdf,image/jpeg,image/png" className="input-style" />

						<label className="block text-lg text-gray-700 mt-4">Prescription Upload</label>
						<input type="file" accept="application/pdf,image/jpeg,image/png" className="input-style" />
					</>
				);
			case 5:
				return (
					<>
						<h2 className="text-2xl font-semibold mb-4">6. Payment Details</h2>

						<label className="block text-lg text-gray-700">Payment Mode</label>
						<select className="input-style">
							<option value="">Select Payment Method</option>
							<option>Credit/Debit Card</option>
							<option>UPI</option>
							<option>Net Banking</option>
						</select>

						<label className="block text-lg text-gray-700 mt-4">Payment Receipt Upload</label>
						<input type="file" accept="application/pdf,image/*" className="input-style" />
					</>
				);
			case 6:
				return (
					<>
						<h2 className="text-2xl font-semibold mb-4">7. Confirmation & Notes</h2>

						<label className="block text-lg text-gray-700">Patient Consent</label>
						<div className="flex items-center space-x-2">
							<input type="checkbox" className="w-5 h-5" />
							<span>I agree to the terms and conditions.</span>
						</div>

						<label className="block text-lg text-gray-700 mt-4">Additional Notes</label>
						<textarea className="input-style" rows="3" placeholder="Mention any specific needs or instructions" />
					</>
				);
			default:
				return null;
		}
	};


	return (
		<div className="bg-[#E6E6FA] pt-3 w-full">
			<div className="mx-auto min-w-screen-xl px-4 sm:px-6 lg:px-8">
				<div className="transition-all duration-300 ease-in-out">
					<div className="fixed top-0 left-0 w-full z-10">
						<HomePageHeader />
					</div>

					<div className="mt-20">
						<div>
							<h1 className="text-4xl font-semibold text-center text-gray-800">Book an Appointment</h1>
							<p className="text-xl text-center text-gray-600 mt-2">Fill out the form below to schedule an appointment.</p>
						</div>
						<div className="mt-4 flex flex-col items-center p-6 bg-white/30 rounded-2xl shadow-xl">
							{renderProgress()}
							<form className="space-y-1 w-full max-w-2xl ">
								{renderFormStep()}
								<div className="flex justify-between mt-6">
									<button type="button" onClick={handlePrev} className="hover:shadow-xl shadow-md transition duration-300 px-6 py-2 bg-gray-500 text-white rounded disabled:opacity-50" disabled={currentStep === 0}>Back</button>
									<div className="flex gap-2">
										<button type="button" onClick={handleSave} className="hover:shadow-lg shadow-md transition duration-300 px-6 py-2 hover:bg-blue-800 bg-blue-500 text-white rounded">Save</button>
										<button type="button" onClick={handleNext} className="hover:shadow-xl shadow-md transition duration-300 px-6 py-2 hover:bg-teal-800 bg-teal-600 text-white rounded" disabled={currentStep === steps.length - 1}>Next</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Appointment;
