import React from 'react'
import { useNavigate } from 'react-router'
import HomePageHeader from '../UI/HomePageHeader'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";
import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Button } from "../../ui/button"


const HomePage = () => {
	const [activeTab, setActiveTab] = useState("stats");
	const navigate = useNavigate();

	const handleNavigation = (route) => {
		navigate(route);
	}

	const renderTabContent = () => {
		switch (activeTab) {
			case "stats":
				return (
					<div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
							{[
								{ value: "95,856,25", label: "Medication Adherence Rate" },
								{ value: "1.3M+", label: "TB Worldwide Children" },
								{ value: "3.6M+", label: "TB Worldwide Women" },
								{ value: "6.1M+", label: "TB Worldwide Men" },
								{ value: "12,50+ Users", label: "Low Stock Alerts Sent" },
								{ value: "95,856,25", label: "Caregiver-Assist Schedule" },
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
							We are helping people in various ways
						</h2>
						<ul className="space-y-4 text-gray-500 dark:text-gray-400">
							{[
								"📅 Appointment Scheduling – Book and manage doctor appointments with ease.",
								"🩺 Medical History Tracking – Access complete patient history anytime.",
								"💊 Prescription Management – Generate and store e-prescriptions digitally.",
								"🔔 Medication Reminders – Get alerts to take medicines on time.",
								"📊 Health Analytics Dashboard – Visualize patient data and trends.",
								"🛡️ Secure Data Handling – Ensure patient information stays confidential."
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
						<ul className="space-y-4 text-gray-500 dark:text-gray-400">
							{[
								{
									question: "How do I book a doctor’s appointment?",
									answer: "Simply log in, navigate to the 'Appointments' section, and choose your preferred date and doctor."
								},
								{
									question: "Can I access my previous prescriptions?",
									answer: "Yes, all your prescriptions are securely stored and accessible under your profile in the 'Prescriptions' tab."
								},
								{
									question: "Is my health data secure on MediPlan?",
									answer: "Absolutely. We use encryption and best security practices to protect your medical data."
								},
								{
									question: "Will I get reminders for my medications?",
									answer: "Yes, you will receive timely notifications for all your medication schedules."
								}
							].map((item, i) => (
								<li key={i}>
									<p className="font-semibold text-gray-700 dark:text-white">{item.question}</p>
									<p className="mt-1">{item.answer}</p>
								</li>
							))}
						</ul>
					</div>
				);
			default:
				return null;
		}
	};
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

	return (
		<div className='bg-[#E6E6FA]'>
			{/* Navbar */}
			<div className="fixed top-0 left-0 w-full z-1">
				<HomePageHeader />
			</div>
			{/* Page 1 */}
			<section className='bg-[#E6E6FA] mt-10' >
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
									<button type="button" onClick={() => handleNavigation('/login')} className="hover:shadow-xl shadow-md transition duration-300 mt-3 text-gray-900 bg-blue-300 hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-blue-400 dark:border-gray-700 dark:text-gray-900 dark:hover:bg-blue-200 me-2 mb-2">
										<span className='text-xl'>
											Login
										</span>
										{/* <IoBookOutline className='text-2xl ml-3' /> */}
										<FaRegArrowAltCircleRight className='ml-3 text-2xl mr-3' />
									</button>
									<button type="button" onClick={() => handleNavigation('/signup')} className="hover:shadow-xl shadow-md transition duration-300 mt-3 text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 me-2 mb-2">
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
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Page 2 */}
			<section className="bg-white pt-10 flex items-center justify-center">
				<div className="mx-auto w-full max-w-[90%] min-h-[80vh] px-4">
					<div className="flex flex-col justify-center items-center text-center">
						<h1 className="font-bold text-2xl sm:text-3xl text-gray-800">MediPlan: Health & Medication Insights</h1>
						<h2 className="font-semibold text-black/70 sm:mt-3">MediPlan ensures optimal health management for users.</h2>
					</div>
					<div className="pt-6">
						<div className="w-full h-[60vh] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
							{/* Mobile Dropdown Active only in mobile view */}
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
												? "bg-gray-100 dark:bg-gray-600 text-black font-bold"
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

			{/* Page 3 */}
			<section className='bg-white'>
				<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 ">
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
						<div >
							<img
								src="src/assets/doctor.svg"
								className="rounded "
								alt=""
							/>
						</div>
						<div>
							<div className="max-w-lg md:max-w-none">
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

								<button type="button" className="mt-3 text-white hover:bg-blue-800 bg-black hover:text-white border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 me-2 mb-2 hover:shadow-xl transition duration-300">
									<span className='text-xl'>
										Let's Learn More
									</span>
									{/* <IoBookOutline className='text-2xl ml-3' /> */}
									<FiAlignJustify className='ml-3 text-2xl mr-3' />
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
			<footer className="bg-[#E6E6FA] flex flex-wrap justify-evenly py-10">
				{/* About Section */}
				<div className="max-w-xs">
					<h3 className="text-lg font-semibold text-gray-800 mb-3">About</h3>
					<p className="text-sm text-gray-600">
						MediPlan is your personalized tool for managing long-term medication schedules. With features like reminders,
						progress tracking, and caregiver support, we help ensure you stay on top of your health.
					</p>
					<div className="flex gap-4 mt-6">
						<FaYoutube src="/images/Youtube.svg" alt="YouTube" className="w-6 h-6 cursor-pointer" />
						<FaSquareInstagram src="/images/Instagram.svg" alt="Instagram" className="w-6 h-6 cursor-pointer" />
						<FaSquareXTwitter src="/images/Twitter.svg" alt="Twitter" className="w-6 h-6 cursor-pointer" />
						<FaFacebook src="/images/Facebook.svg" alt="Facebook" className="w-6 h-6 cursor-pointer" />
					</div>
				</div>

				{/* Quick Links */}
				<div className="max-w-xs">
					<h3 className="text-lg font-semibold text-gray-800 mb-3">Quick Links</h3>
					<ul className="space-y-2 text-sm text-blue-800">
						<li><a href="#" className="hover:underline">Medication Reminders</a></li>
						<li><a href="#" className="hover:underline">Medication Benefits & Risks</a></li>
						<li><a href="#" className="hover:underline">FAQs</a></li>
						<li><a href="/customisedService.html" className="hover:underline">Parenting Feature</a></li>
						<li><a href="/contact.html" className="hover:underline">Contact Us</a></li>
					</ul>
				</div>

				{/* Helpful Links */}
				<div className="max-w-xs">
					<h3 className="text-lg font-semibold text-gray-800 mb-3">Helpful Links</h3>
					<ul className="space-y-2 text-sm text-blue-800">
						<li><a href="#" className="hover:underline">How to Manage Medications</a></li>
						<li><a href="" className="hover:underline">Caregiver Support Tools</a></li>
						<li><a href="#" className="hover:underline">Medicine Refill Alerts</a></li>
						<li><a href="#" className="hover:underline">Health Progress Monitoring</a></li>
					</ul>
				</div>

				{/* Resources */}
				<div className="max-w-xs">
					<h3 className="text-lg font-semibold text-gray-800 mb-3">Resources</h3>
					<ul className="space-y-2 text-sm text-blue-800">
						<li><a href="https://www.who.int/publications/who-guidelines" target="_blank" rel="noopener noreferrer" className="hover:underline">WHO Guidelines</a></li>
						<li><a href="https://www.cdc.gov/medication-safety/about/index.html" target="_blank" rel="noopener noreferrer" className="hover:underline">CDC Medication Tips</a></li>
						<li><a href="https://nhsrcindia.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">Health Ministry Resources</a></li>
					</ul>
				</div>
			</footer>

		</div>

	)
}

export default HomePage