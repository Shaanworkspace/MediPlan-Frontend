import { useNavigate } from 'react-router';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import HomeHeader from "./HomeHeader";
import { FaRegCheckCircle } from "react-icons/fa";
export default function AboutPage() {
    const navigate = useNavigate();
     const handleNavigation = (route) => {
        navigate(route);
        setIsMobileMenuOpen(false);
    };
    return (
        <div className="min-h-screen bg-[#E6E6FA] p-6">
            <HomeHeader />
            {/* Hero Image or Illustration */}
            <div className="flex justify-center mb-10">
                <img
                    src="/images/mediplan-illustration.svg" // Replace with your custom image
                    alt="MediPlan Illustration"
                    className="max-w-xl w-full"
                />
            </div>
<main>
            {/* What is MediPlan */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold mb-4">What is MediPlan?</h2>
                <p className="text-gray-700 leading-relaxed">
                    MediPlan is a powerful, user-centric platform designed to streamline your long-term medication and health routines.
                    Whether you're managing your own schedule or helping a loved one, MediPlan empowers users with reminders,
                    refill alerts, doctor updates, health progress monitoring, and caregiver-friendly features.
                </p>
            </section>

            {/* Key Features */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        "Custom Medication Schedules",
                        "Smart Refill Alerts",
                        "Caregiver Access Mode",
                        "Health Progress Tracking",
                        "Emergency Contacts Integration",
                        "AI Symptom Checker (coming soon)",
                    ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <FaRegCheckCircle className="text-purple-600 mt-1" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Why Choose MediPlan */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold mb-4">Why Choose MediPlan?</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                    MediPlan is built for everyday users, patients, and caregivers who want to stay in control of health. Unlike
                    generic apps, MediPlan provides a **complete ecosystem** – from tracking daily pills to notifying caregivers and even
                    integrating with pharmacies and doctors (coming soon).
                </p>
            </section>

            {/* Call To Action */}
            <section className="text-center mt-10">
                <h3 className="text-xl font-semibold mb-3">Ready to take control of your health?</h3>
                <Button onClick={() => handleNavigation('/')} className="bg-purple-600 text-white hover:bg-purple-700 px-6 py-2 text-base rounded-lg">
                    Get Started Now
                </Button>
            </section>
        </main>
    </div >
  );
}