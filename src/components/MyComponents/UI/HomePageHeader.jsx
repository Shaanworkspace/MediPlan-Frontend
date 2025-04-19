import React from 'react'

const HomePageHeader = () => {
    return (
        <header className="bg-[#E6E6FA] pt-3">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between ">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <div className='text-black font-semibold text-4xl'>
                            MediPlan
                        </div>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <a
                                        className="text-black transition hover:text-gray-500/75 dark:hover:text-blue-900 sm:text-lg"
                                        href="#"
                                    >
                                        Home
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-black transition hover:text-gray-500/75 dark:hover:text-blue-900 sm:text-lg"
                                        href="#"
                                    >
                                        Reports
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-black transition hover:text-gray-500/75 dark:hover:text-blue-900 sm:text-lg"
                                        href="#"
                                    >
                                        Medicines
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-black transition hover:text-gray-500/75 dark:hover:text-blue-900 sm:text-lg"
                                        href="#"
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
                                        href="#"
                                    >
                                        Help us
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <a
                                    className="rounded-md bg-teal-600 px-5 py-2.5 sm:text-lg font-medium text-white shadow-sm dark:hover:bg-teal-500"
                                    href="#"
                                >
                                    Show Plan
                                </a>
                            </div>

                            <div className="block md:hidden">
                                <button
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


    )
}

export default HomePageHeader