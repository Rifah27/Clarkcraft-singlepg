import React from 'react';
import '../pagescss/categoriespage.css';
import Categories from '../components/Categories';

const CategoriesPage = () => {
    return (
        <div className="categories-page-wrapper">
            {/* Hero Section */}
            <section className="categories-hero">
                <div className="categories-hero-content">
                    <h5 className="sub-heading">OUR FLEET</h5>
                    <h1 className="main-title">Boat <strong>Categories</strong></h1>
                    <p className="hero-desc">
                        Explore our extensive catalog of boat plans and kits. From sleek sailboats to sturdy cabin cruisers, find the perfect vessel for your next adventure.
                    </p>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="categories-main-section">
                <Categories showButton={false} />
            </section>
        </div>
    );
};

export default CategoriesPage;
