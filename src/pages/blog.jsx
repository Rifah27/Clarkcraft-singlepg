import React from 'react';
import '../pagescss/blogpage.css';
import Blog from '../components/Blog';

const BlogPage = () => {
    return (
        <div className="blog-page-wrapper">
            {/* Hero Section */}
            <section className="blog-hero">
                <div className="blog-hero-content">
                    <h5 className="sub-heading">LATEST STORIES</h5>
                    <h1 className="main-title">Builder's <strong>Blog</strong></h1>
                    <p className="hero-desc">
                        Explore our latest articles, guides, and stories from fellow boat builders.
                        Get tips, inspiration, and technical advice for your next project.
                    </p>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="blog-main-section">
                <Blog />
            </section>
        </div>
    );
};

export default BlogPage;
