// src/App.js
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import TableOfContents from './components/TableOfContents';
import Report from './components/Report';
import Admin from './components/Admin';
import VolunteerForm from './components/VolunteerForm';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import './App.css';

function App() {
    const location = useLocation();

    return (
        <div className="App">
            <Header />
            <div className="background-image">
                {location.pathname === '/' && <TableOfContents />}
                <Routes>
                    <Route path="/" element={<TableOfContents />} />
                    <Route path="/report" element={<Report />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/volunteer-form" element={<VolunteerForm />} />
                    <Route path="/about-us" element={<AboutUs />} />
                </Routes>
            </div>
            <Footer /> {/* Ensure Footer is inside the App structure */}
        </div>
    );
}

export default App;
