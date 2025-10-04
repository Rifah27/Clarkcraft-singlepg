import { useState } from 'react'
import Header from './components/Header'
import HeroSlider from './components/HeroSlider'
import "./styles/global.css";

import Supplies from './components/Supplies';
import Testimonials from './components/Testimonials';
import FAQs from './components/FAQs';
import Blog from './components/Blog';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Categories from './components/Categories';

function App() {

  return (
    <>
      <Header />
      {/* <HeroSlider /> */}
      <Categories />
      <AboutUs />
      <Supplies />
      <Testimonials />
      {/* <FAQs /> */}
      <Blog />
      <Footer />
    </>
  )
}

export default App
