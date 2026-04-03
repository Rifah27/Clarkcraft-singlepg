import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import "./styles/global.css";

import Home from './pages/Home';
import AboutUsPage from './pages/aboutus';
import ContactUsPage from './pages/contactus';
import BlogPage from './pages/blog';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
