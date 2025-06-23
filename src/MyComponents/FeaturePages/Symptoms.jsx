import React, { useState } from 'react';
import HomePageHeader from '../UI/HomePageHeader';

const Medicine = () => {
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);
    const [suggestions, setSuggestions] = useState({ medicine: '', tests: '', extraNotes: '' });
    const [extraNotes, setExtraNotes] = useState('');

    const symptomsList = [
        'Fever',
        'Headache',
        'Cough',
        'Sore Throat',
        'Body Pain',
        'Cold',
        'Fatigue',
        'Nausea',
        'Dizziness',
        'Rash',
        'Chills',
        'Shortness of Breath',
        'Chest Pain',
        'Joint Pain',
        'Nosebleed',
        // Add more symptoms as needed
    ];

    const handleSymptomChange = (symptom) => {
        setSelectedSymptoms((prev) =>
            prev.includes(symptom)
                ? prev.filter((item) => item !== symptom)
                : [...prev, symptom]
        );
    };

    const handleSubmit = () => {
        // Example: You can add logic to suggest medicines and tests based on the symptoms
        const medicine = selectedSymptoms.includes('Fever') ? 'Paracetamol' : '';
        const testSuggestion = selectedSymptoms.includes('Cough') ? 'Chest X-Ray' : '';

        setSuggestions({
            medicine: medicine,
            tests: testSuggestion,
            extraNotes: extraNotes,
        });
    };

    return (
        <div className="bg-[#E6E6FA] pt-3 w-full ">
            <div className="mx-auto min-w-screen-xl min-h-screen px-4 sm:px-6 lg:px-8">
                <div className="transition-all duration-300 ease-in-out">
                    <div className="fixed top-0 left-0 w-full z-10">
                        <HomePageHeader />
                    </div>

                    <div className="mt-20">
                        <div className="text-center">
                            <h1 className="text-4xl font-semibold text-gray-800">Symptom Checker</h1>
                            <p className="text-xl text-gray-600 mt-2">Select your symptoms from the list below</p>
                        </div>

                        <div className="mt-6">
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {symptomsList.map((symptom) => (
                                    <div key={symptom} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id={symptom}
                                            name={symptom}
                                            className="mr-2"
                                            checked={selectedSymptoms.includes(symptom)}
                                            onChange={() => handleSymptomChange(symptom)}
                                        />
                                        <label htmlFor={symptom} className="text-gray-700">{symptom}</label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Dynamic Input Section */}
                        <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Additional Notes or Symptoms</h2>
                            <textarea
                                className="w-full p-3 border-2 border-gray-300 rounded-md"
                                placeholder="Add any extra details or symptoms here..."
                                rows="4"
                                value={extraNotes}
                                onChange={(e) => setExtraNotes(e.target.value)}
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-6 text-center">
                            <button
                                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                                onClick={handleSubmit}
                            >
                                Get Suggestions
                            </button>
                        </div>

                        {/* Suggestions Section */}
                        {suggestions.medicine && (
                            <div className="mt-6 p-4 bg-blue-100 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold text-gray-800">Suggested Medicines:</h3>
                                <p className="text-gray-700">{suggestions.medicine}</p>
                            </div>
                        )}

                        {suggestions.tests && (
                            <div className="mt-4 p-4 bg-yellow-100 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold text-gray-800">Suggested Tests:</h3>
                                <p className="text-gray-700">{suggestions.tests}</p>
                            </div>
                        )}

                        {/* Extra Notes Display */}
                        {suggestions.extraNotes && (
                            <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold text-gray-800">Additional Notes:</h3>
                                <p className="text-gray-700">{suggestions.extraNotes}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Medicine;

