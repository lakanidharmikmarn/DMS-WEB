import React from 'react';
import './Services.scss';

const Services = () => {
  return (
    <section className="services">
      <div className="services__container container-max">
        <div className="services__header">
          <h2 className="services__title">Specialized Dental Services</h2>
          <p className="services__subtitle">
            From routine check-ups to advanced cosmetic reconstructions, we offer comprehensive care tailored to your needs.
          </p>
        </div>
        
        <div className="bento-grid">
          {/* General Dentistry */}
          <div className="services__card services__card--general">
            <div className="services__card-content">
              <span className="material-symbols-outlined services__card-icon">dentistry</span>
              <h3 className="services__card-title">General Dentistry</h3>
              <p className="services__card-description">
                Preventative care, cleanings, and digital screenings for long-term oral health and early detection.
              </p>
            </div>
            <a className="services__card-link" href="#">
              Learn More <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>

          {/* Cosmetic Dentistry */}
          <div className="services__card services__card--cosmetic">
            <div className="services__card-content">
              <span className="material-symbols-outlined services__card-icon">auto_awesome</span>
              <h3 className="services__card-title">Cosmetic</h3>
              <p className="services__card-description">
                Teeth whitening and porcelain veneers for a perfect aesthetic smile.
              </p>
            </div>
            <a className="services__card-link" href="#">
              View Gallery <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>

          {/* Orthodontics */}
          <div className="services__card services__card--ortho">
            <div className="services__card-content">
              <span className="material-symbols-outlined services__card-icon">align_items_stretch</span>
              <h3 className="services__card-title">Orthodontics</h3>
              <p className="services__card-description">
                Modern alignment solutions including Invisalign and clear braces.
              </p>
            </div>
            <a className="services__card-link" href="#">
              Explore <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>

          {/* Featured Tech */}
          <div className="services__card services__card--featured">
            <div className="services__featured-content">
              <h3 className="services__featured-title">Advanced Intraoral Scanning</h3>
              <p className="services__featured-description">
                We use the latest 3D imaging technology to ensure 99.9% precision in every treatment plan, reducing discomfort and visit duration.
              </p>
            </div>
            <div className="services__featured-image-wrapper">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb5F3agh70AMajHGxCaEl79fv2lgRuvYYDPh-y-PFOj54nbLE81a7x2RqgQGqt06Gwr4hBbspfF33807xrEFwPzJ881TYyUTcsFji2VmjP7LsX8fxsh6UsfhQcUzIwx922-rKELVt1psKee-H_2BuRTjl4o1c2ymyD6gL2fbyPzm1t7CU0jwHdOcF9dxN-TmHQoui7o-6H2OZsCuBJDkJE9xSpvVOkjnM3Jdk6ZU4y0qW8lDmBzb0R5lcqsJ3Y5VOpu5i0YM9kpq4" 
                alt="Advanced Dental Tech" 
                className="services__featured-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
