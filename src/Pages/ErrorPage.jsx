import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ErrorPage = ({ message = "Oops! Something went wrong." }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleGoBack = () => {
        // Go back to the previous page
        navigate(-1);
    };

    const handleGoHome = () => {
        // Navigate to the home page
        navigate('/');
    };

    return (
        <div className="bg-[#E6E6FA] min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md mx-4 text-center">
                {/* Error Icon */}
                <div className="flex justify-center mb-4">
                    <svg
                        className="w-16 h-16 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>

                {/* Error Message */}
                <h2 className="text-3xl font-bold text-black mb-4">Error</h2>
                <p className="text-gray-600 mb-6">{message}</p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={handleGoHome}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl transition-all w-full sm:w-auto"
                    >
                        Back to Home
                    </button>
                    <button
                        onClick={handleGoBack}
                        className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-xl transition-all w-full sm:w-auto"
                    >
                        Go to Previous Page
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;