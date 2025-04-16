import React from 'react'
import HomePageHeader from '../UI/HomePageHeader'
// import { IoBookOutline } from "react-icons/io5";
import { FaRegArrowAltCircleRight } from "react-icons/fa";


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

                                <button type="button" class="mt-3 text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 me-2 mb-2">
                                    <span className='text-xl'>
                                        Show Plans
                                    </span>
                                    {/* <IoBookOutline className='text-2xl ml-3' /> */}
                                    <FaRegArrowAltCircleRight  className='ml-3 text-2xl mr-3' />
                                </button>
                            </div>
                        </div>

                        <div>
                            <img
                                src="src/images/female-6813278_1920 1.svg"
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