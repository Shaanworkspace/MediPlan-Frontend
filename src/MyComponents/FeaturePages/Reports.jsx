import React, { useState, useEffect } from 'react';
import HomePageHeader from '../UI/HomePageHeader';
const Reports = () => {
	const [reportType, setReportType] = useState("weekly");
	const [searchQuery, setSearchQuery] = useState("");
	const [filteredData, setFilteredData] = useState([]);

	const dummyData = [
		{ id: 1, name: "Paracetamol", date: "2025-04-10", quantity: 30, status: "Dispensed" },
		{ id: 2, name: "Ibuprofen", date: "2025-04-11", quantity: 20, status: "Pending" },
		{ id: 3, name: "Cetirizine", date: "2025-04-12", quantity: 50, status: "Dispensed" },
		{ id: 4, name: "Amoxicillin", date: "2025-04-13", quantity: 15, status: "Dispensed" },
		{ id: 5, name: "Aspirin", date: "2025-04-14", quantity: 25, status: "Pending" },
		{ id: 6, name: "Vitamin D", date: "2025-04-15", quantity: 40, status: "Dispensed" },
	];

	useEffect(() => {
		const data = dummyData.filter(item =>
			item.name.toLowerCase().includes(searchQuery.toLowerCase())
		);
		setFilteredData(data);
	}, [searchQuery]);

	return (
		<div className="p-6 md:p-10 bg-[#E6E6FA] min-h-screen">
			<div className="fixed top-0 left-0 w-full z-10">
				<HomePageHeader/>
			</div>
			<div className='mt-16' >
				<div className="mb-6">
					<h1 className="text-3xl font-bold text-gray-800">Reports Dashboard</h1>
					<p className="text-sm text-gray-500">Track and manage medicine reports efficiently</p>
				</div>

				{/* Filter Bar */}
				<div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
					<select
						value={reportType}
						onChange={(e) => setReportType(e.target.value)}
						className="w-full md:w-1/4 rounded border-gray-300 shadow-sm"
					>
						<option value="daily">Daily Report</option>
						<option value="weekly">Weekly Report</option>
						<option value="monthly">Monthly Report</option>
					</select>

					<input
						type="text"
						placeholder="Search medicine..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="w-full md:w-1/2 p-2 rounded border border-gray-300 shadow-sm"
					/>
				</div>

				{/* Summary Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
					<div className="bg-white rounded-lg shadow p-4">
						<h2 className="text-sm text-gray-500">Total Records</h2>
						<p className="text-2xl font-semibold text-blue-600">{filteredData.length}</p>
					</div>
					<div className="bg-white rounded-lg shadow p-4">
						<h2 className="text-sm text-gray-500">Dispensed</h2>
						<p className="text-2xl font-semibold text-green-600">
							{filteredData.filter(item => item.status === "Dispensed").length}
						</p>
					</div>
					<div className="bg-white rounded-lg shadow p-4">
						<h2 className="text-sm text-gray-500">Pending</h2>
						<p className="text-2xl font-semibold text-yellow-600">
							{filteredData.filter(item => item.status === "Pending").length}
						</p>
					</div>
					<div className="bg-white rounded-lg shadow p-4">
						<h2 className="text-sm text-gray-500">Selected: {reportType}</h2>
					</div>
				</div>

				{/* Table Section */}
				<div className="bg-white rounded-lg shadow overflow-auto">
					<table className="min-w-full text-sm table-auto">
						<thead className="bg-gray-200 text-gray-600">
							<tr>
								<th className="px-4 py-2 text-left">ID</th>
								<th className="px-4 py-2 text-left">Medicine</th>
								<th className="px-4 py-2 text-left">Date</th>
								<th className="px-4 py-2 text-left">Quantity</th>
								<th className="px-4 py-2 text-left">Status</th>
								<th className="px-4 py-2 text-left">Action</th>
							</tr>
						</thead>
						<tbody>
							{filteredData.map((entry) => (
								<tr key={entry.id} className="hover:bg-gray-100 border-b">
									<td className="px-4 py-2">{entry.id}</td>
									<td className="px-4 py-2">{entry.name}</td>
									<td className="px-4 py-2">{entry.date}</td>
									<td className="px-4 py-2">{entry.quantity}</td>
									<td className={`px-4 py-2 font-medium ${entry.status === "Dispensed" ? "text-green-600" : "text-yellow-600"}`}>
										{entry.status}
									</td>
									<td className="px-4 py-2">
										<button className="text-blue-600 hover:underline">View</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					{filteredData.length === 0 && (
						<div className="text-center text-gray-500 p-4">No records found.</div>
					)}
				</div>

				{/* Chart Placeholder */}
				<div className="mt-10">
					<h2 className="text-xl font-semibold mb-4">Report Insights (Graph)</h2>
					<div className="w-full h-64 bg-gray-200 rounded-md flex items-center justify-center text-gray-600">
						Chart Component Placeholder (e.g. Recharts, Chart.js)
					</div>
				</div>

				{/* Footer */}
				<footer className="mt-10 text-center text-sm text-gray-500">
					© {new Date().getFullYear()} MediPlan. All rights reserved.
				</footer>
			</div>
		</div>
	);
};


export default Reports