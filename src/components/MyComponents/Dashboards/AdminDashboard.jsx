import React, { useState } from 'react';

const HomePageHeader = () => (
    <header className="bg-[#E6E6FA] text-gray-800 p-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Healthcare Admin Portal</h1>
            <nav className="flex gap-4">
                <a href="#" className="hover:text-teal-600 transition duration-200">Home</a>
                <a href="#" className="hover:text-teal-600 transition duration-200">Patients</a>
                <a href="#" className="hover:text-teal-600 transition duration-200">Doctors</a>
                <a href="#" className="hover:text-teal-600 transition duration-200">Appointments</a>
                <a href="#" className="hover:text-teal-600 transition duration-200">Logout</a>
            </nav>
        </div>
    </header>
);

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('patients');
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);
    const [modalMode, setModalMode] = useState('edit'); // 'edit' or 'delete'

    // Mock data based on Appointment component structure
    const [patients, setPatients] = useState([
        { id: 1, name: 'John Doe', dob: '1990-01-01', gender: 'Male', contact: '+91-1234567890', email: 'johndoe@gmail.com', address: '123 Main St, City' },
        { id: 2, name: 'Jane Smith', dob: '1985-05-15', gender: 'Female', contact: '+91-9876543210', email: 'jane@gmail.com', address: '456 Oak Ave, City' },
    ]);

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
        if (modalMode === 'edit') {
            // Simulate update (replace with API call)
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
            // Simulate delete (replace with API call)
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
                            <div key={patient.id} className="bg-white/80 p-4 rounded-lg shadow-md animate-slide-in">
                                <h3 className="text-lg font-semibold">{patient.name}</h3>
                                <p>DOB: {patient.dob}</p>
                                <p>Gender: {patient.gender}</p>
                                <p>Contact: {patient.contact}</p>
                                <p>Email: {patient.email}</p>
                                <p>Address: {patient.address}</p>
                                <div className="flex gap-2 mt-2">
                                    <button onClick={() => handleEdit(patient, 'patients')} className="gradient-btn text-white px-4 py-2 rounded-lg">Edit</button>
                                    <button onClick={() => handleDelete(patient, 'patients')} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'doctors':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredDoctors.map(doctor => (
                            <div key={doctor.id} className="bg-white/80 p-4 rounded-lg shadow-md animate-slide-in">
                                <h3 className="text-lg font-semibold">{doctor.name}</h3>
                                <p>Specialization: {doctor.specialization}</p>
                                <p>Contact: {doctor.contact}</p>
                                <div className="flex gap-2 mt-2">
                                    <button onClick={() => handleEdit(doctor, 'doctors')} className="gradient-btn text-white px-4 py-2 rounded-lg">Edit</button>
                                    <button onClick={() => handleDelete(doctor, 'doctors')} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'appointments':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredAppointments.map(appointment => (
                            <div key={appointment.id} className="bg-white/80 p-4 rounded-lg shadow-md animate-slide-in">
                                <h3 className="text-lg font-semibold">Appointment #{appointment.id}</h3>
                                <p>Patient: {patients.find(p => p.id === appointment.patientId)?.name}</p>
                                <p>Doctor: {doctors.find(d => d.id === appointment.doctorId)?.name}</p>
                                <p>Date: {appointment.dateTime}</p>
                                <p>Mode: {appointment.mode}</p>
                                <p>Reason: {appointment.reason}</p>
                                <div className="flex gap-2 mt-2">
                                    <button onClick={() => handleEdit(appointment, 'appointments')} className="gradient-btn text-white px-4 py-2 rounded-lg">Edit</button>
                                    <button onClick={() => handleDelete(appointment, 'appointments')} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'insurance':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredInsurance.map(ins => (
                            <div key={ins.id} className="bg-white/80 p-4 rounded-lg shadow-md animate-slide-in">
                                <h3 className="text-lg font-semibold">{ins.provider}</h3>
                                <p>Patient: {patients.find(p => p.id === ins.patientId)?.name}</p>
                                <p>Policy Number: {ins.policyNumber}</p>
                                <div className="flex gap-2 mt-2">
                                    <button onClick={() => handleEdit(ins, 'insurance')} className="gradient-btn text-white px-4 py-2 rounded-lg">Edit</button>
                                    <button onClick={() => handleDelete(ins, 'insurance')} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'medicalRecords':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredMedicalRecords.map(record => (
                            <div key={record.id} className="bg-white/80 p-4 rounded-lg shadow-md animate-slide-in">
                                <h3 className="text-lg font-semibold">Record #{record.id}</h3>
                                <p>Patient: {patients.find(p => p.id === record.patientId)?.name}</p>
                                <p>Conditions: {record.conditions}</p>
                                <p>Medications: {record.medications}</p>
                                <p>Allergies: {record.allergies}</p>
                                <div className="flex gap-2 mt-2">
                                    <button onClick={() => handleEdit(record, 'medicalRecords')} className="gradient-btn text-white px-4 py-2 rounded-lg">Edit</button>
                                    <button onClick={() => handleDelete(record, 'medicalRecords')} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Delete</button>
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
                <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full animate-slide-in">
                    {modalMode === 'edit' ? (
                        <>
                            <h2 className="text-2xl font-semibold mb-4">Edit {modalData.type}</h2>
                            <form onSubmit={handleModalSubmit} className="space-y-4">
                                {modalData.type === 'patients' && (
                                    <>
                                        <div>
                                            <label className="block text-lg text-gray-700">Name</label>
                                            <input
                                                type="text"
                                                value={modalData.name}
                                                onChange={e => setModalData({ ...modalData, name: e.target.value })}
                                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-lg text-gray-700">DOB</label>
                                            <input
                                                type="date"
                                                value={modalData.dob}
                                                onChange={e => setModalData({ ...modalData, dob: e.target.value })}
                                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-lg text-gray-700">Gender</label>
                                            <select
                                                value={modalData.gender}
                                                onChange={e => setModalData({ ...modalData, gender: e.target.value })}
                                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
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
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-lg text-gray-700">Email</label>
                                            <input
                                                type="email"
                                                value={modalData.email}
                                                onChange={e => setModalData({ ...modalData, email: e.target.value })}
                                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-lg text-gray-700">Address</label>
                                            <textarea
                                                value={modalData.address}
                                                onChange={e => setModalData({ ...modalData, address: e.target.value })}
                                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
                                                rows="3"
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
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-lg text-gray-700">Specialization</label>
                                            <select
                                                value={modalData.specialization}
                                                onChange={e => setModalData({ ...modalData, specialization: e.target.value })}
                                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
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
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-lg text-gray-700">Mode</label>
                                            <select
                                                value={modalData.mode}
                                                onChange={e => setModalData({ ...modalData, mode: e.target.value })}
                                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
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
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-lg text-gray-700">Policy Number</label>
                                            <input
                                                type="text"
                                                value={modalData.policyNumber}
                                                onChange={e => setModalData({ ...modalData, policyNumber: e.target.value })}
                                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
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
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-lg text-gray-700">Medications</label>
                                            <textarea
                                                value={modalData.medications}
                                                onChange={e => setModalData({ ...modalData, medications: e.target.value })}
                                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
                                                rows="3"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-lg text-gray-700">Allergies</label>
                                            <textarea
                                                value={modalData.allergies}
                                                onChange={e => setModalData({ ...modalData, allergies: e.target.value })}
                                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
                                                rows="3"
                                            />
                                        </div>
                                    </>
                                )}
                                <div className="flex gap-2 justify-end">
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                                    >
                                        Cancel
                                    </button>
                                    <button type="submit" className="px-4 py-2 gradient-btn text-white rounded-lg">Save</button>
                                </div>
                            </form>
                        </>
                    ) : (
                        <>
                            <h2 className="text-2xl font-semibold mb-4">Confirm Delete</h2>
                            <p>Are you sure you want to delete this {modalData.type.slice(0, -1)}?</p>
                            <div className="flex gap-2 justify-end mt-4">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    onClick={handleModalSubmit}
                                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
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
        <div className="min-h-screen bg-gradient-to-b from-teal-100 to-blue-100">
            <style>
                {`
          @keyframes slideIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slide-in {
            animation: slideIn 0.5s ease-out forwards;
          }
          .gradient-btn {
            background: linear-gradient(45deg, #10b981, #3b82f6);
            transition: all 0.3s ease;
          }
          .gradient-btn:hover {
            background: linear-gradient(45deg, #059669, #2563eb);
            transform: translateY(-2px);
          }
        `}
            </style>
            <div className="fixed top-0 left-0 w-full z-10">
                <HomePageHeader />
            </div>
            <div className="flex mt-20">
                <div className="w-64 bg-white/90 shadow-lg p-4">
                    <h2 className="text-xl font-bold mb-4">Admin Menu</h2>
                    <nav className="space-y-2">
                        <button
                            onClick={() => setActiveTab('patients')}
                            className={`w-full text-left p-2 rounded-lg ${activeTab === 'patients' ? 'bg-teal-500 text-white' : 'hover:bg-teal-100'}`}
                        >
                            Patients
                        </button>
                        <button
                            onClick={() => setActiveTab('doctors')}
                            className={`w-full text-left p-2 rounded-lg ${activeTab === 'doctors' ? 'bg-teal-500 text-white' : 'hover:bg-teal-100'}`}
                        >
                            Doctors
                        </button>
                        <button
                            onClick={() => setActiveTab('appointments')}
                            className={`w-full text-left p-2 rounded-lg ${activeTab === 'appointments' ? 'bg-teal-500 text-white' : 'hover:bg-teal-100'}`}
                        >
                            Appointments
                        </button>
                        <button
                            onClick={() => setActiveTab('insurance')}
                            className={`w-full text-left p-2 rounded-lg ${activeTab === 'insurance' ? 'bg-teal-500 text-white' : 'hover:bg-teal-100'}`}
                        >
                            Insurance
                        </button>
                        <button
                            onClick={() => setActiveTab('medicalRecords')}
                            className={`w-full text-left p-2 rounded-lg ${activeTab === 'medicalRecords' ? 'bg-teal-500 text-white' : 'hover:bg-teal-100'}`}
                        >
                            Medical Records
                        </button>
                    </nav>
                </div>
                <div className="flex-1 p-6">
                    <div className="mb-6">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            className="w-full max-w-md p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
                        />
                    </div>
                    <div className="bg-white/80 p-6 rounded-lg shadow-xl backdrop-blur-sm">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">Admin Dashboard</h1>
                        {renderList()}
                    </div>
                </div>
            </div>
            {renderModal()}
        </div>
    );
};

export default AdminDashboard; 