import { Bell } from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";

export default function NotificationPanel() {
    const notifications = [
        {
            id: 1,
            icon: "✅",
            message: "Appointment confirmed at 4 PM",
            type: "success",
        },
        {
            id: 2,
            icon: "📦",
            message: "New medicine added to inventory",
            type: "info",
        },
        {
            id: 3,
            icon: "🚨",
            message: "Low stock alert: Paracetamol",
            type: "warning",
        },
    ];

    return (
        <Popover>
            <PopoverTrigger asChild>
                <button
                    className="relative text-muted-foreground hover:text-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-full"
                    aria-label="Open notifications"
                >
                    <Bell className="w-6 h-6" />
                    {notifications.length > 0 && (
                        <span className="absolute -top-1.5 -right-1.5 h-3 w-3 bg-red-500 border-2 border-white dark:border-neutral-900 rounded-full animate-ping"></span>
                    )}
                </button>
            </PopoverTrigger>

            <PopoverContent
                className="w-80 p-4 shadow-xl rounded-xl bg-white dark:bg-neutral-900 border dark:border-neutral-800"
                align="end"
            >
                <h4 className="text-lg font-semibold mb-3 text-neutral-700 dark:text-neutral-100">
                    Notifications
                </h4>

                {notifications.length === 0 ? (
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        No new notifications 🎉
                    </p>
                ) : (
                    <ul className="space-y-2 max-h-60 overflow-y-auto">
                        {notifications.map((note) => (
                            <li
                                key={note.id}
                                className="flex items-start gap-2 bg-neutral-100 dark:bg-neutral-800 px-4 py-2 rounded-md shadow-sm"
                            >
                                <span className="text-lg">{note.icon}</span>
                                <span className="text-sm text-neutral-800 dark:text-neutral-200">
                                    {note.message}
                                </span>
                            </li>
                        ))}
                    </ul>
                )}

                <div className="pt-3 text-right">
                    <button className="text-sm text-blue-600 hover:underline">
                        View all
                    </button>
                </div>
            </PopoverContent>
        </Popover>
    );
}
