import React from 'react';
import HeroSlider from '../components/HeroSlider';
import Categories from '../components/Categories';
import AboutUs from '../components/AboutUs';
import Supplies from '../components/Supplies';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import FAQs from '../components/FAQs';

const Home = () => {
  return (
    <>
      {/* <HeroSlider /> */}
      <Categories />
      <AboutUs />
      <Supplies />
      <Testimonials />
      <Blog />
      <FAQs />
    </>
  );
};

export default Home;
