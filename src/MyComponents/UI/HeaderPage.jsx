import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Footer from './Footer';

const HeaderPage = ({ adminName, ButtonText, onToggleSidebar }) => {
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

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('roles');
        navigate('/');
        setIsMobileMenuOpen(false); // Close sidebar on logout
    };

    const toggleSidebar = () => {
        setIsMobileMenuOpen(prev => !prev);
        if (onToggleSidebar) onToggleSidebar(!isMobileMenuOpen); // Notify parent component
    };

    return (
        <header className="bg-[#E6E6FA] pt-3 fixed top-0 w-full z-50">
            <div className="max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex  h-16 items-center justify-between">
                    <div
                        onClick={() => handleNavigation('/')}
                        className="flex-1 flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-3 cursor-pointer"
                    >
                        <div className="block text-black font-semibold justify-baseline items-baseline lg:flex flex-wrap leading-tight">
                            <span className="text-lg sm:text-xl text-black">Stay Fit 😊   </span>{' '}
                            <span className="text-xl sm:text-md p-2 rounded  sm:bg-gradient-to-r sm:from-pink-400 sm:to-purple-500 hover:from-pink-500 hover:to-purple-600 text-pink-400 sm:text-white   transition-all duration-300 hover:text-black  hover:tracking-wider">
                                {adminName} !!
                            </span>
                        </div>
                    </div>


                    <div className="md:flex md:items-center md:gap-12">
                        <nav aria-label="Global" className="hidden lg:block">
                            <ul className="flex items-center gap-6 text-sm">
                                {[
                                    { label: "Home", path: "/" },
                                    { label: "Reports", path: "/report" },
                                    { label: "Medicines", path: "/medicine" },
                                    { label: "Appointment", path: "/book-appointment" },
                                    { label: "Help us", path: "/contact" },
                                ].map(({ label, path }, index) => (
                                    <li key={index}>
                                        <a
                                            onClick={() => handleNavigation(path)}
                                            className="relative text-black sm:text-lg px-1 transition-all duration-300 hover:text-purple-700 hover:tracking-wide
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
                                    className="hover:shadow-xl shadow-md transition duration-300 rounded-md bg-teal-600 px-5 py-2.5 sm:text-lg font-medium text-white hover:bg-teal-800"
                                    onClick={ButtonText === 'Log out' ? handleLogout : undefined}
                                >
                                    {ButtonText}
                                </button>
                            </div>

                            <div className="block lg:hidden">
                                <button
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:hover:text-blue-900 sm:text-lg"
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
                    {isMobileMenuOpen && (
                        <div className="fixed inset-0 top-[4.5rem] z-[51] bg-[#E6E6FA] p-3 md:hidden shadow-md h-80">
                            <ul className="space-y-6 text-lg">
                                <li onClick={() => handleNavigation('/')}>Home</li>
                                <li onClick={() => handleNavigation('/report')}>Reports</li>
                                <li onClick={() => handleNavigation('/medicine')}>Medicines</li>
                                <li onClick={() => handleNavigation('/book-appointment')}>Appointment</li>
                                <li>Location</li>
                                <li onClick={() => handleNavigation('/contact')}>Help us</li>
                            </ul>
                        </div>
                    )}

                </div>

            </div>

        </header>
    );
};

export default HeaderPage;