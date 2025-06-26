import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function RightSidebar() {
    return (
        <Sheet>
            {/* Trigger: Hamburger Icon */}
            <SheetTrigger asChild>
                <button
                    className="p-2 rounded-md text-muted-foreground hover:text-purple-600 transition-colors focus:outline-none"
                    aria-label="Open sidebar panel"
                >
                    <Menu className="w-6 h-6" />
                </button>
            </SheetTrigger>

            {/* Sidebar Content */}
            <SheetContent
                side="right"
                className="w-[85vw] sm:w-[400px] px-5 py-6 overflow-y-auto"
            >
                <SheetHeader>
                    <SheetTitle className="text-xl font-bold text-purple-700 dark:text-purple-400 tracking-wide">
                        🩺 MediPlan Alerts
                    </SheetTitle>
                </SheetHeader>

                <div className="mt-6 space-y-6">
                    {/* Notifications */}
                    <section>
                        <h4 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300 uppercase">
                            Notifications
                        </h4>
                        <ul className="space-y-2">
                            <li className="bg-gray-100 dark:bg-neutral-800 px-4 py-2 rounded-lg shadow">
                                ✅ Appointment confirmed at <strong>4:00 PM</strong>
                            </li>
                            <li className="bg-gray-100 dark:bg-neutral-800 px-4 py-2 rounded-lg shadow">
                                📦 New batch of <strong>Paracetamol</strong> added
                            </li>
                            <li className="bg-gray-100 dark:bg-neutral-800 px-4 py-2 rounded-lg shadow">
                                🚨 Low stock alert: <strong>Amoxicillin</strong>
                            </li>
                        </ul>
                    </section>

                    {/* Upcoming Appointments */}
                    <section>
                        <h4 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300 uppercase">
                            Upcoming Appointments
                        </h4>
                        <ul className="space-y-2">
                            <li className="bg-green-100 dark:bg-green-900/20 px-4 py-2 rounded-lg shadow">
                                👨‍⚕️ Dr. Sharma with <strong>Ravi Kumar</strong> — 5:30 PM
                            </li>
                            <li className="bg-green-100 dark:bg-green-900/20 px-4 py-2 rounded-lg shadow">
                                👩‍⚕️ Dr. Meena with <strong>Sita Verma</strong> — 6:00 PM
                            </li>
                        </ul>
                    </section>

                    {/* Stock Alerts */}
                    <section>
                        <h4 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300 uppercase">
                            Medicine Alerts
                        </h4>
                        <ul className="space-y-2">
                            <li className="bg-yellow-100 dark:bg-yellow-900/20 px-4 py-2 rounded-lg shadow">
                                🟡 Only 5 tablets left: <strong>Ibuprofen</strong>
                            </li>
                            <li className="bg-yellow-100 dark:bg-yellow-900/20 px-4 py-2 rounded-lg shadow">
                                🟡 Reorder <strong>Cetirizine</strong> soon
                            </li>
                        </ul>
                    </section>
                </div>
            </SheetContent>
        </Sheet>
    );
}
