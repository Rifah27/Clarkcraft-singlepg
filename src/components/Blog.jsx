import React from "react";
import "../styles/Blog.css";

const blogPosts = [
  {
    title: "APPLYING MARINE EPOXY",
    date: "July 23, 2021",
    category: "DIY TIPS",
    description:
      "Lorem ipsum dolor sit Get a professional, waterproof finish. Our guide walks you through the essential steps for mixing and applying epoxy correctly, consectetur adipiscing elit nean commodo ligula eget dol",
    image: "/assets/blog1.jpeg",
    link: "#",
  },
  {
    title: " A PERFECT SAILBOATS",
    date: "August 1, 2025",
    category: "CUSTOMER BUILDS",
    description:
      "See how one family used our plans to build their dream sailboat. An inspiring story from our dedicated builder community. ipsum dolor sit amet, consectetur adipiscing elit nean commodo ligula eget dol",
    image: "/assets/blog2.jpeg",
    link: "#",
  },
  {
    title: "MATERIAL CHOICES",
    date: "August 1, 2025",
    category: "PLAN SELECTION",
    description:
      "Plywood or Fiberglass? Choosing your material is the first big decision. We break down the costs, benefits, and skills required for each method.",
    image: "/assets/blog3.jpeg",
    link: "#",
  },
  {
    title: "CHOOSING FASTENERS",
    date: "August 1, 2025",
    category: "BOATBUILDING SUPPLIES",
    description:
      "Don't let corrosion ruin your hard work. Learn the difference between silicon bronze and stainless steel, and when to use each for maximum durability.",
    image: "/assets/blog4.jpeg",
    link: "#",
  },
];

const Blog = () => {
  return (
    <section className="blog-section">
      <div className="blog-header">
        <p className="subtitle">LATEST BLOG POSTS</p>
        <h2 className="title">FROM THE BUILDER'S HUB</h2>
      </div>
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <div className="blog-img">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-content">
              <p className="meta">
                {post.date} / {post.category}
              </p>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-description">{post.description}</p>
              <a href={post.link} className="read-more">
                READ MORE →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
