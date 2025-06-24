import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const HeaderPage = ({ adminName, ButtonText, onToggleSidebar }) => {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleNavigation = (route) => {
        navigate(route);
        setIsSidebarOpen(false); // Close sidebar on navigation
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('roles');
        navigate('/');
        setIsSidebarOpen(false); // Close sidebar on logout
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
        if (onToggleSidebar) onToggleSidebar(!isSidebarOpen); // Notify parent component
    };

    return (
        <header className="bg-[#E6E6FA] pt-3 fixed top-0 w-full z-50">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div onClick={() => handleNavigation('/')} className="flex-1 md:flex md:items-center md:gap-12">
                        <div className="text-black font-semibold text-3xl">
                            <span className='text-md text-black'>Stay Fit 😊, </span> <span className='text-md text-blue-600'>{adminName} !! </span>
                        </div>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <a
                                        className="text-black transition hover:text-gray-500/75 dark:hover:text-blue-900 sm:text-lg"
                                        onClick={() => handleNavigation('/')}
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
                                    <a
                                        className="text-black transition hover:text-gray-500/75 dark:hover:text-blue-900 sm:text-lg"
                                        onClick={() => handleNavigation('/medicine')}
                                    >
                                        Medicines
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-black transition hover:text-gray-500/75 dark:hover:text-blue-900 sm:text-lg"
                                        onClick={() => handleNavigation('/book-appointment')}
                                    >
                                        Appointment
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-black transition hover:text-gray-500/75 dark:hover:text-blue-900 sm:text-lg"
                                        href="#"
                                    >
                                        Location
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
                                <button
                                    className="hover:shadow-xl shadow-md transition duration-300 rounded-md bg-teal-600 px-5 py-2.5 sm:text-lg font-medium text-white hover:bg-teal-800"
                                    onClick={ButtonText === 'Log out' ? handleLogout : undefined}
                                >
                                    {ButtonText}
                                </button>
                            </div>

                            <div className="block md:hidden">
                                <button
                                    onClick={toggleSidebar}
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
                </div>
            </div>
        </header>
    );
};

export default HeaderPage;