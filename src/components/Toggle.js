// src/Toggle.js
import React, { useState } from 'react';
import '../App.css'; // Import the CSS file for styles

const topics = [
    { 
        title: "1. Why Drainage Maintenance is Important", 
        detail: "Proper drainage maintenance prevents water damage and promotes a healthy environment. Regular upkeep helps avoid costly repairs and ensures that your drainage system functions effectively during heavy rainfall." 
    },
    { 
        title: "2. Understanding Your Drainage System", 
        detail: "Learn the components of your drainage system and how they work together to prevent flooding. Understanding your system can help you identify issues early and maintain optimal performance." 
    },
    { 
        title: "3. Preventive Drainage Maintenance Tips", 
        detail: "Regular inspections and cleaning can help maintain your drainage system effectively. Clearing debris and sediment can prevent blockages and ensure smooth water flow." 
    },
    { 
        title: "4. How to Schedule Drainage Maintenance", 
        detail: "Find out how to schedule regular maintenance checks for your drainage system. Setting a routine inspection can catch potential problems before they escalate, saving time and money." 
    },
    { 
        title: "5. Dealing with Common Drainage Issues", 
        detail: "Identify and address common drainage problems before they escalate. Understanding signs of drainage failure, such as slow drainage or pooling water, can help you take timely action." 
    },
    { 
        title: "6. Introducing FieldInsight", 
        detail: "Discover how FieldInsight can assist in managing your drainage maintenance. This tool helps streamline the scheduling process and keeps track of maintenance history for better planning." 
    }
];

const Toggle = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTopicIndex, setActiveTopicIndex] = useState(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
        setActiveTopicIndex(null); // Reset active topic when toggling
    };

    const handleTopicClick = (index) => {
        setActiveTopicIndex(activeTopicIndex === index ? null : index); // Toggle the detail for the clicked topic
    };

    return (
        <div className="toggle-container">
            <button className="toggle-button" onClick={handleToggle}>
                Topics {isOpen ? '▲' : '▼'} {/* Down arrow when closed, up arrow when open */}
            </button>
            {isOpen && (
                <ul className="topic-list">
                    {topics.map((topic, index) => (
                        <li key={index} onClick={() => handleTopicClick(index)} className="topic-item">
                            {topic.title}
                            {activeTopicIndex === index && (
                                <div className="topic-detail">
                                    {topic.detail}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Toggle;
