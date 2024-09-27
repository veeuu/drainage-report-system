// src/components/AboutUs.js
import React from 'react';
import image1 from '../assets/image1.jfif'; // Update the path based on where your images are
import image2 from '../assets/image2.jfif';
import image3 from '../assets/image3.jfif';
import image4 from '../assets/image4.jfif';
import '../App.css'; // Import the CSS file for styles

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <h1 className="about-us-header">About Us</h1>
            <div className="about-us-content">
                <div className="about-us-text-container">
                    <div className="about-us-text">
                        <p>
                            Welcome to our volunteer community! We are a passionate group of individuals dedicated 
                            to making a positive impact in the world. Our mission is to bring together like-minded 
                            people who believe in the power of volunteering to create meaningful change. Whether you 
                            are looking to contribute your time, skills, or resources, we offer a variety of opportunities 
                            to get involved in our projects.
                        </p>
                    </div>
                    <div className="about-us-text">
                        <p>
                            By joining us, you can help build a better future for those in need. We organize events, 
                            campaigns, and programs that focus on various social issues such as education, health, 
                            environmental conservation, and more. Every volunteer counts, and together we can achieve 
                            amazing things.
                        </p>
                        <p>
                            We look forward to having you on board as a volunteer. Feel free to explore our site to 
                            learn more about what we do and how you can get involved. Thank you for considering 
                            becoming part of our family!
                        </p>
                        <div className="about-us-text">
    <p>
        Our community is built on the values of compassion, unity, and action. We believe that everyone has the potential 
        to make a difference, no matter how big or small the contribution. With a wide range of initiatives across 
        different sectors, we ensure that there is something for everyone. Whether you're passionate about helping 
        children in need, contributing to environmental conservation, or supporting healthcare efforts, you'll find 
        a project that aligns with your interests.
    </p>
    <p>
        As a volunteer, you will not only be giving back to the community, but you will also gain valuable experience 
        and skills along the way. We provide training, resources, and a supportive network to help you succeed in your 
        volunteer role. Volunteering with us is a rewarding experience, and we aim to create an inclusive and welcoming 
        environment where everyone feels valued. Together, we can create a lasting impact and inspire others to do the same.
    </p>
</div>

                    </div>
                </div>
                <div className="about-us-images">
                <img src={image1} alt="Volunteer 1" className="about-us-image" />
                    <img src={image2} alt="Volunteer 2" className="about-us-image" />
                    <img src={image3} alt="Volunteer 3" className="about-us-image" />
                    <img src={image4} alt="Volunteer 4" className="about-us-image" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
