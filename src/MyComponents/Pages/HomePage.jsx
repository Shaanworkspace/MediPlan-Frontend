import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import HomeHeader from '../UI/HomeHeader'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";
// import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import femaleIcon from '../../images/female.svg'
import doctorImg from '../../assets/doctor.svg'
import Footer from '../UI/Footer';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import InsightsSection from '../UI/InsightsSection';
// import axios from 'axios';



const HomePage = () => {
    // const [activeTab, setActiveTab] = useState("stats");
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_BASE_URL}/health/hello`)
            .then(() => console.log("Backend wake-up ping sent"))
            .catch((err) => console.error("Ping failed:", err));
    }, []);


    const handleNavigation = (route) => {
        navigate(route);
    }

    // const renderTabContent = () => {
    //     switch (activeTab) {
    //         case "stats":
    //             return (
    //                 <div className="p-4 bg-white rounded-lg md:p-8 ">
    //                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    //                         {[
    //                             { value: "95,856,25", label: "Medication Adherence Rate" },
    //                             { value: "1.3M+", label: "TB Worldwide Children" },
    //                             { value: "3.6M+", label: "TB Worldwide Women" },
    //                             { value: "6.1M+", label: "TB Worldwide Men" },
    //                             { value: "12,50+ Users", label: "Low Stock Alerts Sent" },
    //                             { value: "95,856,25", label: "Caregiver-Assist Schedule" },
    //                         ].map((item, i) => (
    //                             <div key={i} className="flex flex-col items-center justify-center border-1 p-4 bg-white dark:bg-white/60 rounded shadow-lg transition hover:shadow-xl">
    //                                 <dt className="mb-2 text-3xl font-extrabold">{item.value}</dt>
    //                                 <dd className="text-gray-500 dark:text-gray-800 text-center">{item.label}</dd>
    //                             </div>
    //                         ))}
    //                     </div>
    //                 </div>
    //             );
    //         case "about":
    //             return (
    //                 <div className="p-4 bg-white rounded-lg md:p-8 ">
    //                     <h2 className="mb-5 text-[2.5vw] font-extrabold tracking-tight text-gray-700">
    //                         We are helping people in various ways
    //                     </h2>
    //                     <ul className="space-y-4 text-black ">
    //                         {[
    //                             "📅 Appointment Scheduling – Book and manage doctor appointments with ease.",
    //                             "🩺 Medical History Tracking – Access complete patient history anytime.",
    //                             "💊 Prescription Management – Generate and store e-prescriptions digitally.",
    //                             "🔔 Medication Reminders – Get alerts to take medicines on time.",
    //                             "📊 Health Analytics Dashboard – Visualize patient data and trends.",
    //                             "🛡️ Secure Data Handling – Ensure patient information stays confidential."
    //                         ].map((text, i) => (
    //                             <li key={i} className="flex items-center space-x-2 rtl:space-x-reverse">
    //                                 <svg className="shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    //                                     <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
    //                                 </svg>
    //                                 <span className="leading-tight">{text}</span>
    //                             </li>
    //                         ))}
    //                     </ul>
    //                 </div>
    //             );
    //         case "faq":
    //             return (
    //                 <div className="p-4 bg-white rounded-lg ">
    //                     <ul className="space-y-4 text-gray-500 ">
    //                         {[
    //                             {
    //                                 question: "How do I book a doctor’s appointment?",
    //                                 answer: "Simply log in, navigate to the 'Appointments' section, and choose your preferred date and doctor."
    //                             },
    //                             {
    //                                 question: "Can I access my previous prescriptions?",
    //                                 answer: "Yes, all your prescriptions are securely stored and accessible under your profile in the 'Prescriptions' tab."
    //                             },
    //                             {
    //                                 question: "Is my health data secure on MediPlan?",
    //                                 answer: "Absolutely. We use encryption and best security practices to protect your medical data."
    //                             },
    //                             {
    //                                 question: "Will I get reminders for my medications?",
    //                                 answer: "Yes, you will receive timely notifications for all your medication schedules."
    //                             }
    //                         ].map((item, i) => (
    //                             <li key={i}>
    //                                 <p className="font-semibold text-black ">{item.question}</p>
    //                                 <p className="mt-1">Ans: {item.answer}</p>
    //                             </li>
    //                         ))}
    //                     </ul>
    //                 </div>
    //             );
    //         default:
    //             return null;
    //     }
    // };
    const features = [
        {
            title: 'Symptoms',
            description: 'Never Ignore Symptoms',
        },
        {
            title: 'Protection',
            description: 'Take Care for Family',
        },
        {
            title: 'Security',
            description: 'Provide Fixed Plan',
        },
        {
            title: 'Treatment',
            description: 'Reminders for Treatment',
        },
    ];
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    console.log(apiUrl)

    return (
        <div className='bg-[#E6E6FA]'>
            {/* Navbar */}
            <div className="fixed top-0 left-0 w-full z-1">
                <HomeHeader />
            </div>
            {/* Page 1 */}
            <section className='bg-[#E6E6FA] mt-16 sm:mt-16 ' >
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 bg-[#E6E6FA]">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                        <div>
                            <div className="max-w-lg md:max-w-none">
                                <h2 className="text-3xl font-semibold text-gray-800 sm:text-5xl sm:font-bold">
                                    Your health journey, simplified..
                                </h2>
                                <p className="mt-4 text-gray-700 sm:text-xl">
                                    Your health is our priority. Stay on track with your medication and stay in control of your well-being. Easy reminders. Personalized care.
                                </p>
                                <div>
                                    <button
                                        onClick={() => handleNavigation('/login')}
                                        type="button"
                                        className="bg-gradient-to-r from-sky-300 to-indigo-400 hover:from-sky-400 hover:to-indigo-500 text-white font-medium rounded-lg px-5 py-2.5 shadow-md hover:shadow-xl transition duration-300 mt-3 text-sm inline-flex items-center me-2 mb-2"
                                    >
                                        <span className="text-xl hover:scale-3">Login</span>
                                        <FaRegArrowAltCircleRight className="ml-3 text-2xl" />
                                    </button>

                                    <button
                                        onClick={() => handleNavigation('/signup')}
                                        type="button"
                                        className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-medium rounded-lg px-5 py-2.5 shadow-md hover:shadow-xl transition duration-300 mt-3 text-sm inline-flex items-center me-2 mb-2"
                                    >
                                        <span className="text-xl">Register</span>
                                        <LuNotebookPen className="ml-3 text-2xl" />
                                    </button>

                                </div>
                            </div>
                        </div>

                        <div>
                            <img
                                src={femaleIcon}
                                className="rounded "
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Page 2 */}
            <InsightsSection />

            {/* Page 3 */}
            <section className='bg-white group'>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 ">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                        <div >
                            <img
                                src={doctorImg}
                                className="rounded "
                                alt=""
                            />
                        </div>
                        <div>
                            <div className=" max-w-lg md:max-w-none">
                                <h2 className="text-2xl font-semibold text-blue-800 sm:text-5xl sm:font-bold">
                                    Your Customized Services..
                                </h2>

                                <p className="mt-4 text-gray-700 sm:text-xl">
                                    MediPlan to fit your unique health needs! Set personalized medication reminders, track your progress, and let caregivers manage your schedule.
                                </p>
                                <div className='py-4'>
                                    <ul className="space-y-4 text-gray-500 dark:text-gray-400">
                                        {[
                                            "Set Medication Reminders",
                                            "Track & Manage",
                                            "Stay Alert & Refill"
                                        ].map((text, i) => (
                                            <li key={i} className="flex items-center space-x-2 rtl:space-x-reverse">
                                                <svg className="shrink-0 w-3.5 h-3.5 text-black " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                                </svg>
                                                <span className="leading-1 text-blue-800">{text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => handleNavigation('/about')}
                                    className=" relative mt-3 inline-flex items-center justify-center overflow-hidden rounded-lg bg-black px-6 py-2.5 text-white text-sm font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                >
                                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>

                                    <span className="relative z-10 flex items-center">
                                        <span className="text-lg font-medium">Let's Learn More</span>
                                        <FiAlignJustify className="ml-3 text-xl" />
                                    </span>
                                </button>


                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/*  Page 5*/}
            <section>
                <div className="features-section grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card bg-white shadow-md rounded-2xl p-4 text-center hover:shadow-xl transition duration-300"
                        >
                            <h3 className="feature-title text-xl font-semibold text-blue-700 mb-2">{feature.title}</h3>
                            <p className="feature-description text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <Footer />

        </div>

    )
}

export default HomePage