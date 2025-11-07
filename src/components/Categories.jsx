import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Categories.css";

const categories = [
  {
    name: "CABIN CRUISERS",
    img: "/assets/cabincrusier.jpg",
    hoverImg: "/assets/dinghy.jpg",
    description: "Spacious and comfortable boats ideal for extended cruising and overnight trips.",
  },
  {
    name: "CANOE & KAYAKS",
    img: "/assets/canoes.jpg",
    hoverImg: "/assets/hydroplanes.jpg",
    description: "Lightweight and versatile boats perfect for paddling adventures on lakes and rivers.",
  },
  {
    name: "DUCKBOATS",
    img: "/assets/duckboats.jpeg",
    hoverImg: "/assets/jonboats.jpg",
    description: "Specialized shallow-water boats designed for hunting and fishing in marshlands.",
  },
  {
    name: "HOUSEBOATS",
    img: "/assets/houseboats.jpg",
    hoverImg: "/assets/outboardboats.jpg",
    description: "Floating homes equipped with living spaces for extended stays on the water.",
  },
  {
    name: "MINI TUGBOATS",
    img: "/assets/minitugboats.jpg",
    hoverImg: "/assets/nostalgia.jpg",
    description: "Compact replicas of working tugboats with a mix of charm and functionality.",
  },
  {
    name: "PONTOON BOATS",
    img: "/assets/pontoon.jpg",
    hoverImg: "/assets/powercats.jpeg",
    description: "Stable and spacious boats ideal for family outings and calm water cruising.",
  },
  {
    name: "SAILBOATS",
    img: "/assets/sailboats.jpg",
    hoverImg: "/assets/rowingboats.jpg",
    description: "Harness the wind with our diverse range of sailing boats for all skill levels.",
  },
  {
    name: "TUNNEL HULLS",
    img: "/assets/tunnelhullboats.jpg",
    hoverImg: "/assets/utilityboats.jpg",
    description: "High-speed boats with reduced drag, designed for performance and agility.",
  },
];


const Categories = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="categories-section">
      <div className="section-header">
        <h2>BOAT CATEGORIES</h2>
        <p>
          Discover our wide selection of marine supply categories to equip your
          vessel for every voyage—safely, smartly, and stylishly.
        </p>
      </div>
      <div className="categories-grid">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="category-card"
          >
            <div className="image-wrapper">
              <img src={cat.img} alt={cat.name} className="category-img" />
            </div>
            <h4 className="category-name">{cat.name}</h4>
            <p className="category-description">{cat.description}</p>
          </div>
        ))}
      </div>
      <div className="cta-container">
        <Link to="/supplies" className="cta-button">
          Explore All Categories
        </Link>
      </div>
    </section>
  );
};

export default Categories;