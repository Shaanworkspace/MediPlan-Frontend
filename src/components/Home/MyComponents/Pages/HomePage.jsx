import React from 'react'
import HomePageHeader from '../UI/HomePageHeader'



const HomePage = () => {
    return (
        <>
            {/* Navbar */}
            <HomePageHeader />
            {/* Page 1 */}
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                        <div>
                            <div className="max-w-lg md:max-w-none">
                                <h2 className="text-2xl font-semibold text-gray-900 sm:text-5xl sm:font-bold">
                                Your health journey, simplified..
                                </h2>

                                <p className="mt-4 text-gray-700 sm:text-xl">
                                    Your health is our priority. Stay on track with your medication and stay in control of your well-being. Easy reminders. Personalized care.
                                </p>
                            </div>
                        </div>

                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="rounded"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default HomePage