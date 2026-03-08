import React from 'react';
import '../pagescss/aboutus.css';

const AboutUsPage = () => {
    return (
        <div className="aboutus-page-wrapper">
            {/* Hero Section */}
            <section className="aboutus-hero">
                <div className="aboutus-hero-content">
                    <h5 className="sub-heading">THE CLARK CRAFT STORY</h5>
                    <h1 className="main-title">A Legacy of <strong>Craftsmanship</strong></h1>
                    <p className="hero-desc">
                        Since 1959, we have been more than just a provider of boat plans. 
                        We are a community of dreamers, builders, and seafarers united by a shared passion.
                    </p>
                </div>
            </section>

            {/* Introduction / History Section */}
            <section className="aboutus-history-section container">
                <div className="history-text">
                    <h2 className="section-title">Our Journey</h2>
                    <p>
                        It takes a special kind of dedication to build a boat with your own hands. At Clark Craft, we understand that journey because we've been guiding it for over 60 years. What started as a humble collection of proven wooden boat plans has grown into America's most trusted resource for home boatbuilding.
                    </p>
                    <p>
                        Our founder believed that high-quality, step-by-step instructions could turn anyone into a master boatbuilder. Today, we carry on that legacy, providing not just blueprints—but the premium marine epoxy, fiberglass, and fasteners required to make those dreams unsinkable.
                    </p>
                </div>
                <div className="history-image">
                    <img src="/assets/cabincrusier.jpg" alt="Building a boat" />
                </div>
            </section>

            {/* Mission & Vision Cards */}
            <section className="aboutus-mission-vision">
                <div className="container mv-grid">
                    <div className="mv-card">
                        <img src="/assets/icon (2).png" alt="Mission Icon" className="mv-icon" />
                        <h3>Our Mission</h3>
                        <p>To empower enthusiasts and professionals alike with accessible, world-class boatbuilding resources, top-tier materials, and unwavering support from the first cut to the final launch.</p>
                    </div>
                    <div className="mv-card">
                        <img src="/assets/icon (3).png" alt="Vision Icon" className="mv-icon" />
                        <h3>Our Vision</h3>
                        <p>To preserve the timeless art of custom boat building while innovating for the future, ensuring that the pride of a handcrafted vessel remains alive for generations to come.</p>
                    </div>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="aboutus-team-section container">
                <h2 className="section-title text-center">Meet The Crew</h2>
                <div className="team-grid">
                    <div className="team-member">
                        <div className="member-avatar">AS</div>
                        <h4>Alia Siddiqui</h4>
                        <p className="member-role">Founder & CEO</p>
                    </div>
                    <div className="team-member">
                        <div className="member-avatar">SA</div>
                        <h4>Sana Arif</h4>
                        <p className="member-role">Lead Developer</p>
                    </div>
                    <div className="team-member">
                        <div className="member-avatar">AV</div>
                        <h4>Aishwarya Vaish</h4>
                        <p className="member-role">Project Manager</p>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="aboutus-cta">
                <div className="container">
                    <h2>Ready to start your own adventure?</h2>
                    <p>Explore our vast collection of plans and supplies.</p>
                    <button className="cta-button-gold">BROWSE BOAT PLANS</button>
                </div>
            </section>
        </div>
    );
};

export default AboutUsPage;