import React from 'react'
import "./App.css"

import NavBar from "./Components/NavBar.jsx"

import Home from './Pages/Home.jsx'
import Manage from './Pages/Manage/Manage.jsx'
import Report from './Pages/Report.jsx'

import { BrowserRouter,Routes,Route } from 'react-router-dom'



export default function App() {
  return (
    <div>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/manage" element={<Manage />} />
                <Route path="/reports" element={<Report />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
