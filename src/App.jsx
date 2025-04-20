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

                <Route path='/user' element={<UserDashboard/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
