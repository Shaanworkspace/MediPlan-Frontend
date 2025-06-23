"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pencil, Trash2, Plus, Info } from "lucide-react";
import { useState } from "react";

// Updated Dummy Data
const patients = [
  { id: 1, name: "Ravi Kumar", phone: "9876543210", email: "ravi.k@example.com", role: "Patient", photo: "https://via.placeholder.com/50" },
  { id: 2, name: "Sita Verma", phone: "9812345670", email: "sita.verma@example.com", role: "Patient", photo: "https://via.placeholder.com/50" },
  { id: 3, name: "Anuj Singh", phone: "9845012345", email: "anuj.singh@example.com", role: "Patient", photo: "https://via.placeholder.com/50" },
  { id: 4, name: "Pooja Mehta", phone: "9823456789", email: "pooja.mehta@example.com", role: "Patient", photo: "https://via.placeholder.com/50" },
  { id: 5, name: "Rahul Dev", phone: "9898989898", email: "rahul.dev@example.com", role: "Patient", photo: "https://via.placeholder.com/50" },
];

const doctors = [
  { id: 1, name: "Dr. A.K. Sharma", phone: "9871112222", email: "ak.sharma@hospital.com", role: "Doctor", photo: "https://via.placeholder.com/50", specialization: "Cardiology" },
  { id: 2, name: "Dr. Meena Rao", phone: "9866543210", email: "meena.rao@hospital.com", role: "Doctor", photo: "https://via.placeholder.com/50", specialization: "Neurology" },
  { id: 3, name: "Dr. Rohit Bansal", phone: "9855554444", email: "rohit.b@hospital.com", role: "Doctor", photo: "https://via.placeholder.com/50", specialization: "Orthopedics" },
  { id: 4, name: "Dr. Priya Mehta", phone: "9844445555", email: "priya.mehta@hospital.com", role: "Doctor", photo: "https://via.placeholder.com/50", specialization: "Pediatrics" },
  { id: 5, name: "Dr. Sanjay Patel", phone: "9833336666", email: "sanjay.patel@hospital.com", role: "Doctor", photo: "https://via.placeholder.com/50", specialization: "Dermatology" },
];

export default function AdminHeroSection() {
    const [data, setData] = useState(patients);

    const handleDelete = (id) => {
        setData((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <main className="p-6 space-y-8">
             <div className="text-neutral-700 text-3xl">
                    Welcome <span className="text-green-600 font-bold">Admin</span>
                </div>
            {/* Hero Cards */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                    <CardHeader>
                        <CardTitle>Total Doctors</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">5</p>
                    </CardContent>
                </Card>
                <Card  className="shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                    <CardHeader>
                        <CardTitle>Total Patients</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">5</p>
                    </CardContent>
                </Card>
                <Card  className="shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                    <CardHeader>
                        <CardTitle>Appointments Today</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold text-green-600 dark:text-green-400">3</p>
                    </CardContent>
                </Card>
            </section>

            {/* Patient Cards */}
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Patient Records</h2>
                <Button className="flex gap-2">
                    <Plus className="w-4 h-4" />
                    Add New Patient
                </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {patients.map((patient) => (
                    <Card key={patient.id} className="overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                        <CardHeader className="flex flex-row items-center p-4">
                            <img src={patient.photo} alt={patient.name} className="w-12 h-12 rounded-full mr-4" />
                            <CardTitle className="text-lg">{patient.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4">
                            <p className="text-sm text-gray-600">Phone: {patient.phone}</p>
                            <p className="text-sm text-gray-600">Email: {patient.email}</p>
                            <p className="text-sm text-gray-600">Role: {patient.role}</p>
                        </CardContent>
                        <CardFooter className="p-4 flex justify-end space-x-2">
                            <Button className="shadow-lg hover:shadow-xl transition transform hover:-translate-y-1" variant="outline" size="sm">
                                <Pencil className="w-4 h-4" />
                            </Button>
                            <Button className="shadow-lg hover:shadow-xl transition transform hover:-translate-y-1" variant="destructive" size="sm" onClick={() => handleDelete(patient.id)}>
                                <Trash2 className="w-4 h-4" />
                            </Button>
                            <Button className="shadow-lg hover:shadow-xl transition transform hover:-translate-y-1" variant="outline" size="sm">
                                <Info className="w-4 h-4" />
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {/* Doctor Cards */}
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Doctors Records</h2>
                <Button className="flex gap-2">
                    <Plus className="w-4 h-4" />
                    Add New Doctor
                </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {doctors.map((doctor) => (
                    <Card key={doctor.id} className="overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                        <CardHeader className="flex flex-row items-center p-4">
                            <img src={doctor.photo} alt={doctor.name} className="w-12 h-12 rounded-full mr-4" />
                            <CardTitle className="text-lg">{doctor.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4">
                            <p className="text-sm text-gray-600">Phone: {doctor.phone}</p>
                            <p className="text-sm text-gray-600">Email: {doctor.email}</p>
                            <p className="text-sm text-gray-600">Role: {doctor.role}</p>
                            <p className="text-sm text-gray-600">Specialization: {doctor.specialization}</p>
                        </CardContent>
                        <CardFooter className="p-4 flex justify-end space-x-2">
                            <Button className="shadow-lg hover:shadow-xl transition transform hover:-translate-y-1" variant="outline" size="sm">
                                <Pencil className="w-4 h-4" />
                            </Button>
                            <Button className="shadow-lg hover:shadow-xl transition transform hover:-translate-y-1" variant="destructive" size="sm" onClick={() => handleDelete(doctor.id)}>
                                <Trash2 className="w-4 h-4" />
                            </Button>
                            <Button className="shadow-lg hover:shadow-xl transition transform hover:-translate-y-1" variant="outline" size="sm">
                                <Info className="w-4 h-4" />
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </main>
    );
}