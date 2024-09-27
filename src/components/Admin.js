// src/components/Admin.js
import React from 'react'; // Removed useState
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../App.css'; // Import the CSS file for styles

const Admin = () => {
    const navigate = useNavigate(); // Create a navigate instance

    // Sample data for volunteers
    const volunteers = [
        { name: 'John Doe', number: '123-456-7890', email: 'johndoe@example.com' },
        { name: 'Jane Smith', number: '987-654-3210', email: 'janesmith@example.com' },
        { name: 'Alice Johnson', number: '555-123-4567', email: 'alice.johnson@example.com' },
        { name: 'Bob Brown', number: '555-234-5678', email: 'bob.brown@example.com' },
        { name: 'Charlie Davis', number: '555-345-6789', email: 'charlie.davis@example.com' },
        { name: 'Diana Evans', number: '555-456-7890', email: 'diana.evans@example.com' },
        { name: 'Ethan Foster', number: '555-567-8901', email: 'ethan.foster@example.com' },
        { name: 'Fiona Green', number: '555-678-9012', email: 'fiona.green@example.com' },
        { name: 'George Harris', number: '555-789-0123', email: 'george.harris@example.com' },
        { name: 'Hannah Ivers', number: '555-890-1234', email: 'hannah.ivers@example.com' },
    ];

    const handleVolunteerClick = () => {
        navigate('/volunteer-form'); // Navigate to the VolunteerForm component
    };

    return (
        <div className="admin-container">
            <h2>Volunteer Management</h2>
            <div className="volunteer-name-container">
                <h3>Volunteer Information</h3>
            </div>
            <div className="volunteer-info-container">
                <table className="volunteer-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {volunteers.map((volunteer, index) => (
                            <tr key={index}>
                                <td>{volunteer.name}</td>
                                <td>{volunteer.number}</td>
                                <td>{volunteer.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button className="volunteer-button" onClick={handleVolunteerClick}>
                TO BE A VOLUNTEER
            </button>
        </div>
    );
};

export default Admin;
