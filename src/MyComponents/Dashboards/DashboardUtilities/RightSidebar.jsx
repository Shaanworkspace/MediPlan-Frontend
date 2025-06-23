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
            {/* Trigger icon */}
            <SheetTrigger asChild>
                <button className="p-2 rounded-md text-muted-foreground hover:text-purple-500 transition-colors focus:outline-none">
                    <Menu className="w-6 h-6" />
                </button>
            </SheetTrigger>

            {/* Sidebar content */}
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                    <SheetTitle className="text-lg text-purple-600 dark:text-purple-400">
                        🔔 MediPlan Alerts
                    </SheetTitle>
                </SheetHeader>

                <div className="mt-4 space-y-6 text-sm">
                    {/* Notifications */}
                    <section>
                        <h4 className="text-sm font-semibold mb-2 text-neutral-700 dark:text-neutral-200">
                            Notifications
                        </h4>
                        <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
                            <li className="bg-neutral-100 dark:bg-neutral-800 px-3 py-2 rounded-md shadow">
                                ✅ Appointment confirmed at <strong>4:00 PM</strong>
                            </li>
                            <li className="bg-neutral-100 dark:bg-neutral-800 px-3 py-2 rounded-md shadow">
                                📦 New medicine batch <strong>Paracetamol</strong> added
                            </li>
                            <li className="bg-neutral-100 dark:bg-neutral-800 px-3 py-2 rounded-md shadow">
                                🚨 Low stock alert: <strong>Amoxicillin</strong>
                            </li>
                        </ul>
                    </section>

                    {/* Upcoming Appointments */}
                    <section>
                        <h4 className="text-sm font-semibold mb-2 text-neutral-700 dark:text-neutral-200">
                            Upcoming Appointments
                        </h4>
                        <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
                            <li className="bg-green-100 dark:bg-green-900/30 px-3 py-2 rounded-md shadow">
                                👨‍⚕️ Dr. Sharma with <strong>Ravi Kumar</strong> — 5:30 PM
                            </li>
                            <li className="bg-green-100 dark:bg-green-900/30 px-3 py-2 rounded-md shadow">
                                👩‍⚕️ Dr. Meena with <strong>Sita Verma</strong> — 6:00 PM
                            </li>
                        </ul>
                    </section>

                    {/* Stock Alerts */}
                    <section>
                        <h4 className="text-sm font-semibold mb-2 text-neutral-700 dark:text-neutral-200">
                            Medicine Alerts
                        </h4>
                        <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
                            <li className="bg-yellow-100 dark:bg-yellow-900/30 px-3 py-2 rounded-md shadow">
                                🟡 Only 5 tablets left: <strong>Ibuprofen</strong>
                            </li>
                            <li className="bg-yellow-100 dark:bg-yellow-900/30 px-3 py-2 rounded-md shadow">
                                🟡 <strong>Cetirizine</strong> needs reorder soon
                            </li>
                        </ul>
                    </section>
                </div>
            </SheetContent>
        </Sheet>
    );
}
