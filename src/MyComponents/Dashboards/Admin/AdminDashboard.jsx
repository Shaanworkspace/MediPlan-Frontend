import AdminHeader from "./AdminHeader";
import AdminHeroSection from "./AdminHeroSection";
import React, { useEffect, useState } from "react";
import axios from "axios";
const AdminDashboard = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchBy, setSearchBy] = useState("specialization");
    const [doctors, setDoctors] = useState([]);
    const [patients, setPatients] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const adminName = localStorage.getItem('adminName') || 'Admin';
    
    // Fetch doctors from API
    const fetchDoctor = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/doctor/all`);
            setDoctors(response.data);
        } catch (error) {
            console.error("Error fetching doctors, using DemoDoctors:", error);
            const DemoDoctors = [
                { id: 1, firstName: "A.K.", lastName: "Sharma", phoneNumber: "9871112222", email: "ak.sharma@hospital.com", specialty: "Cardiology", photo: "https://via.placeholder.com/50" },
                { id: 2, firstName: "Meena", lastName: "Rao", phoneNumber: "9866543210", email: "meena.rao@hospital.com", specialty: "Neurology", photo: "https://via.placeholder.com/50" },
                { id: 3, firstName: "Rohit", lastName: "Bansal", phoneNumber: "9855554444", email: "rohit.b@hospital.com", specialty: "Orthopedics", photo: "https://via.placeholder.com/50" },
                { id: 4, firstName: "Priya", lastName: "Mehta", phoneNumber: "9844445555", email: "priya.mehta@hospital.com", specialty: "Pediatrics", photo: "https://via.placeholder.com/50" },
                { id: 5, firstName: "Sanjay", lastName: "Patel", phoneNumber: "9833336666", email: "sanjay.patel@hospital.com", specialty: "Dermatology", photo: "https://via.placeholder.com/50" },
            ];
            setDoctors(DemoDoctors);
        }
    };
    const fetchPatients = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/patient/all`);
            setPatients(response.data);
        } catch (error) {
            console.error("Error fetching patients, using DemoPatients:", error);
            const DemoPatients = [
                { id: 1, name: "Ravi Kumar", phone: "9876543210", email: "ravi.k@example.com", role: "Patient", photo: "https://via.placeholder.com/50" },
                { id: 2, name: "Sita Verma", phone: "9812345670", email: "sita.verma@example.com", role: "Patient", photo: "https://via.placeholder.com/50" },
                { id: 3, name: "Anuj Singh", phone: "9845012345", email: "anuj.singh@example.com", role: "Patient", photo: "https://via.placeholder.com/50" },
                { id: 4, name: "Pooja Mehta", phone: "9823456789", email: "pooja.mehta@example.com", role: "Patient", photo: "https://via.placeholder.com/50" },
                { id: 5, name: "Rahul Dev", phone: "9898989898", email: "rahul.dev@example.com", role: "Patient", photo: "https://via.placeholder.com/50" },
            ];
            setPatients(DemoPatients);
        }
    };

    // Fetch doctors on mount and when refresh changes
    useEffect(() => {
        fetchDoctor();
        fetchPatients();
    }, [refresh]);


    return (
        <div className='bg-[#E6E6FA]'>
            <AdminHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchBy={searchBy} setSearchBy={setSearchBy} />
            <AdminHeroSection
                adminName={adminName}
                doctors={doctors}
                patients={patients}
                searchTerm={searchTerm}
                searchBy={searchBy}
                onDelete={() => setRefresh(prev => !prev)}
            />
        </div>
    );
};

export default AdminDashboard;
