import React, { useState } from 'react';
import { FiUpload, FiFileText, FiCalendar, FiUser, FiArrowLeft, FiTrash2, FiPaperclip, FiDownload } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import HeaderPage from '../UI/HeaderPage';

const UploadDocuments = () => {
    const [files, setFiles] = useState([]);
    const [dragActive, setDragActive] = useState(false);

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const newFiles = Array.from(e.dataTransfer.files).map((file, index) => ({
                id: files.length + index + 1,
                name: file.name,
                size: (file.size / 1024).toFixed(2) + ' KB',
                date: new Date().toISOString().split('T')[0],
            }));
            setFiles([...files, ...newFiles]);
        }
    };

    const handleFileInput = (e) => {
        const newFiles = Array.from(e.target.files).map((file, index) => ({
            id: files.length + index + 1,
            name: file.name,
            size: (file.size / 1024).toFixed(2) + ' KB',
            date: new Date().toISOString().split('T')[0],
        }));
        setFiles([...files, ...newFiles]);
    };

    const handleDelete = (id) => {
        setFiles(files.filter((file) => file.id !== id));
    };

    const uploadedDocuments = [
        { id: 1, name: 'Blood Test Report.pdf', size: '512 KB', date: '2025-04-20' },
        { id: 2, name: 'X-Ray Scan.jpg', size: '1.2 MB', date: '2025-04-15' },
    ];

    return (
        <div className="min-h-screen bg-[#E6E6FA] flex flex-col">
            {/* Header */}
            <HeaderPage />

            {/* Main Content */}
            <main className="flex flex-col lg:flex-row flex-grow">
                {/* Sidebar */}
                <aside className="lg:w-1/4 w-full bg-white p-6 shadow-lg space-y-6">
                    <div>
                        <h2 className="text-lg font-semibold text-blue-600 mb-4 flex items-center">
                            <FiFileText className="mr-2" /> Quick Actions
                        </h2>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/book-appointment" className="w-full flex items-center px-4 py-3 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition">
                                    <FiCalendar className="mr-2" /> Book Appointment
                                </Link>
                            </li>
                            <li>
                                <Link to="/view-prescriptions" className="w-full flex items-center px-4 py-3 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition">
                                    <FiFileText className="mr-2" /> View Prescriptions
                                </Link>
                            </li>
                            <li>
                                <Link to="/upload-documents" className="w-full flex items-center px-4 py-3 bg-blue-600 text-white rounded-lg transition">
                                    <FiUpload className="mr-2" /> Upload Documents
                                </Link>
                            </li>
                            <li>
                                <Link to="/billing-info" className="w-full flex items-center px-4 py-3 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition">
                                    <FiFileText className="mr-2" /> Billing Info
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-blue-600 mb-4 flex items-center">
                            <FiUser className="mr-2" /> Settings
                        </h2>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/notification" className="w-full flex items-center px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg transition">
                                    <FiFileText className="mr-2" /> Notification
                                </Link>
                            </li>
                            <li>
                                <Link to="/account-info" className="w-full flex items-center px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg transition">
                                    <FiUser className="mr-2" /> Account Info
                                </Link>
                            </li>
                            <li>
                                <Link to="/change-password" className="w-full flex items-center px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg transition">
                                    <FiFileText className="mr-2" /> Change Password
                                </Link>
                            </li>
                        </ul>
                    </div>
                </aside>

                {/* Main Section */}
                <section className="flex-1 p-8 space-y-8 overflow-auto">
                    <div className="flex items-center space-x-4">
                        <Link to="/dashboard" className="text-blue-600 hover:text-blue-800">
                            <FiArrowLeft size={24} />
                        </Link>
                        <h1 className="text-3xl font-bold text-blue-600 flex items-center">
                            <FiUpload className="mr-2" /> Upload Documents
                        </h1>
                    </div>

                    {/* Upload Area */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h2 className="text-xl font-semibold text-blue-600 mb-6 flex items-center">
                            <FiUpload className="mr-2" /> Upload New Document
                        </h2>
                        <div
                            className={`border-2 border-dashed rounded-lg p-8 text-center ${dragActive ? 'border-blue-600 bg-blue-50' : 'border-gray-300'}`}
                            onDragEnter={handleDrag}
                            onDragLeave={handleDrag}
                            onDragOver={handleDrag}
                            onDrop={handleDrop}
                        >
                            <FiUpload className="mx-auto text-blue-600" size={48} />
                            <p className="mt-4 text-gray-700">Drag & Drop your files here</p>
                            <p className="text-gray-500">or</p>
                            <label className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer transition">
                                Browse Files
                                <input
                                    type="file"
                                    multiple
                                    className="hidden"
                                    onChange={handleFileInput}
                                />
                            </label>
                        </div>
                        {files.length > 0 && (
                            <div className="mt-6">
                                <h3 className="text-lg font-semibold text-blue-600 mb-4">Selected Files</h3>
                                <ul className="space-y-3">
                                    {files.map((file) => (
                                        <li key={file.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                            <div className="flex items-center">
                                                <FiPaperclip className="mr-2 text-blue-600" />
                                                <div>
                                                    <p className="text-gray-700">{file.name}</p>
                                                    <p className="text-sm text-gray-500">{file.size}</p>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => handleDelete(file.id)}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                <FiTrash2 size={20} />
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                                <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                    Upload Files
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Uploaded Documents History */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h2 className="text-xl font-semibold text-blue-600 mb-6 flex items-center">
                            <FiFileText className="mr-2" /> Uploaded Documents
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-blue-50">
                                        <th className="border-b p-4 text-blue-600">File Name</th>
                                        <th className="border-b p-4 text-blue-600">Size</th>
                                        <th className="border-b p-4 text-blue-600">Date Uploaded</th>
                                        <th className="border-b p-4 text-blue-600">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {uploadedDocuments.map((doc) => (
                                        <tr key={doc.id} className="hover:bg-gray-50 transition">
                                            <td className="p-4 flex items-center">
                                                <FiFileText className="mr-2 text-blue-600" /> {doc.name}
                                            </td>
                                            <td className="p-4">{doc.size}</td>
                                            <td className="p-4">{doc.date}</td>
                                            <td className="p-4">
                                                <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                                    <FiDownload className="mr-2" /> Download
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Tips Section */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h2 className="text-xl font-semibold text-blue-600 mb-6 flex items-center">
                            <FiFileText className="mr-2" /> Document Upload Tips
                        </h2>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start">
                                <span className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center mr-3">1</span>
                                Ensure your documents are in PDF, JPG, or PNG format.
                            </li>
                            <li className="flex items-start">
                                <span className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center mr-3">2</span>
                                Files should not exceed 10MB in size.
                            </li>
                            <li className="flex items-start">
                                <span className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center mr-3">3</span>
                                Name your files clearly (e.g., "Blood_Test_2025.pdf").
                            </li>
                        </ul>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-white p-4 text-center shadow-inner text-sm text-gray-500">
                © 2025 MediPlan | All rights reserved
            </footer>
        </div>
    );
};

export default UploadDocuments;