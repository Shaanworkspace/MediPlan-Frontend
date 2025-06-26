import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

const HomeHeader = () => {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavigation = (route) => {
        navigate(route);
        setIsMobileMenuOpen(false);
    };

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
                            <div className="text-black font-semibold text-2xl sm:text-3xl md:text-4xl cursor-pointer transition-all duration-300 hover:text-purple-600 hover:tracking-wide hover:scale-105">
                                MediPlan
                            </div>

                        </div>

                        <div className="md:flex md:items-center md:gap-12">
                            <nav aria-label="Global" className="hidden md:block">
                                <ul className="flex items-center gap-6 text-sm">
                                    {[
                                        { label: "Home", path: "/" },
                                        { label: "Search Doctors", path: "/public-doctor" },
                                        { label: "About", path: "/about" },
                                        { label: "Contact", path: "/contact" },
                                    ].map(({ label, path }, index) => (
                                        <li key={index}>
                                            <a
                                                onClick={() => handleNavigation(path)}
                                                className="relative text-black font-medium sm:text-lg px-1 transition-all duration-300 hover:text-purple-700 hover:tracking-wide
                     before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-purple-600
                     before:transition-all before:duration-300 hover:before:w-full"
                                            >
                                                {label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>


                            <div className="flex items-center gap-4">
                                <div className="sm:flex sm:gap-4">
                                    <button
                                        onClick={() => handleNavigation('/login')}
                                        className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-medium rounded-lg px-5 py-2.5 shadow-md hover:shadow-xl transition duration-300 sm:text-lg"
                                    >
                                        AI Agent
                                    </button>

                                    <button
                                        onClick={() => handleNavigation('/signup')}
                                        className="bg-gradient-to-r from-green-300 to-green-600 hover:from-purple-400 hover:to-green-700 text-white font-medium rounded-lg px-5 py-2.5 shadow-md hover:shadow-xl transition duration-300 sm:text-lg ml-2 hidden lg:block"
                                    >
                                        Sign Up
                                    </button>

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
                        <li onClick={() => handleNavigation("/public-doctor")} className="cursor-pointer humburger">Search Doctors</li>
                        <li onClick={() => handleNavigation("/about")} className="cursor-pointer humburger">About</li>
                        <li onClick={() => handleNavigation("/contact")} className="cursor-pointer humburger">Contact</li>
                        <li onClick={() => handleNavigation("/login")} className="cursor-pointer humburger">Login</li>
                        <li onClick={() => handleNavigation("/signup")} className="cursor-pointer humburger">Sign Up</li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default HomeHeader;
