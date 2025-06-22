import axios from "axios";
import React, { useEffect, useState } from "react";
import HeaderPage from '../UI/HeaderPage';
import { useLocation } from 'react-router-dom';


const AdminDashboard = () => {
    const { state } = useLocation();
    const adminName = state?.adminName || localStorage.getItem('adminName') || 'Admin';// Fallback to localStorage or 'Admin'
    const [activeTab, setActiveTab] = useState('patients');
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);
    const [modalMode, setModalMode] = useState('edit'); // 'edit', 'delete', or 'add'
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


    const [patients, setPatients] = useState([]);
    // Fetch patients from API
    const fetchPatients = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/auth/all`);
            setPatients(response.data);
            console.log("Fetched patients:", response.data); // Debug log
        } catch (error) {
            console.error("Error fetching patients:", error);
        }
    };
    // Fetch patients when component mounts or activeTab changes to 'patients'
    useEffect(() => {
        if (activeTab === 'patients') {
            fetchPatients();
        }
    }, [activeTab]);
    const [doctors, setDoctors] = useState([
        { id: 1, name: 'Dr. Smith', specialization: 'Cardiology', contact: '+91-1112223333' },
        { id: 2, name: 'Dr. Brown', specialization: 'Dermatology', contact: '+91-4445556666' },
    ]);

    const [appointments, setAppointments] = useState([
        { id: 1, patientId: 1, doctorId: 1, dateTime: '2025-06-01T10:00', mode: 'In-person', reason: 'Regular checkup' },
        { id: 2, patientId: 2, doctorId: 2, dateTime: '2025-06-02T14:00', mode: 'Online', reason: 'Skin issue' },
    ]);

    const [insurance, setInsurance] = useState([
        { id: 1, patientId: 1, provider: 'Max Bupa', policyNumber: 'MB123456' },
        { id: 2, patientId: 2, provider: 'Star Health', policyNumber: 'SH789012' },
    ]);

    const [medicalRecords, setMedicalRecords] = useState([
        { id: 1, patientId: 1, conditions: 'Diabetes', medications: 'Metformin', allergies: 'None' },
        { id: 2, patientId: 2, conditions: 'Hypertension', medications: 'Lisinopril', allergies: 'Penicillin' },
    ]);

    const handleAdd = (type) => {
        let newData;
        switch (type) {
            case 'patients':
                newData = { id: patients.length + 1, name: '', dob: '', gender: '', contact: '', email: '', address: '', type };
                break;
            case 'doctors':
                newData = { id: doctors.length + 1, name: '', specialization: '', contact: '', type };
                break;
            case 'appointments':
                newData = { id: appointments.length + 1, patientId: '', doctorId: '', dateTime: '', mode: '', reason: '', type };
                break;
            case 'insurance':
                newData = { id: insurance.length + 1, patientId: '', provider: '', policyNumber: '', type };
                break;
            case 'medicalRecords':
                newData = { id: medicalRecords.length + 1, patientId: '', conditions: '', medications: '', allergies: '', type };
                break;
            default:
                return;
        }
        setModalData(newData);
        setModalMode('add');
        setIsModalOpen(true);
    };

    const handleEdit = (item, type) => {
        setModalData({ ...item, type });
        setModalMode('edit');
        setIsModalOpen(true);
    };

    const handleDelete = (item, type) => {
        setModalData({ ...item, type });
        setModalMode('delete');
        setIsModalOpen(true);
    };

    const handleModalSubmit = (e) => {
        e.preventDefault();
        if (modalMode === 'add') {
            if (modalData.type === 'patients') {
                setPatients([...patients, modalData]);
            } else if (modalData.type === 'doctors') {
                setDoctors([...doctors, modalData]);
            } else if (modalData.type === 'appointments') {
                setAppointments([...appointments, modalData]);
            } else if (modalData.type === 'insurance') {
                setInsurance([...insurance, modalData]);
            } else if (modalData.type === 'medicalRecords') {
                setMedicalRecords([...medicalRecords, modalData]);
            }
        } else if (modalMode === 'edit') {
            if (modalData.type === 'patients') {
                setPatients(patients.map(p => p.id === modalData.id ? modalData : p));
            } else if (modalData.type === 'doctors') {
                setDoctors(doctors.map(d => d.id === modalData.id ? modalData : d));
            } else if (modalData.type === 'appointments') {
                setAppointments(appointments.map(a => a.id === modalData.id ? modalData : a));
            } else if (modalData.type === 'insurance') {
                setInsurance(insurance.map(i => i.id === modalData.id ? modalData : i));
            } else if (modalData.type === 'medicalRecords') {
                setMedicalRecords(medicalRecords.map(m => m.id === modalData.id ? modalData : m));
            }
        } else if (modalMode === 'delete') {
            if (modalData.type === 'patients') {
                setPatients(patients.filter(p => p.id !== modalData.id));
            } else if (modalData.type === 'doctors') {
                setDoctors(doctors.filter(d => d.id !== modalData.id));
            } else if (modalData.type === 'appointments') {
                setAppointments(appointments.filter(a => a.id !== modalData.id));
            } else if (modalData.type === 'insurance') {
                setInsurance(insurance.filter(i => i.id !== modalData.id));
            } else if (modalData.type === 'medicalRecords') {
                setMedicalRecords(medicalRecords.filter(m => m.id !== modalData.id));
            }
        }
        setIsModalOpen(false);
        setModalData(null);
    };

    const renderList = () => {
        const filteredPatients = patients.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
        const filteredDoctors = doctors.filter(d => d.name.toLowerCase().includes(searchTerm.toLowerCase()));
        const filteredAppointments = appointments.filter(a => {
            const patient = patients.find(p => p.id === a.patientId);
            const doctor = doctors.find(d => d.id === a.doctorId);
            return (patient?.name.toLowerCase() + doctor?.name.toLowerCase()).includes(searchTerm.toLowerCase());
        });
        const filteredInsurance = insurance.filter(i => i.provider.toLowerCase().includes(searchTerm.toLowerCase()));
        const filteredMedicalRecords = medicalRecords.filter(m => m.conditions.toLowerCase().includes(searchTerm.toLowerCase()));

        switch (activeTab) {
            case 'patients':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredPatients.map(patient => (
                            <div key={patient.id} className="bg-white/80 p-4 rounded-lg shadow-md transform transition-all duration-500 ease-out hover:scale-105">
                                <h3 className="text-lg font-semibold text-gray-800">{patient.name}</h3>
                                <p className="text-gray-600">DOB: {patient.dob}</p>
                                <p className="text-gray-600">Gender: {patient.gender}</p>
                                <p className="text-gray-600">Contact: {patient.contact}</p>
                                <p className="text-gray-600">Email: {patient.email}</p>
                                <p className="text-gray-600">Address: {patient.address}</p>
                                <div className="flex gap-2 mt-2">
                                    <button onClick={() => handleEdit(patient, 'patients')} className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all duration-300">Edit</button>
                                    <button onClick={() => handleDelete(patient, 'patients')} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'doctors':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredDoctors.map(doctor => (
                            <div key={doctor.id} className="bg-white/80 p-4 rounded-lg shadow-md transform transition-all duration-500 ease-out hover:scale-105">
                                <h3 className="text-lg font-semibold text-gray-800">{doctor.name}</h3>
                                <p className="text-gray-600">Specialization: {doctor.specialization}</p>
                                <p className="text-gray-600">Contact: {doctor.contact}</p>
                                <div className="flex gap-2 mt-2">
                                    <button onClick={() => handleEdit(doctor, 'doctors')} className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all duration-300">Edit</button>
                                    <button onClick={() => handleDelete(doctor, 'doctors')} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'appointments':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredAppointments.map(appointment => (
                            <div key={appointment.id} className="bg-white/80 p-4 rounded-lg shadow-md transform transition-all duration-500 ease-out hover:scale-105">
                                <h3 className="text-lg font-semibold text-gray-800">Appointment #{appointment.id}</h3>
                                <p className="text-gray-600">Patient: {patients.find(p => p.id === appointment.patientId)?.name}</p>
                                <p className="text-gray-600">Doctor: {doctors.find(d => d.id === appointment.doctorId)?.name}</p>
                                <p className="text-gray-600">Date: {appointment.dateTime}</p>
                                <p className="text-gray-600">Mode: {appointment.mode}</p>
                                <p className="text-gray-600">Reason: {appointment.reason}</p>
                                <div className="flex gap-2 mt-2">
                                    <button onClick={() => handleEdit(appointment, 'appointments')} className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all duration-300">Edit</button>
                                    <button onClick={() => handleDelete(appointment, 'appointments')} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'insurance':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredInsurance.map(ins => (
                            <div key={ins.id} className="bg-white/80 p-4 rounded-lg shadow-md transform transition-all duration-500 ease-out hover:scale-105">
                                <h3 className="text-lg font-semibold text-gray-800">{ins.provider}</h3>
                                <p className="text-gray-600">Patient: {patients.find(p => p.id === ins.patientId)?.name}</p>
                                <p className="text-gray-600">Policy Number: {ins.policyNumber}</p>
                                <div className="flex gap-2 mt-2">
                                    <button onClick={() => handleEdit(ins, 'insurance')} className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all duration-300">Edit</button>
                                    <button onClick={() => handleDelete(ins, 'insurance')} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'medicalRecords':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredMedicalRecords.map(record => (
                            <div key={record.id} className="bg-white/80 p-4 rounded-lg shadow-md transform transition-all duration-500 ease-out hover:scale-105">
                                <h3 className="text-lg font-semibold text-gray-800">Record #{record.id}</h3>
                                <p className="text-gray-600">Patient: {patients.find(p => p.id === record.patientId)?.name}</p>
                                <p className="text-gray-600">Conditions: {record.conditions}</p>
                                <p className="text-gray-600">Medications: {record.medications}</p>
                                <p className="text-gray-600">Allergies: {record.allergies}</p>
                                <div className="flex gap-2 mt-2">
                                    <button onClick={() => handleEdit(record, 'medicalRecords')} className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all duration-300">Edit</button>
                                    <button onClick={() => handleDelete(record, 'medicalRecords')} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    const renderModal = () => {
        if (!isModalOpen || !modalData) return null;

        return (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full transform transition-all duration-500 ease-out scale-100">
                    {modalMode === 'edit' || modalMode === 'add' ? (
                        <>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                {modalMode === 'add' ? `Add New ${modalData.type}` : `Edit ${modalData.type}`}
                            </h2>
                            <form onSubmit={handleModalSubmit} className="space-y-4">
                                {modalData.type === 'patients' && (
                                    <>
                                        <div className='flex justify-between'>
                                            <div>
                                                <label className="block text-lg text-gray-700">Name</label>
                                                <input
                                                    type="text"
                                                    value={modalData.name}
                                                    onChange={e => setModalData({ ...modalData, name: e.target.value })}
                                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-lg text-gray-700">DOB</label>
                                                <input
                                                    type="date"
                                                    value={modalData.dob}
                                                    onChange={e => setModalData({ ...modalData, dob: e.target.value })}
                                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div>
                                                <label className="block text-lg text-gray-700">Gender</label>
                                                <select
                                                    value={modalData.gender}
                                                    onChange={e => setModalData({ ...modalData, gender: e.target.value })}
                                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
                                                    required
                                                >
                                                    <option value="">Select Gender</option>
                                                    <option>Male</option>
                                                    <option>Female</option>
                                                    <option>Other</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-lg text-gray-700">Contact</label>
                                                <input
                                                    type="text"
                                                    value={modalData.contact}
                                                    onChange={e => setModalData({ ...modalData, contact: e.target.value })}
                                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-lg text-gray-700">Email</label>
                                            <input
                                                type="email"
                                                value={modalData.email}
                                                onChange={e => setModalData({ ...modalData, email: e.target.value })}
                                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-lg text-gray-700">Address</label>
                                            <textarea
                                                value={modalData.address}
                                                onChange={e => setModalData({ ...modalData, address: e.target.value })}
                                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
                                                rows="3"
                                                required
                                            />
                                        </div>
                                    </>
                                )}
                                {modalData.type === 'doctors' && (
                                    <>
                                        <div>
                                            <label className="block text-lg text-gray-700">Name</label>
                                            <input
                                                type="text"
                                                value={modalData.name}
                                                onChange={e => setModalData({ ...modalData, name: e.target.value })}
                                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-lg text-gray-700">Specialization</label>
                                            <select
                                                value={modalData.specialization}
                                                onChange={e => setModalData({ ...modalData, specialization: e.target.value })}
                                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
                                                required
                                            >
                                                <option value="">Select Specialization</option>
                                                <option>Cardiology</option>
                                                <option>Dermatology</option>
                                                <option>Orthopedics</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-lg text-gray-700">Contact</label>
                                            <input
                                                type="text"
                                                value={modalData.contact}
                                                onChange={e => setModalData({ ...modalData, contact: e.target.value })}
                                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
                                                required
                                            />
                                        </div>
                                    </>
                                )}
                                {modalData.type === 'appointments' && (
                                    <>
                                        <div>
                                            <label className="block text-lg text-gray-700">Patient</label>
                                            <select
                                                value={modalData.patientId}
                                                onChange={e => setModalData({ ...modalData, patientId: Number(e.target.value) })}
                                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
                                                required
                                            >
                                                <option value="">Select Patient</option>
                                                {patients.map(p => (
                                                    <option key={p.id} value={p.id}>{p.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-lg text-gray-700">Doctor</label>
                                            <select
                                                value={modalData.doctorId}
                                                onChange={e => setModalData({ ...modalData, doctorId: Number(e.target.value) })}
                                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
                                                required
                                            >
                                                <option value="">Select Doctor</option>
                                                {doctors.map(d => (
                                                    <option key={d.id} value={d.id}>{d.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-lg text-gray-700">Date and Time</label>
                                            <input
                                                type="datetime-local"
                                                value={modalData.dateTime}
                                                onChange={e => setModalData({ ...modalData, dateTime: e.target.value })}
                                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-lg text-gray-700">Mode</label>
                                            <select
                                                value={modalData.mode}
                                                onChange={e => setModalData({ ...modalData, mode: e.target.value })}
                                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
                                                required
                                            >
                                                <option value="">Select Mode</option>
                                                <option>In-person</option>
                                                <option>Online</option>
                                                <option>Phone</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-lg text-gray-700">Reason</label>
                                            <textarea
                                                value={modalData.reason}
                                                onChange={e => setModalData({ ...modalData, reason: e.target.value })}
                                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
                                                rows="3"
                                                required
                                            />
                                        </div>
                                    </>
                                )}
                                {modalData.type === 'insurance' && (
                                    <>
                                        <div>
                                            <label className="block text-lg text-gray-700">Patient</label>
                                            <select
                                                value={modalData.patientId}
                                                onChange={e => setModalData({ ...modalData, patientId: Number(e.target.value) })}
                                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
                                                required
                                            >
                                                <option value="">Select Patient</option>
                                                {patients.map(p => (
                                                    <option key={p.id} value={p.id}>{p.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-lg text-gray-700">Provider</label>
                                            <input
                                                type="text"
                                                value={modalData.provider}
                                                onChange={e => setModalData({ ...modalData, provider: e.target.value })}
                                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-lg text-gray-700">Policy Number</label>
                                            <input
                                                type="text"
                                                value={modalData.policyNumber}
                                                onChange={e => setModalData({ ...modalData, policyNumber: e.target.value })}
                                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
                                                required
                                            />
                                        </div>
                                    </>
                                )}
                                {modalData.type === 'medicalRecords' && (
                                    <>
                                        <div>
                                            <label className="block text-lg text-gray-700">Patient</label>
                                            <select
                                                value={modalData.patientId}
                                                onChange={e => setModalData({ ...modalData, patientId: Number(e.target.value) })}
                                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
                                                required
                                            >
                                                <option value="">Select Patient</option>
                                                {patients.map(p => (
                                                    <option key={p.id} value={p.id}>{p.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-lg text-gray-700">Conditions</label>
                                            <textarea
                                                value={modalData.conditions}
                                                onChange={e => setModalData({ ...modalData, conditions: e.target.value })}
                                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
                                                rows="3"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-lg text-gray-700">Medications</label>
                                            <textarea
                                                value={modalData.medications}
                                                onChange={e => setModalData({ ...modalData, medications: e.target.value })}
                                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
                                                rows="3"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-lg text-gray-700">Allergies</label>
                                            <textarea
                                                value={modalData.allergies}
                                                onChange={e => setModalData({ ...modalData, allergies: e.target.value })}
                                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
                                                rows="3"
                                                required
                                            />
                                        </div>
                                    </>
                                )}
                                <div className="flex gap-2 justify-end">
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all duration-300"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all duration-300"
                                    >
                                        {modalMode === 'add' ? 'Add' : 'Save'}
                                    </button>
                                </div>
                            </form>
                        </>
                    ) : (
                        <>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Confirm Delete</h2>
                            <p className="text-gray-600">Are you sure you want to delete this {modalData.type.slice(0, -1)}?</p>
                            <div className="flex gap-2 justify-end mt-4">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all duration-300"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    onClick={handleModalSubmit}
                                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300"
                                >
                                    Delete
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-[#E6E6FA]">
            <div className="fixed top-0 left-0 w-full z-10">
                <HeaderPage ButtonText="Log out" onToggleSidebar={setIsSidebarOpen} />
            </div>
            <div className="flex pt-20">
                {/* Sidebar */}
                <div
                    className={`fixed md:static top-20 left-0 w-64 bg-[#E6E6FA] shadow-lg p-4 transform transition-transform duration-300 ease-in-out z-20 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
                        } md:w-64 h-[calc(100vh-5rem)] md:h-auto overflow-y-auto`}
                >
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Admin Menu</h2>
                    <nav className="space-y-2">
                        <button
                            onClick={() => {
                                setActiveTab('patients');
                                setIsSidebarOpen(false); // Close sidebar on mobile
                            }}
                            className={`w-full text-left p-2 rounded-lg ${activeTab === 'patients' ? 'bg-teal-500 text-white' : 'text-gray-700 hover:bg-teal-100'
                                } transition-all duration-300`}
                        >
                            Patients
                        </button>
                        <button
                            onClick={() => {
                                setActiveTab('doctors');
                                setIsSidebarOpen(false);
                            }}
                            className={`w-full text-left p-2 rounded-lg ${activeTab === 'doctors' ? 'bg-teal-500 text-white' : 'text-gray-700 hover:bg-teal-100'
                                } transition-all duration-300`}
                        >
                            Doctors
                        </button>
                        <button
                            onClick={() => {
                                setActiveTab('appointments');
                                setIsSidebarOpen(false);
                            }}
                            className={`w-full text-left p-2 rounded-lg ${activeTab === 'appointments' ? 'bg-teal-500 text-white' : 'text-gray-700 hover:bg-teal-100'
                                } transition-all duration-300`}
                        >
                            Appointments
                        </button>
                        <button
                            onClick={() => {
                                setActiveTab('insurance');
                                setIsSidebarOpen(false);
                            }}
                            className={`w-full text-left p-2 rounded-lg ${activeTab === 'insurance' ? 'bg-teal-500 text-white' : 'text-gray-700 hover:bg-teal-100'
                                } transition-all duration-300`}
                        >
                            Insurance
                        </button>
                        <button
                            onClick={() => {
                                setActiveTab('medicalRecords');
                                setIsSidebarOpen(false);
                            }}
                            className={`w-full text-left p-2 rounded-lg ${activeTab === 'medicalRecords' ? 'bg-teal-500 text-white' : 'text-gray-700 hover:bg-teal-100'
                                } transition-all duration-300`}
                        >
                            Medical Records
                        </button>
                    </nav>
                </div>
                {/* Main Content */}
                <div className="flex-1">
                    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 w-[80%]">
                        <div className="mb-6 flex items-center gap-4 pt-4">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                                className="w-full max-w-md p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                            />
                            <button
                                onClick={() => handleAdd(activeTab)}
                                className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all duration-300"
                            >
                                Add New
                            </button>
                        </div>
                        <div className="bg-white/80 p-6 rounded-lg shadow-xl backdrop-blur-sm">
                            <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome, {adminName}</h1>
                            {renderList()}
                        </div>
                    </div>
                </div>
            </div>
            {renderModal()}
        </div>
    );
};

export default AdminDashboard;