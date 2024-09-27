// src/App.js
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'; // Import useLocation
import Header from './components/Header';
import TableOfContents from './components/TableOfContents';
import Report from './components/Report'; // Import the Report component
import Admin from './components/Admin'; // Import the Admin component
import VolunteerForm from './components/VolunteerForm'; // Import the VolunteerForm component
import AboutUs from './components/AboutUs'; // Import the AboutUs component
import './App.css'; // Import the CSS for background image

function App() {
    const location = useLocation(); // Get the current location

    return (
        <div className="App">
            <Header />
            <div className="background-image">
                {/* Conditionally render TableOfContents based on the current route */}
                {location.pathname === '/' && <TableOfContents />}
                <Routes>
                    <Route path="/" element={<TableOfContents />} /> {/* Home route */}
                    <Route path="/report" element={<Report />} /> {/* Report route */}
                    <Route path="/admin" element={<Admin />} /> {/* Admin route */}
                    <Route path="/volunteer-form" element={<VolunteerForm />} /> {/* Volunteer form route */}
                    <Route path="/about-us" element={<AboutUs />} /> {/* About Us route */}
                </Routes>
            </div>
        </div>
    );
}

export default App;
