"use client";

import { Bell, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NotificationPanel from "../DashboardUtilities/NotificationPanel";
import RightSidebar from "../DashboardUtilities/RightSidebar";

export default function AdminHeader() {
    return (
        <header className=" bg-[#E6E6FA] w-full dark:bg-neutral-900 px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 shadow-sm flex items-center justify-between">
            {/* Left: Brand */}
            <div className="flex items-center gap-3">
                <Menu className="w-6 h-6 text-muted-foreground lg:hidden" />
                <div className="text-black font-semibold text-3xl">
                    MediPlan
                </div>
            </div>

            {/* Center: Search (optional) */}
            <div className="hidden lg:block max-w-md w-full">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-4">
                {/* Notifications */}
                <NotificationPanel />

                {/* User Menu */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar className="cursor-pointer">
                            <AvatarImage src="/avatar.png" alt="User" />
                            <AvatarFallback>AD</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem><a href="/">Logout</a></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <RightSidebar />
            </div>
        </header>
    );
}
