import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import axios from "axios";
import { useState, useEffect } from "react";

const DemoAdmin = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "admin@example.com",
    password: "$2a$12$abc123HashedPasswordForDemoUseOnly",
    passwordWithoutEncryption: "demoPass123",
    phone: "9000000000",
    company: "HealthTrack Corp.",
    gender: "Male",
    address: "Sector 21, Demo City",
    dob: "1990-01-01",
    localDateTimeOfRegistration: "2025-06-01T10:00:00.000Z",
    appointmentEntities: [],
    roles: [
        {
            id: 101,
            role: "ADMIN",
        },
    ],
    enabled: true,
    accountNonExpired: true,
    credentialsNonExpired: true,
    accountNonLocked: true,
    username: "admin@example.com",
};

export default function AdminProfileCard() {
    const [user, setUser] = useState(null);
    const adminEmail = localStorage.getItem("email") || "";

    useEffect(() => {
        const fetchUserByEmailID = async () => {
            try {
                const res = await axios.get(
                    `${import.meta.env.VITE_API_BASE_URL}/patient/email/${adminEmail}`
                );
                setUser(res.data);
            } catch (e) {
                console.warn("Using DemoAdmin as fallback.");
                setUser(DemoAdmin);
            }
        };

        fetchUserByEmailID();
    }, [adminEmail]);

    if (!user) return <p className="text-center mt-10">Loading profile...</p>;

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 py-10 px-4 sm:px-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-6 underline underline-offset-8 decoration-purple-500">
                Admin Profile
            </h1>
        <Card className="w-full max-w-3xl mx-auto shadow-lg rounded-2xl p-4 transition hover:shadow-xl">
            <CardHeader className="flex flex-col items-center gap-4">
                <Avatar>
                    <AvatarImage src="" alt={user?.firstName || "User"} />
                    <AvatarFallback>
                        {user?.firstName?.[0] || "U"}
                        {user?.lastName?.[0] || ""}
                    </AvatarFallback>
                </Avatar>
                <div className="text-center">
                    <CardTitle className="text-2xl font-semibold text-gray-800">
                        {user.firstName} {user.lastName}
                    </CardTitle>
                    <CardDescription className="text-blue-700 font-medium">
                        {user.email}
                    </CardDescription>
                    <Badge
                        variant="outline"
                        className="mt-2 text-sm text-green-600 border-green-400"
                    >
                        {user.gender || "N/A"}
                    </Badge>
                </div>
            </CardHeader>

            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-gray-700">
                <div>
                    <h4 className="font-medium">Registration Time</h4>
                    <p>{user.localDateTimeOfRegistration?.split("T")[0]}</p>
                </div>
                <div>
                    <h4 className="font-medium">Phone:</h4>
                    <p>{user.phone || "Not Provided"}</p>
                </div>
                <div>
                    <h4 className="font-medium">Contact</h4>
                    <p className="flex items-center gap-2">
                        <FaEnvelope className="text-blue-500" /> {user.email}
                    </p>
                    <p className="flex items-center gap-2">
                        <FaPhoneAlt className="text-green-500" /> {user.phone}
                    </p>
                </div>
                <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <a
                        href={user?.linkedin || "#"}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center text-blue-700 hover:underline"
                    >
                        <FaLinkedin className="mr-2" /> View Profile
                    </a>
                </div>
            </CardContent>
        </Card>
        </div>
    );
}
