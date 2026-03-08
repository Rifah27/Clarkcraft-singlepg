import React from 'react';
import '../pagescss/contactus.css';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';

const ContactUsPage = () => {
    return (
        <div className="contactus-page-wrapper">
            {/* Hero Section */}
            <section className="contactus-hero">
                <div className="contactus-hero-content">
                    <h5 className="sub-heading">GET IN TOUCH</h5>
                    <h1 className="main-title">We'd Love to <strong>Hear From You</strong></h1>
                    <p className="hero-desc">
                        Whether you have a question about our boat plans, need assistance with your build, 
                        or just want to share your progress, our team is ready to help.
                    </p>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="contactus-main-section container">
                <div className="contact-grid">
                    
                    {/* Left Column: Contact Details */}
                    <div className="contact-info-column">
                        <h2 className="section-title">Contact Information</h2>
                        <p className="info-intro">
                            Reach out to us through any of the following channels. We aim to respond to all inquiries within 24-48 hours.
                        </p>

                        <div className="info-card">
                            <div className="info-icon">
                                <FiMapPin />
                            </div>
                            <div className="info-text">
                                <h4>Our Location</h4>
                                <p>16 Aqua Lane, Tonawanda<br />New York 14150-2599<br />United States</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">
                                <FiPhone />
                            </div>
                            <div className="info-text">
                                <h4>Phone Number</h4>
                                <p>(716) 873-2640<br />(Toll-Free for Orders)</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">
                                <FiMail />
                            </div>
                            <div className="info-text">
                                <h4>Email Address</h4>
                                <p>support@clarkcraft.com<br />sales@clarkcraft.com</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">
                                <FiClock />
                            </div>
                            <div className="info-text">
                                <h4>Business Hours</h4>
                                <p>Monday - Friday: 9:00 AM - 5:00 PM EST<br />Saturday & Sunday: Closed</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="contact-form-column">
                        <div className="form-wrapper">
                            <h3 className="form-title">Send us a Message</h3>
                            <form className="contact-form">
                                <div className="form-group row">
                                    <div className="input-field">
                                        <label htmlFor="firstName">First Name</label>
                                        <input type="text" id="firstName" placeholder="John" required />
                                    </div>
                                    <div className="input-field">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input type="text" id="lastName" placeholder="Doe" required />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" placeholder="john@example.com" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <select id="subject" required>
                                        <option value="">Select a topic...</option>
                                        <option value="plans">Boat Plans Inquiry</option>
                                        <option value="supplies">Building Supplies</option>
                                        <option value="support">Technical Support</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Your Message</label>
                                    <textarea id="message" rows="5" placeholder="How can we help you today?" required></textarea>
                                </div>

                                <button type="submit" className="cta-button-gold submit-btn">
                                    SEND MESSAGE
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default ContactUsPage;
