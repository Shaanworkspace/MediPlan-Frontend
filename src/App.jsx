import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router"

import './App.css'
import HomePage from './components/MyComponents/Pages/HomePage'
import LoginForm from './components/MyComponents/Pages/LoginForm'


function App() {
    const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/login' element={<LoginForm/>}/>
                <Route/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
