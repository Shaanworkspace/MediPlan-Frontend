"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search } from "lucide-react";
import HomeHeader from "../../UI/HomeHeader";

// Dummy Doctor Data
const doctors = [
    { id: 1, name: "Dr. A.K. Sharma", phone: "9871112222", email: "ak.sharma@hospital.com", specialization: "Cardiology", photo: "https://via.placeholder.com/50" },
    { id: 2, name: "Dr. Meena Rao", phone: "9866543210", email: "meena.rao@hospital.com", specialization: "Neurology", photo: "https://via.placeholder.com/50" },
    { id: 3, name: "Dr. Rohit Bansal", phone: "9855554444", email: "rohit.b@hospital.com", specialization: "Orthopedics", photo: "https://via.placeholder.com/50" },
    { id: 4, name: "Dr. Priya Mehta", phone: "9844445555", email: "priya.mehta@hospital.com", specialization: "Pediatrics", photo: "https://via.placeholder.com/50" },
    { id: 5, name: "Dr. Sanjay Patel", phone: "9833336666", email: "sanjay.patel@hospital.com", specialization: "Dermatology", photo: "https://via.placeholder.com/50" },
];

export default function DoctorPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchBy, setSearchBy] = useState("specialization");

    const filteredDoctors = doctors.filter((doctor) => {
        if (searchBy === "specialization") {
            return doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
        } else if (searchBy === "name") {
            return doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
        } else if (searchBy === "phone") {
            return doctor.phone.toLowerCase().includes(searchTerm.toLowerCase());
        }
        return true;
    });


    return (
        <div className="min-h-screen bg-[#E6E6FA] p-6">

            <div className="fixed z-1">
                <HomeHeader />
                {/* Search Bar */}
                <div className="flex min-h-16 min-w-full bg-[#E6E6FA] fixed z-10 mt-12 items-center justify-center gap-4">
                    <div className="relative w-full max-w-md">
                        <Input
                            type="text"
                            placeholder={`Search by ${searchBy}...`}
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
            </div>
            <div className="max-w-4xl mx-auto space-y-6 mt-40">
                {/* Doctor Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredDoctors.map((doctor) => (
                        <Card key={doctor.id} className="overflow-hidden">
                            <CardHeader className="flex flex-row items-center p-4">
                                <img src={doctor.photo} alt={doctor.name} className="w-12 h-12 rounded-full mr-4" />
                                <CardTitle className="text-lg">{doctor.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-4">
                                <p className="text-sm text-gray-600">Specialization: {doctor.specialization}</p>
                                <p className="text-sm text-gray-600">Phone: {doctor.phone}</p>
                                <p className="text-sm text-gray-600">Email: {doctor.email}</p>
                            </CardContent>
                            <CardFooter className="p-4">
                                <Button className="w-full" onClick={() => window.location.href = `mailto:${doctor.email}`}>
                                    Contact Doctor
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}