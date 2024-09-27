// src/components/Admin.js
import React from 'react'; // Removed useState
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../App.css'; // Import the CSS file for styles

const Admin = () => {
    const navigate = useNavigate(); // Create a navigate instance

    // Sample data for volunteers
    const volunteers = [
        { name: 'Vidhisha Kamble', number: '123-456-7890', email: 'veeekamble@gmail.com' },
        { name: 'Samrudhhi Deshpande', number: '987-654-3210', email: 'sam@gmail.com' },
        { name: 'Atharva Kapde', number: '555-123-4567', email: 'atharva@gmail.com' },
        { name: 'Arpit Agarwal', number: '555-234-5678', email: 'appu@gmail.com' },
        { name: 'Harshit Agarwal', number: '555-345-6789', email: 'harshit@gmail.com' },
        { name: 'Ruchi Agarwal', number: '555-456-7890', email: 'ruchi@gmail.com' },
        { name: 'Rajani Kamble', number: '555-567-8901', email: 'rajanikamble@gmail.com' },
        { name: 'Arjun Kamble', number: '555-678-9012', email: 'arjunkamble@gmail.com' },
        { name: 'Akanksha Kamble', number: '555-789-0123', email: 'akanksha@gmail.com' },
        { name: 'Khushi Agarwal', number: '555-890-1234', email: 'khushiagarwal@gmail.com' },
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
