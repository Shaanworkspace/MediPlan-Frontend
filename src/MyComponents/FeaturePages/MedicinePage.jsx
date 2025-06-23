import React, { useState } from 'react';
import HomePageHeader from '../UI/HomePageHeader';
import { Home } from 'lucide-react';

const MedicinePage = () => {
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);
    const [suggestions, setSuggestions] = useState({
        medicine: '',
        tests: '',
        advantages: '',
        disadvantages: '',
        alternatives: '',
        extraNotes: '',
    });
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
        // More symptoms can be added here
    ];

    const handleSymptomChange = (symptom) => {
        setSelectedSymptoms((prev) =>
            prev.includes(symptom)
                ? prev.filter((item) => item !== symptom)
                : [...prev, symptom]
        );
    };

    const getMedicineDetails = (medicine) => {
        // Example AI logic: This can be replaced with an actual AI API call to fetch details
        const medicineDetails = {
            Paracetamol: {
                advantages: 'Effective in reducing fever and body aches.',
                disadvantages: 'May cause liver damage if overdosed.',
                alternatives: 'Ibuprofen, Aspirin.',
            },
            Ibuprofen: {
                advantages: 'Reduces inflammation and pain effectively.',
                disadvantages: 'Can cause stomach irritation or bleeding in some people.',
                alternatives: 'Paracetamol, Naproxen.',
            },
        };

        return medicineDetails[medicine] || {
            advantages: 'Information unavailable.',
            disadvantages: 'Information unavailable.',
            alternatives: 'Information unavailable.',
        };
    };

    const handleSubmit = () => {
        // Basic logic to suggest medicines based on symptoms
        let medicineSuggestion = '';
        if (selectedSymptoms.includes('Fever')) medicineSuggestion = 'Paracetamol';
        else if (selectedSymptoms.includes('Body Pain')) medicineSuggestion = 'Ibuprofen';

        // Get AI details for the suggested medicine
        const { advantages, disadvantages, alternatives } = getMedicineDetails(medicineSuggestion);

        setSuggestions({
            medicine: medicineSuggestion,
            tests: selectedSymptoms.includes('Cough') ? 'Chest X-Ray' : '',
            advantages,
            disadvantages,
            alternatives,
            extraNotes,
        });
    };


    const [medicineName, setMedicineName] = useState('');
    const [medicineDetails, setMedicineDetails] = useState(null);
    const [loading, setLoading] = useState(false);

    // AI-powered function to fetch medicine details (simulated for now)
    const fetchMedicineDetails = (name) => {
        setLoading(true);
        setTimeout(() => {
            // Example AI logic (replace with real API for actual medicine data)
            const medicineData = {
                'Paracetamol': {
                    advantages: 'Reduces fever, alleviates body pain and headaches.',
                    disadvantages: 'Excessive use can lead to liver damage.',
                    alternatives: 'Ibuprofen, Aspirin, Acetaminophen.',
                    sideEffects: 'Nausea, rash, liver damage if overdosed.',
                    dosage: '500mg every 4-6 hours, not to exceed 4g/day.',
                },
                'Ibuprofen': {
                    advantages: 'Reduces inflammation, pain relief, fever reduction.',
                    disadvantages: 'Can irritate the stomach, risk of bleeding.',
                    alternatives: 'Paracetamol, Naproxen.',
                    sideEffects: 'Stomach pain, dizziness, nausea.',
                    dosage: '200-400mg every 4-6 hours, not to exceed 1200mg/day.',
                },
                // Add more medicines here
            };

            const details = medicineData[name] || {
                advantages: 'Details unavailable.',
                disadvantages: 'Details unavailable.',
                alternatives: 'Details unavailable.',
                sideEffects: 'Details unavailable.',
                dosage: 'Details unavailable.',
            };

            setMedicineDetails(details);
            setLoading(false);
        }, 1000);
    };

    const handleSearch = () => {
        if (medicineName.trim()) {
            fetchMedicineDetails(medicineName.trim());
        } else {
            alert('Please enter a valid medicine name.');
        }
    };

    return (
        <div className="bg-[#E6E6FA] pt-3 w-full">
            <div className="mx-auto min-w-screen-xl min-h-screen px-4 sm:px-6 lg:px-8">
                <div className="transition-all duration-300 ease-in-out">
                    <div className="fixed top-0 left-0 w-full z-10">
                        <HomePageHeader ButtonText="Show Locations" onToggle={() => { }} />
                    </div>

                    <div className="mt-20">
                        <div className="text-center">
                            <h1 className="text-4xl font-semibold text-gray-800">Medicine Details</h1>
                            <p className="text-xl text-gray-600 mt-2">Enter the medicine name to get details</p>
                        </div>

                        {/* Medicine Search Input */}
                        <div className="mt-6 flex justify-center">
                            <input
                                type="text"
                                placeholder="Enter medicine name"
                                className="w-1/2 p-3 border-2 border-gray-300 rounded-md"
                                value={medicineName}
                                onChange={(e) => setMedicineName(e.target.value)}
                            />
                            <button
                                onClick={handleSearch}
                                className="ml-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                            >
                                Search
                            </button>
                        </div>

                        {/* Medicine Details Section */}
                        {loading && (
                            <div className="mt-6 text-center">
                                <p className="text-gray-700">Loading...</p>
                            </div>
                        )}

                        {medicineDetails && !loading && (
                            <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
                                <h2 className="text-2xl font-semibold text-gray-800">Medicine Details: {medicineName}</h2>

                                <div className="mt-4">
                                    <h3 className="text-xl font-semibold text-gray-800">Advantages:</h3>
                                    <p className="text-gray-700">{medicineDetails.advantages}</p>
                                </div>

                                <div className="mt-4">
                                    <h3 className="text-xl font-semibold text-gray-800">Disadvantages:</h3>
                                    <p className="text-gray-700">{medicineDetails.disadvantages}</p>
                                </div>

                                <div className="mt-4">
                                    <h3 className="text-xl font-semibold text-gray-800">Alternatives:</h3>
                                    <p className="text-gray-700">{medicineDetails.alternatives}</p>
                                </div>

                                <div className="mt-4">
                                    <h3 className="text-xl font-semibold text-gray-800">Side Effects:</h3>
                                    <p className="text-gray-700">{medicineDetails.sideEffects}</p>
                                </div>

                                <div className="mt-4">
                                    <h3 className="text-xl font-semibold text-gray-800">Dosage:</h3>
                                    <p className="text-gray-700">{medicineDetails.dosage}</p>
                                </div>
                            </div>
                        )}

                        {/* Error Message if no data is available */}
                        {!loading && !medicineDetails && (
                            <div className="mt-6 text-center">
                                <p className="text-gray-700">No details found for the entered medicine name.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

};

export default MedicinePage;
