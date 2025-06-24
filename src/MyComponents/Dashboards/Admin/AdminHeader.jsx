// src/components/AdminHeader.jsx
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
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function AdminHeader({ searchTerm, setSearchTerm, searchBy, setSearchBy }) {
    return (
        <header className="bg-[#E6E6FA] w-full dark:bg-neutral-900 px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 shadow-sm flex items-center justify-between">
            {/* Left: Brand */}
            <div className="flex items-center gap-3">
                <Menu className="w-6 h-6 text-muted-foreground lg:hidden" />
                <div className="text-black font-semibold text-3xl">MediPlan</div>
            </div>

            {/* Center: Search */}
            <div className="flex items-center justify-center gap-4">
                <div className="relative w-full max-w-md">
                    <Input
                        type="text"
                        placeholder={`Search DOCTOR by ${searchBy}...`}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-lg bg-white"
                    />
                    <Search className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
                </div>
                <select
                    value={searchBy}
                    onChange={(e) => setSearchBy(e.target.value)}
                    className="p-2 border rounded bg-neutral-500 text-white"
                >
                    <option value="specialization">Specialization</option>
                    <option value="name">Name</option>
                    <option value="phone">Phone Number</option>
                </select>
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