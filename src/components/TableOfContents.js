// src/TableOfContents.js
import React from 'react';
import '../App.css'; // Import the CSS file for styles
import Toggle from './Toggle'; // Import the Toggle component

const TableOfContents = () => {
    return (
        <div className="table-of-contents">
            <h2>Table Of Contents</h2>
            <Toggle /> {/* Add the Toggle component here */}
        </div>
    );
};

export default TableOfContents;
