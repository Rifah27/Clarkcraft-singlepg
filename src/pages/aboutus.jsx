import React from 'react';
import '../pagescss/aboutus.css';

const AboutUs = () => {
    return (
        <div className="aboutus-container">
            <h1 className="aboutus-title">About Us</h1>
            <p className="aboutus-description">
                Welcome to Clarkraft! We are passionate about delivering high-quality solutions for our clients.
                Our team is dedicated to innovation, excellence, and customer satisfaction. With years of experience
                in the industry, we strive to exceed expectations and build lasting relationships.
            </p>
            <div className="aboutus-team">
                <h2>Our Team</h2>
                <ul>
                    <li>Alia Siddiqui - Founder & CEO</li>
                    <li>Sana Arif- Lead Developer</li>
                    <li>Aishwarya Vaish - Project Manager</li>
                </ul>
            </div>
            <div className="aboutus-mission">
                <h2>Our Mission</h2>
                <p>
                    To empower businesses with innovative digital solutions and exceptional service.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;