import React from 'react';
import { Link } from 'react-router-dom'; // <-- make sure you're using React Router
import '../styles/AboutUs.css';

const features = [
  {
    title: "Our 60+ Year Legacy in Boatbuilding",
    description: "For over six decades, our proven boat designs have helped thousands of first-time builders and seasoned craftsmen successfully launch their projects. Our experience building and selling boat kits and plans is your guarantee of quality and a rewarding build.",
    icon: "/assets/icon (2).png",
    alt: "Yacht Icon",
  },
  {
    title: "Boat Plans for Every Builder",
    description: "From simple jonboat plans to sturdy cabin cruiser plans, our library features over 250 unique designs. Each plan is created with clear, step-by-step instructions for a successful home-built boat, no matter your skill level.",
    icon: "/assets/icon (3).png",
    alt: "Crew Icon",
  },
  {
    title: "More Than Just Plans: Boatbuilding Supplies",
    description: "A successful build requires the right materials. We provide a curated selection of marine-grade epoxy, fiberglass cloth, and high-quality boat fasteners to turn your plans into a finished boat.",
    icon: "/assets/icon (1).png",
    alt: "Ports Icon",
  },
  {
    title: "A Trusted Name in Home Boat Building",
    description: "Our greatest pride comes from the stories our customers share. The Clark Craft community is built on a foundation of trust and the immense satisfaction of launching a boat built with your own two hands.",
    icon: "/assets/icon.png",
    alt: "Explore Icon",
  },
];

const AboutUs = () => {
  return (
    <div className="about-section">
      <div className="about-heading">
        {/* <div className="explore-text">EXPLORE</div>
        <div className="company-name">YACHTING COMPANY</div> */}
        <h1 className="main-title">ABOUT <strong>CLARK CRAFT.</strong></h1>
        <p className="subtitle">
          Since 1957, Clark Craft has believed in one simple idea: anyone with a dream and a solid
plan can build their own boat. From humble garage beginnings to a trusted name in
American craftsmanship, we’ve been empowering builders with proven wooden and
fiberglass boat designs — not just selling plans, but helping create adventures.
        </p>
      </div>

      <div className="about-image">
        <img  src="/assets/about.png" alt="Yacht" />
      </div>

      <div className="about-features">
        {features.map((feature, index) => (
          <div className="feature-box" key={index}>
            <div className="feature-icon">
              <img className='icon-1' src={feature.icon} alt={feature.alt} />
            </div>
            <div className='feature-content'>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      
      <div className="about-cta">
        <Link to="/about" className="cta-button-2">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
