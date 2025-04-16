import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router"

import './App.css'
import HomePage from './components/Home/MyComponents/Pages/HomePage'


function App() {
    const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
