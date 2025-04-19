import React from 'react'
import HomePageHeader from '../UI/HomePageHeader'
// import { IoBookOutline } from "react-icons/io5";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";
import { useState } from "react";

const HomePage = () => {
    const [activeTab, setActiveTab] = useState("stats");

    const renderTabContent = () => {
        switch (activeTab) {
            case "stats":
                return (
                    <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {[
                                { value: "73M+", label: "Developers" },
                                { value: "100M+", label: "Public repositories" },
                                { value: "1000s", label: "Open source projects" },
                                { value: "1B+", label: "Contributors" },
                                { value: "90+", label: "Top Forbes companies" },
                                { value: "4M+", label: "Organizations" },
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-700  rounded shadow-md">
                                    <dt className="mb-2 text-3xl font-extrabold">{item.value}</dt>
                                    <dd className="text-gray-500 dark:text-gray-300 text-center">{item.label}</dd>
                                </div>
                            ))}
                        </div>
                    </div>

                );
            case "about":
                return (
                    <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
                        <h2 className="mb-5 text-[2.5vw] font-extrabold tracking-tight text-gray-900 dark:text-white">
                            We invest in the world’s potential
                        </h2>
                        <ul className="space-y-4 text-gray-500 dark:text-gray-400">
                            {[
                                "Dynamic reports and dashboards",
                                "Templates for everyone",
                                "Development workflow",
                                "Limitless business automation",
                            ].map((text, i) => (
                                <li key={i} className="flex items-center space-x-2 rtl:space-x-reverse">
                                    <svg className="shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span className="leading-tight">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            case "faq":
                return (
                    <div className="p-4 bg-white rounded-lg dark:bg-gray-800">
                        <p className="text-gray-500 dark:text-gray-400">
                            [Accordion functionality can be implemented here with conditional rendering or a package like Headless UI.]
                        </p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className='bg-[#E6E6FA]'>
            {/* Navbar */}
            <HomePageHeader />


            {/* Page 1 */}
            <section className='bg-[#E6E6FA]' >
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 bg-[#E6E6FA]">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                        <div>
                            <div className="max-w-lg md:max-w-none">
                                <h2 className="text-2xl font-semibold text-gray-800 sm:text-5xl sm:font-bold">
                                    Your health journey, simplified..
                                </h2>

                                <p className="mt-4 text-gray-700 sm:text-xl">
                                    Your health is our priority. Stay on track with your medication and stay in control of your well-being. Easy reminders. Personalized care.
                                </p>

                                <buttonTag>
                                    <button type="button" class="mt-3 text-gray-900 bg-blue-300 hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-blue-400 dark:border-gray-700 dark:text-gray-900 dark:hover:bg-blue-200 me-2 mb-2">
                                        <span className='text-xl'>
                                            Login
                                        </span>
                                        {/* <IoBookOutline className='text-2xl ml-3' /> */}
                                        <FaRegArrowAltCircleRight className='ml-3 text-2xl mr-3' />
                                    </button>
                                    <button type="button" class="mt-3 text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 me-2 mb-2">
                                        <span className='text-xl'>
                                            Register
                                        </span>
                                        {/* <IoBookOutline className='text-2xl ml-3' /> */}
                                        <LuNotebookPen className='ml-3 text-2xl mr-3' />
                                    </button>
                                </buttonTag>
                            </div>
                        </div>

                        <div>
                            <img
                                src="src/images/female-6813278_1920 1.svg"
                                className="rounded "
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Page 2 */}
            <section className="bg-white pt-10 flex items-center justify-center">
                <div className="mx-auto w-full max-w-5xl min-h-[80vh] px-4">
                    <div className="flex flex-col justify-center items-center text-center">
                        <h1 className="font-bold text-2xl sm:text-3xl text-gray-800">MediPlan: Health & Medication Insights</h1>
                        <h2 className="font-semibold text-black/70 sm:mt-3">MediPlan ensures optimal health management for users.</h2>
                    </div>

                    <div className="pt-6">
                        <div className="w-full h-[60vh] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                            {/* Mobile Dropdown */}
                            <div className="sm:hidden">
                                <label htmlFor="tabs" className="sr-only">Select tab</label>
                                <select
                                    id="tabs"
                                    onChange={(e) => setActiveTab(e.target.value)}
                                    className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                >
                                    <option value="stats">Statistics</option>
                                    <option value="about">Services</option>
                                    <option value="faq">FAQ</option>
                                </select>
                            </div>

                            {/* Desktop Tabs */}
                            <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse">
                                {["stats", "about", "faq"].map((tab) => (
                                    <li key={tab} className="w-full flex justify-evenly">
                                        <button
                                            onClick={() => setActiveTab(tab)}
                                            className={`inline-block w-full p-4 focus:outline-none ${activeTab === tab
                                                ? "bg-gray-100 dark:bg-gray-600 font-semibold"
                                                : "bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
                                                }`}
                                        >
                                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                        </button>
                                    </li>
                                ))}
                            </ul>

                            {/* Tab Content */}
                            <div className="border-t border-gray-200 dark:border-gray-600">
                                {renderTabContent()}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    )
}

export default HomePage