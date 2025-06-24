// src/components/AdminHeroSection.jsx
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Pencil, Trash2, Plus, Info, Phone, Mail, Stethoscope } from "lucide-react";
import CardHeaderWithRandomAvatar from "../DashboardUtilities/CardHeaderWithRandomAvatar";
import { toast } from "sonner"
import axios from "axios";
import DoctorFormDialog from "../DashboardUtilities/DoctorFormDialog";
import PatientFormDialog from "../DashboardUtilities/PatientFormDialog";
import { useNavigate } from "react-router-dom";
export default function AdminHeroSection({ adminName, doctors, patients, searchTerm, searchBy, onDelete }) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editingDoctor, setEditingDoctor] = useState(null);
    const [patientDialogOpen, setPatientDialogOpen] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState(null); // for editing
    const [isAddingPatient, setIsAddingPatient] = useState(false);
    const navigate = useNavigate();
    // Filter doctors based on searchTerm and searchBy
    const filteredDoctors = doctors.filter((doctor) => {
        if (searchBy === "specialization") {
            return doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
        } else if (searchBy === "name") {
            return `${doctor.firstName} ${doctor.lastName}`.toLowerCase().includes(searchTerm.toLowerCase());
        } else if (searchBy === "phone") {
            return doctor.phoneNumber.toLowerCase().includes(searchTerm.toLowerCase());
        }
        return true;
    });
    const fetchPatientsAgain = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/patient/all`);
            setSelectedPatient(response.data);
        } catch (error) {
            console.error("Failed to fetch updated patients:", error);
        }
    };

    const deleteDoctor = async (id) => {
        try {
            const response = await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/doctor/${id}`);
            console.log(response)
            return { success: true, message: response.data };
        } catch (error) {
            return { success: false, message: error.response?.data || "Failed to delete doctor" };
        }
    };

    const handleDelete = async (id) => {
        console.log(id);
        const result = await deleteDoctor(id);
        if (result.success) {
            if (onDelete) onDelete();
            toast.success(`Doctor with ID ${id} deleted successfully`);
        } else {
            toast.error(result.message || "Failed to delete doctor");
        }
    };



    // Filter patients based on searchTerm and searchBy
    const filteredPatients = patients.filter((patient) => {
        if (searchBy === "name") {
            return patient.name.toLowerCase().includes(searchTerm.toLowerCase());
        } else if (searchBy === "email") {
            return patient.email.toLowerCase().includes(searchTerm.toLowerCase());
        } else if (searchBy === "phone") {
            return patient.phone.toLowerCase().includes(searchTerm.toLowerCase());
        }
        return true;
    });

    // Delete Patient from API
    const deletePatient = async (id) => {
        try {
            const response = await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/patient/${id}`);
            console.log(response);
            return { success: true, message: response.data };
        } catch (error) {
            return {
                success: false,
                message: error.response?.data || "Failed to delete patient"
            };
        }
    };

    // Handle Patient Deletion
    const handlePatientDelete = async (id) => {
        console.log(id);
        const result = await deletePatient(id);
        if (result.success) {
            if (onDelete) onDelete(); // callback to refetch or update UI
            toast.success(`Patient with ID ${id} deleted successfully`);
        } else {
            toast.error(result.message || "Failed to delete patient");
        }
    };




    return (
        <main className="p-6 space-y-8">
            <div className="text-neutral-700 text-3xl">
                Welcome <span className="text-green-600 font-bold">{adminName}</span>
            </div>
            {/* Hero Cards */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                    <CardHeader>
                        <CardTitle>Total Doctors</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{doctors.length}</p>
                    </CardContent>
                </Card>
                <Card className="shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                    <CardHeader>
                        <CardTitle>Total Patients</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{patients.length}</p>
                    </CardContent>
                </Card>
                <Card className="shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                    <CardHeader>
                        <CardTitle>Appointments Today</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold text-green-600 dark:text-green-400">3</p>
                    </CardContent>
                </Card>
            </section>

            {/* Doctor Cards */}
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Doctors Records</h2>
                <Button className="flex gap-2" onClick={() => navigate("/signup")}>
                    <Plus className="w-4 h-4" />
                    Add New Doctor
                </Button>
            </div>
            <div className="p-2 border-b border-2 border-black rounded-xl ">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 p-6 max-h-[700px] overflow-y-auto">
                    {filteredDoctors.map((doctor) => (
                        <Card key={doctor.id} className="min-w-80 overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                            <CardHeader className="flex flex-row items-center p-2">
                                <img
                                    src={doctor.photo || "https://via.placeholder.com/50"}
                                    alt={`${doctor.firstName} ${doctor.lastName}`}
                                    className="w-10 h-10 rounded-full mr-4"
                                />
                                <CardTitle className="text-lg">{`${doctor.firstName} ${doctor.lastName}`}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-2">
                                <div className="space-y-3 p-4 bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-inner">
                                    <p className="text-sm text-gray-600 flex items-center gap-2">
                                        <Phone className="w-5 h-5 text-blue-500" />
                                        <strong className="font-bold text-gray-800">Phone:</strong>
                                        <span className="ml-1 text-blue-600 hover:text-blue-800 transition-colors duration-200 cursor-pointer"
                                            onClick={() => window.location.href = `tel:${doctor.phoneNumber}`}>
                                            {doctor.phoneNumber}
                                        </span>
                                    </p>
                                    <p className="text-sm text-gray-600 flex items-center gap-2">
                                        <Mail className="w-5 h-5 text-green-500" />
                                        <strong className="font-bold text-gray-800">Email:</strong>
                                        <span className="ml-1 text-green-600 hover:text-green-800 transition-colors duration-200 cursor-pointer"
                                            onClick={() => window.location.href = `mailto:${doctor.email}`}>
                                            {doctor.email}
                                        </span>
                                    </p>
                                    <p className="text-sm text-gray-600 flex items-center gap-2">
                                        <Stethoscope className="w-5 h-5 text-purple-500" />
                                        <strong className="font-bold text-gray-800">Specialization:</strong>
                                        <span className="ml-1 text-purple-600 font-medium italic">
                                            {doctor.specialty}
                                        </span>
                                    </p>
                                </div>
                            </CardContent>
                            <CardFooter className="p-2 flex justify-between space-x-2 flex-col lg:flex-row">
                                <div className="flex gap-2">
                                    <DoctorFormDialog
                                        mode="edit"
                                        open={isDialogOpen}
                                        setOpen={setIsDialogOpen}
                                        doctor={doctor}
                                        onSubmit={() => onDelete()}
                                        trigger={
                                            <Button onClick={() => {
                                                setEditingDoctor(doctor);
                                                setIsDialogOpen(true);
                                            }} className="shadow-lg hover:shadow-xl transition transform hover:-translate-y-1" variant="outline" size="sm">
                                                <Pencil className="w-4 h-4" />
                                            </Button>
                                        }
                                    />
                                    <Button onClick={() => handleDelete(doctor.id)} className="shadow-lg hover:shadow-xl transition transform hover:-translate-y-1" variant="destructive" size="sm" >
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                    <Button className="shadow-lg hover:shadow-xl transition transform hover:-translate-y-1" variant="outline" size="sm">
                                        <Info className="w-4 h-4" />
                                    </Button>
                                </div>
                                <div className="p-2">
                                    <Button className="w-full" onClick={() => window.location.href = `mailto:${doctor.email}`}>
                                        Contact Doctor
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Patient Cards */}
            <div className="flex items-center justify-between mt-20">
                <h2 className="text-3xl font-semibold">Patient Records</h2>
                {/* Creative Header with Dynamic Date and Time */}
                <div className="relative text-center bg-gradient-to-r from-indigo-100 to-purple-100 p-4 rounded-lg shadow-lg animate-pulse-slow">
                    <h3 className="text-lg font-semibold text-gray-800">
                        Today: <span className="text-purple-600">{new Date().toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'Asia/Kolkata' })}</span>
                    </h3>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-purple-400 rounded-full"></div>
                </div>
                <Button className="flex gap-2" onClick={() => navigate("/signup")} >
                    <Plus className="w-4 h-4" />
                    Add New Patient
                </Button>
            </div>
            <div className="p-2 border-b border-2 border-black rounded-xl ">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 p-6 max-h-[700px] overflow-y-auto">
                    {patients.map((patient) => (
                        <Card key={patient.id} className="min-w-80 overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">

                            <CardHeaderWithRandomAvatar patient={patient} />
                            <CardContent className="p-2">
                                <div className="space-y-4">
                                    {/* Patient Details with Creative Styling */}
                                    <div className="space-y-3 bg-white p-4 rounded-xl shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300">
                                        <p className="text-sm text-gray-600 flex items-center transform hover:scale-105 transition-transform duration-200">
                                            <strong className="font-bold text-indigo-700 mr-3 bg-indigo-100 px-2 py-1 rounded-full">Phone:</strong>
                                            <span className="text-gray-800">{patient.phone}</span>
                                        </p>
                                        <p className="text-sm text-gray-600 flex items-center transform hover:scale-105 transition-transform duration-200">
                                            <strong className="font-bold text-indigo-700 mr-3 bg-indigo-100 px-2 py-1 rounded-full">Email:</strong>
                                            <span className="text-gray-800">{patient.email}</span>
                                        </p>
                                        <p className="text-sm text-gray-600 flex items-center transform hover:scale-105 transition-transform duration-200">
                                            <strong className="font-bold text-indigo-700 mr-3 bg-indigo-100 px-2 py-1 rounded-full">DOB:</strong>
                                            <span className="text-gray-800">{patient.dob}</span>
                                        </p>
                                        <p className="text-sm text-gray-600 flex items-center transform hover:scale-105 transition-transform duration-200">
                                            <strong className="font-bold text-indigo-700 mr-3 bg-indigo-100 px-2 py-1 rounded-full">Gender:</strong>
                                            <span className="text-gray-800">{patient.gender}</span>
                                        </p>
                                        <p className="text-sm text-gray-600 flex items-center transform hover:scale-105 transition-transform duration-200">
                                            <strong className="font-bold text-indigo-700 mr-3 bg-indigo-100 px-2 py-1 rounded-full">Address:</strong>
                                            <span className="text-gray-800">{patient.address}</span>
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="p-2 flex justify-between space-x-2 flex-col lg:flex-row">
                                <div className="flex gap-2">
                                    <PatientFormDialog
                                        open={patientDialogOpen}
                                        setOpen={setPatientDialogOpen}
                                        mode="edit"
                                        patient={selectedPatient}
                                        onSubmit={() => onDelete()}
                                        trigger={
                                            <Button
                                                onClick={() => {
                                                    setSelectedPatient(patient); // ✅ SET PATIENT CORRECTLY
                                                    setPatientDialogOpen(true); // ✅ OPEN DIALOG
                                                }}
                                                className="shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
                                            >
                                                <Pencil className="w-4 h-4" />
                                            </Button>
                                        }
                                    />

                                    <Button onClick={() => handlePatientDelete(patient.id)} className="shadow-lg hover:shadow-xl transition transform hover:-translate-y-1" variant="destructive" size="sm">
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                    <Button className="shadow-lg hover:shadow-xl transition transform hover:-translate-y-1" variant="outline" size="sm">
                                        <Info className="w-4 h-4" />
                                    </Button>
                                </div>
                                <div className="p-2">
                                    <Button className="w-full" onClick={() => window.location.href = `mailto:${patient.email}`}>
                                        Contact Patient
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </main>
    )
};
