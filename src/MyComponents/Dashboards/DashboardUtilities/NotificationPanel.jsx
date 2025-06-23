import { Bell } from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

export default function NotificationPanel() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <button className="relative text-muted-foreground hover:text-purple-500 transition-colors">
                    <Bell className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full" />
                </button>
            </PopoverTrigger>

            <PopoverContent className="w-72 p-4">
                <h4 className="text-sm font-semibold mb-2 text-neutral-700 dark:text-neutral-200">
                    Notifications
                </h4>
                <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                    <li className="bg-neutral-100 dark:bg-neutral-800 px-3 py-2 rounded-md shadow-sm">
                        ✅ Appointment confirmed at 4 PM
                    </li>
                    <li className="bg-neutral-100 dark:bg-neutral-800 px-3 py-2 rounded-md shadow-sm">
                        📦 New medicine added to inventory
                    </li>
                    <li className="bg-neutral-100 dark:bg-neutral-800 px-3 py-2 rounded-md shadow-sm">
                        🚨 Low stock alert: Paracetamol
                    </li>
                </ul>
            </PopoverContent>
        </Popover>
    );
}
