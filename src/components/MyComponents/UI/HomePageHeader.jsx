import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

const HomePageHeader = () => {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavigation = (route) => {
        navigate(route);
        setIsMobileMenuOpen(false); // Close menu after navigation
    };

    // Close mobile menu on screen resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <header className="bg-[#E6E6FA] pt-3 fixed top-0 w-full z-50">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div onClick={() => handleNavigation('/')} className="flex-1 md:flex md:items-center md:gap-12">
                            <div className='text-black font-semibold text-4xl cursor-pointer'>
                                MediPlan
                            </div>
                        </div>

                        <div className="md:flex md:items-center md:gap-12">
                            <nav aria-label="Global" className="hidden md:block">
                                <ul className="flex items-center gap-6 text-sm">
                                    <li>
                                        <a
                                            className="text-black transition hover:text-gray-500/75 dark:hover:text-blue-900 sm:text-lg"
                                            onClick={() => handleNavigation("/")}
                                        >
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-black transition hover:text-gray-500/75 dark:hover:text-blue-900 sm:text-lg"
                                            onClick={() => handleNavigation('/report')}
                                        >
                                            Reports
                                        </a>
                                    </li>
                                    <li>
                                        <a  onClick={() => handleNavigation('/medicine')}
                                        className="text-black transition hover:text-gray-500/75 dark:hover:text-blue-900 sm:text-lg" href="#">
                                            Symptoms
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-black transition hover:text-gray-500/75 dark:hover:text-blue-900 sm:text-lg"
                                            onClick={() => handleNavigation('/appointment')}
                                        >
                                            Appointment
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                        onClick={() => handleNavigation('/aboutMedicine')}
                                        className="text-black transition hover:text-gray-500/75 dark:hover:text-blue-900 sm:text-lg" href="#">
                                            AI Medicine 
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-black transition hover:text-gray-500/75 dark:hover:text-blue-900 sm:text-lg"
                                            onClick={() => handleNavigation('/contact')}
                                        >
                                            Help us
                                        </a>
                                    </li>
                                </ul>
                            </nav>

                            <div className="flex items-center gap-4">
                                <div className="sm:flex sm:gap-4">
                                    <a
                                        className="hover:shadow-xl transition duration-300 rounded-md bg-teal-600 px-5 py-2.5 sm:text-lg font-medium text-white shadow-md hover:bg-teal-800"
                                        href="#"
                                    >
                                        Show Plan
                                    </a>
                                </div>

                                <div className="block md:hidden">
                                    <button
                                        className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:hover:text-blue-900 sm:text-lg"
                                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* 👇 Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 top-[4.5rem] z-[51] bg-[#E6E6FA] p-3 md:hidden shadow-md h-80">
                    <ul className="flex flex-col gap-1 text-lg font-medium text-gray-800">
                        <li onClick={() => handleNavigation("/")} className="cursor-pointer humburger">Home</li>
                        <li onClick={() => handleNavigation("/report")} className="cursor-pointer humburger">Reports</li>
                        <li className="cursor-pointer humburger">Medicines</li>
                        <li onClick={() => handleNavigation("/appointment")} className="cursor-pointer humburger">Appointment</li>
                        <li className="cursor-pointer humburger">Location</li>
                        <li onClick={() => handleNavigation("/contact")} className="cursor-pointer humburger">Help us</li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default HomePageHeader;
