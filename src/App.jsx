import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router"
import React from "react";
import './App.css'
import HomePage from './MyComponents/Pages/HomePage'
import LoginForm from './MyComponents/Pages/LoginForm'
import SignupForm from './MyComponents/Pages/SignupForm'
import ErrorPage from './MyComponents/UI/ErrorPage'
import Contact from './MyComponents/FeaturePages/Contact'
import Appointment from './MyComponents/FeaturePages/Appointment'
import Reports from './MyComponents/FeaturePages/Reports'
import UserDashboard from './MyComponents/Dashboards/UserDashboard'
import Medicines from './MyComponents/FeaturePages/Symptoms';
import MedicinePage from './MyComponents/FeaturePages/MedicinePage';
import ViewPrescriptions from './MyComponents/Dashboards/Pages/ViewPrescriptions';
import UploadDocuments from './MyComponents/Dashboards/Pages/UploadDocuments';
import BillingInfo from './MyComponents/Dashboards/Pages/BillingInfo';
import Notification from './MyComponents/Dashboards/Pages/Notification';
import AccountInfo from './MyComponents/Dashboards/Pages/AccountInfo';
import ChangePassword from './MyComponents/Dashboards/Pages/ChangePassword';
import AdminDashboard from './MyComponents/Dashboards/Admin/AdminDashboard';
import DoctorPage from './MyComponents/Pages/Utilities/DoctorPage';
import AboutPage from './MyComponents/UI/AboutPage';
import AdminProfileCard from './MyComponents/Dashboards/DashboardUtilities/AdminProfileCard';


function App() {
    return (
        
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='*' element={<ErrorPage/>}/>             
                <Route path='/login' element={<LoginForm/>}/>
                <Route path='/signup' element={<SignupForm/>}/>
                <Route path='/report' element={<Reports/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path={'/book-appointment'} element={<Appointment/>}/>
                <Route path='/medicine' element={<Medicines/>}/>
                <Route path='/user-dashboard' element={<UserDashboard/>}/>
                <Route path='/aboutMedicine' element={<MedicinePage/>}/>
                <Route path='/present' element={<ViewPrescriptions/>}/>
                <Route path='/upload-documents' element={<UploadDocuments/>}/>
                <Route path='/present' element={<ViewPrescriptions/>}/>
                <Route path='/info' element={<BillingInfo/>}/>
                <Route path='/notification' element={<Notification/>}/>
                <Route path='/account-info' element={<AccountInfo/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/change-password' element={<ChangePassword/>}/>
                <Route path='/admin-dashboard' element={<AdminDashboard/>}/>
                <Route path='/public-doctor' element={<DoctorPage/>}/>
                <Route path='/error' element={<ErrorPage/>}/>
                <Route path='/admin/profile' element = {<AdminProfileCard/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
