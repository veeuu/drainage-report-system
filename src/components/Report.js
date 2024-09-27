import React from 'react';
import '../App.css'; // Import the CSS file if needed for Report specific styles

const Report = () => {
    const reportEmail = "dummyreport@example.com"; // Replace with the actual email address

    return (
        <div className="report-container">
            <h2>Report Sewage Leak</h2>
            <form>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                    <label>Phone Number:</label>
                    <input type="tel" placeholder="Enter your phone number" required />
                </div>
                <div className="form-group">
                    <label>Address of the Incident:</label>
                    <input type="text" placeholder="Enter the address of the sewage leak" required />
                </div>
                <div className="form-group">
                    <label>Location Description:</label>
                    <textarea placeholder="Provide a brief description of the location" required></textarea>
                </div>
                <div className="form-group">
                    <label>Description of the Issue:</label>
                    <textarea placeholder="Describe the sewage leak issue" required></textarea>
                </div>
                <div className="form-group">
                    <label>Preferred Contact Method:</label>
                    <select required>
                        <option value="">Select...</option>
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Upload Image:</label>
                    <input type="file" accept="image/*" />
                </div>
                <button type="submit">Submit Report</button>
                <a href={`mailto:${reportEmail}`} style={{ textDecoration: 'none' }}>
                    <button type="button" style={{ marginTop: '10px' }}>Report Directly</button>
                </a>
            </form>
        </div>
    );
};

export default Report;
