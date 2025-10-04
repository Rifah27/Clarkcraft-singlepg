import React from "react";
import "../styles/heroSlider.css";
// import heroImage from "/assets/home.jpg";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* <div className="hero-content">
        <p className="tagline">Yacht Type Variety</p>
        <h1 className="hero-title">Cruisers</h1>
        <p className="hero-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, consequatur blanditiis, dolor labore quisquam nulla suscipit soluta ea, ipsam maiores odio porro cumque excepturi rem sint ipsa! Deleniti, quae magnam!
        </p>
        <div className="hero-buttons">
          <button className="btn-outline">VIEW MORE</button>
          <button className="btn-filled">EXPLORE</button>
        </div>
      </div>
      <div className="arrow-left">&#10094;</div>
      <div className="arrow-right">&#10095;</div> */}
    </section>
  );
};

export default Hero;
