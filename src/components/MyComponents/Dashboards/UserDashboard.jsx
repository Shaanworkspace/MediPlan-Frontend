import React from "react";


import { Bell, PlusCircle, Activity, Calendar, Stethoscope, User } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import HeaderPage from "../UI/HeaderPage";


const dummyReports = [
    {
        id: 1,
        date: "2025-04-15",
        status: "Monitor",
        summary: "You reported mild cough and fever. Stay hydrated and rest."
    },
    {
        id: 2,
        date: "2025-04-10",
        status: "Normal",
        summary: "No alarming symptoms reported. Maintain your routine."
    },
    {
        id: 3,
        date: "2025-04-10",
        status: "Normal",
        summary: "No alarming symptoms reported. Maintain your routine."
    },
    {
        id: 2,
        date: "2025-04-10",
        status: "Normal",
        summary: "No alarming symptoms reported. Maintain your routine."
    }
];

const symptomData = [
    { date: "Apr 01", symptoms: 1 },
    { date: "Apr 03", symptoms: 2 },
    { date: "Apr 05", symptoms: 1 },
    { date: "Apr 10", symptoms: 0 },
    { date: "Apr 15", symptoms: 2 }
];

export default function UserDashboard() {
    return (
        <div  className='bg-[#E6E6FA]'>
            {/* Navbar */}
			<div className="fixed top-0 left-0 w-full z-1">
				<HeaderPage/>
			</div>
            
            {/* body */}
            <div className="mt-16 min-h-screen grid grid-cols-12">
                {/* Sidebar
                <aside className="col-span-2 bg-white shadow-lg p-6 flex flex-col gap-6">
                    <h1 className="text-2xl font-bold text-blue-600">MediPlan</h1>
                    <nav className="flex flex-col gap-4">
                        <Button variant="ghost" className="justify-start text-left"><User className="mr-2" /> Dashboard</Button>
                        <Button variant="ghost" className="justify-start text-left"><PlusCircle className="mr-2" /> New Report</Button>
                        <Button variant="ghost" className="justify-start text-left"><Calendar className="mr-2" /> Symptom Tracker</Button>
                        <Button variant="ghost" className="justify-start text-left"><Stethoscope className="mr-2" /> Tips</Button>
                        <Button variant="ghost" className="justify-start text-left"><Activity className="mr-2" /> Health Alerts</Button>
                        <Button variant="ghost" className="justify-start text-left"><Bell className="mr-2" /> Reminders</Button>
                    </nav>
                </aside> */}
                
                {/* Main Content */}
                <main className="col-span-10 p-8 space-y-10">
                    {/* Welcome Panel */}
                    <section className="flex items-center justify-between bg-white p-6 rounded-2xl shadow">
                        <div>
                            <h2 className="text-3xl font-semibold">Good Morning, Shaan 👋</h2>
                            <p className="text-gray-600">Here’s your health overview for the week.</p>
                        </div>
                        <img src="https://source.unsplash.com/80x80/?profile" alt="Profile" className="rounded-full" />
                    </section>

                    {/* Health Report Timeline */}
                    <section>
                        <Card>
                            <CardHeader>
                                <CardTitle>Your Health Reports</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {dummyReports.map((report) => (
                                    <div key={report.id} className="border-l-4 pl-4 border-blue-500 bg-blue-50 p-4 rounded">
                                        <p className="text-sm text-gray-600">{report.date}</p>
                                        <p className="text-md font-medium">Status: {report.status}</p>
                                        <p className="text-sm text-gray-800">{report.summary}</p>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </section>

                    {/* Symptom Tracker Graph */}
                    <section>
                        <Card>
                            <CardHeader>
                                <CardTitle>Symptom Tracker</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={symptomData}>
                                        <XAxis dataKey="date" />
                                        <YAxis allowDecimals={false} />
                                        <Tooltip />
                                        <Line type="monotone" dataKey="symptoms" stroke="#2563eb" strokeWidth={2} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Personalized Health Tips */}
                    <section className="grid grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Health Tips</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc pl-4 space-y-2 text-gray-700">
                                    <li>Stay hydrated. Aim for 2-3 liters of water per day.</li>
                                    <li>Get 7-9 hours of sleep to boost immunity.</li>
                                    <li>Wear a mask in high-pollution areas.</li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Health Alerts */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Public Health Alerts (Delhi)</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc pl-4 space-y-2 text-red-700">
                                    <li>Pollution index high this week. Avoid outdoor exercise.</li>
                                    <li>Flu season rising — get your flu vaccine.</li>
                                    <li>COVID-19 subvariant cases reported in NCR.</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Medication Reminders */}
                    <section>
                        <Card>
                            <CardHeader>
                                <CardTitle>Reminders</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <p className="text-gray-700">💊 Take Vitamin D supplement at 10:00 AM</p>
                                    <p className="text-gray-700">🩺 Follow-up with doctor on April 22</p>
                                </div>
                            </CardContent>
                        </Card>
                    </section>
                </main>

                
            </div>
        </div>
    );
}
