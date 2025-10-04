import React from "react";
import { Link } from "react-router-dom";
import "../styles/Supplies.css";

const yachts = [
  
  {
    name: "EPOXY-PLUS MARINE EPOXY",
    price: "$14 / per day",
    img: "/assets/epoxy.jpeg",
    hoverImg: "/assets/fibre-glass.jpeg",
    description:
      "Our high-strength, easy-to-use 1:1 mix marine epoxy for structural bonding, coating, and repair on wood and fiberglass boats.",
  },
  {
    name: "FIBERGLASS & COATINGS",
    price: "$14 / per day",
    img: "/assets/fibre-glass.jpeg",
    hoverImg: "/assets/epoxy.jpeg",
    description:
      "Professional-grade fiberglass cloth, tape, and protective marine coatings for a durable, waterproof hull.",
  },
  {
    name: "FASTENERS",
    price: "$14 / per day",
    img: "/assets/fastener.jpeg",
    hoverImg: "/assets/epoxy.jpeg",
    description:
      "A complete selection of silicon bronze and stainless steel screws and nails for maximum corrosion resistance.",
  },
  {
    name: "STEERING",
    price: "$14 / per day",
    img: "/assets/steering.jpeg",
    hoverImg: "/assets/fastener.jpeg",
    description:
      "Reliable and easy-to-install marine boat steering systems, hardware, and control cables for your vessel.",
  },
  {
    name: "BOOKS & GUIDES",
    price: "$14 / per day",
    img: "/assets/book.jpeg",
    hoverImg: "/assets/steering.jpeg",
    description:
      "Expert boatbuilding books and reference guides filled with techniques and inspiration for your project.",
  },
  {
    name: "PLAN SAVER",
    price: "$14 / per day",
    img: "/assets/plansaver.jpg",
    hoverImg: "/assets/fastener.jpeg",
    description:
      "Protect and preserve your valuable boat plans with our Plan Saver accessories and solutions.",
  },
];


const Supplies = () => {
  return (
    <section className="yacht-section">
      <div className="section-header">
        <h5>QUALITY MATERIALS SINCE 1957.</h5>
        <h2>BOATBUILDING SUPPLIES</h2>
        <p>
          A great boat starts with the right materials. We offer a curated selection of
high-performance boatbuilding supplies trusted by builders for decades. Find everything
you need, from strong marine epoxy to quality fiberglass cloth, to ensure your project has
a professional, long-lasting finish.
        </p>
      </div>
      <div className="yacht-grid">
        {yachts.map((yacht, index) => (
          <div key={index} className="yacht-card">
            <div className="img-container">
              <img src={yacht.img} alt={yacht.name} className="main-img" />
              
            </div>
            {/* <p className="yacht-price">{yacht.price}</p> */}
            <h4 className="yacht-name">{yacht.name}</h4>
            <p className="yacht-description">{yacht.description}</p>
          </div>
        ))}
      </div>
      <div className="cta-container">
        <Link to="/categories" className="cta-button">
          Shop All Boatbuilding Supplies
        </Link>
      </div>
    </section>
  );
};

export default Supplies;

{/* <img src={yacht.hoverImg} alt="hover" className="hover-img" /> */}