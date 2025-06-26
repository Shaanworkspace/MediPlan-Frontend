import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FaChartBar, FaCogs, FaQuestionCircle } from "react-icons/fa";

export default function InsightsSection() {
    return (
        <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-12 flex items-center justify-center min-h-[90vh]">
            <div className="mx-auto w-full max-w-4xl px-4">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-8">
                    <h1 className="font-extrabold text-3xl sm:text-4xl text-purple-800 drop-shadow">
                        MediPlan: Health & Medication Insights
                    </h1>
                    <h2 className="font-medium text-black/70 sm:mt-2 max-w-2xl">
                        Empowering you with data-driven health management, medication reminders, and insightful analytics for a healthier tomorrow.
                    </h2>
                </div>

                {/* Tabs */}
                <Tabs defaultValue="stats" className=" w-full">
                    <TabsList className="flex w-full flex-nowrap sm:flex-nowrap justify-center sm:justify-evenly gap-2 bg-white/80 p-2 h-[10vh] rounded-xl shadow-lg border">
                        <TabsTrigger
                            value="stats"
                            className="flex items-center gap-2 data-[state=active]:bg-purple-600 data-[state=active]:text-white px-5 py-5 rounded-lg font-semibold transition"
                        >
                            <FaChartBar className="text-lg" />
                            Statistics
                        </TabsTrigger>
                        <TabsTrigger
                            value="about"
                            className="flex items-center gap-2 data-[state=active]:bg-purple-600 data-[state=active]:text-white px-5 py-5 rounded-lg font-semibold transition"
                        >
                            <FaCogs className="text-lg" />
                            Services
                        </TabsTrigger>
                        <TabsTrigger
                            value="faq"
                            className="flex items-center gap-2 data-[state=active]:bg-purple-600 data-[state=active]:text-white px-5 py-5 rounded-lg font-semibold transition"
                        >
                            <FaQuestionCircle className="text-lg" />
                            FAQ
                        </TabsTrigger>
                    </TabsList>

                    {/* Tab Content */}
                    <div className="mt-6 md:mt-1 border border-gray-200 rounded-2xl p-6 shadow-xl bg-white/90 max-h-[44vh] min-h-[38vh] overflow-y-auto">
                        <TabsContent value="stats">
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-purple-700 flex items-center gap-2">
                                    <FaChartBar /> Platform Statistics
                                </h3>
                                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                                    <li>👥 <b>2,000+</b> active users managing their health</li>
                                    <li>💊 <b>10,000+</b> medication reminders sent</li>
                                    <li>📈 <b>98%</b> adherence rate among patients</li>
                                    <li>🩺 <b>500+</b> doctors and caregivers onboarded</li>
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="about">
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-purple-700 flex items-center gap-2">
                                    <FaCogs /> Services & Features
                                </h3>
                                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                                    <li>🔔 Smart medication reminders & scheduling</li>
                                    <li>📊 Personalized health analytics dashboard</li>
                                    <li>👨‍⚕️ Doctor, patient, and caregiver roles</li>
                                    <li>🔒 Secure login & role-based access</li>
                                    <li>🌐 Accessible from any device, anytime</li>
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="faq">
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-purple-700 flex items-center gap-2">
                                    <FaQuestionCircle /> Frequently Asked Questions
                                </h3>
                                <ul className="list-decimal ml-6 text-gray-700 space-y-2">
                                    <li>
                                        <b>How do I reset my password?</b>
                                        <br />
                                        Use the "Forgot Password" link on the login page to receive a reset email.
                                    </li>
                                    <li>
                                        <b>Can I add multiple medications?</b>
                                        <br />
                                        Yes, you can manage and schedule reminders for all your medications.
                                    </li>
                                    <li>
                                        <b>Is my health data secure?</b>
                                        <br />
                                        Absolutely! We use industry-standard encryption and privacy practices.
                                    </li>
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </section>
    );
}