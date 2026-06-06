import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import StatisticsSection from './components/StatisticsSection';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './Home.scss';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <main className="home-main">
        <Hero />
        <Services />
        <WhyChooseUs />
        <StatisticsSection />
        <Testimonials />
        <Blog />
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
