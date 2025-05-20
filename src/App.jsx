import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router"
import React from "react";
import './App.css'
import HomePage from './components/MyComponents/Pages/HomePage'
import LoginForm from './components/MyComponents/Pages/LoginForm'
import SignupForm from './components/MyComponents/Pages/SignupForm'
import  ErrorPage from './components/MyComponents/UI/ErrorPage'
import Contact from './components/MyComponents/FeaturePages/Contact'
import Appointment from './components/MyComponents/FeaturePages/Appointment'
import Reports from './components/MyComponents/FeaturePages/Reports'
import UserDashboard from './components/MyComponents/Dashboards/UserDashboard'
import Medicines from './components/MyComponents/FeaturePages/Symptoms';
import MedicinePage from './components/MyComponents/FeaturePages/MedicinePage';
import ViewPrescriptions from './components/MyComponents/Pages/ViewPrescriptions';
import UploadDocuments from './components/MyComponents/Pages/UploadDocuments';
import BillingInfo from './components/MyComponents/Pages/BillingInfo';
import Notification from './components/MyComponents/Pages/Notification';
import AccountInfo from './components/MyComponents/Pages/AccountInfo';
import ChangePassword from './components/MyComponents/Pages/ChangePassword';


function App() {
    const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='*' element={<ErrorPage/>}/>             
                <Route path='/login' element={<LoginForm/>}/>
                <Route path='/signup' element={<SignupForm/>}/>
                <Route path='/report' element={<Reports/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/appointment' element={<Appointment/>}/>
                <Route path='/medicine' element={<Medicines/>}/>
                <Route path='/user' element={<UserDashboard/>}/>
                <Route path='/aboutMedicine' element={<MedicinePage/>}/>
                <Route path='/present' element={<ViewPrescriptions/>}/>
                <Route path='/upload' element={<UploadDocuments/>}/>
                <Route path='/present' element={<ViewPrescriptions/>}/>
                <Route path='/info' element={<BillingInfo/>}/>
                <Route path='/notifi' element={<Notification/>}/>
                <Route path='/account' element={<AccountInfo/>}/>
                <Route path='/change' element={<ChangePassword/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
