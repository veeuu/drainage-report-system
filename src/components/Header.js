import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../App.css'; // Import the CSS file for styles

const Header = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleReportClick = () => {
        navigate('/report'); // Navigate to the report page
    };

    const handleAdminClick = () => {
        navigate('/admin'); // Navigate to the admin page
    };

    return (
        <header className="header">
            <h1 className="header-title">Drainage Report System</h1>
            <nav className="header-nav">
                <button className="nav-button" onClick={() => navigate('/')}>Home</button>
                <button className="nav-button" onClick={handleReportClick}>Report</button>
                <button className="nav-button" onClick={handleAdminClick}>Admin</button> {/* Ensure this line has the click handler */}
            </nav>
        </header>
    );
};

export default Header;
