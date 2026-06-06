import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__background">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYAcjOXdKQOdMAXVmzP_ileuW7D5L6ahUJY53G0e9zoqpMpzkc33rdwqxe-da34gMvCNrS1UsHx0optrNWWGvKbeLG-MwfAP6zEkd1yCiPgha9EjMFXDd-aiUyRu-r7b9NAvQ_zKVMt25CmWf6JeOuYs2Ly-MI_JAinjvB99Qw_Q63nsmcaMcI0fezpYrDWEJ2WyqIq7s2nboW0LK4DcAScsgo3qWYeIOXtMWbPzBR6W3CkKZA5WpW58k9vjZTBfiqwvgu6poB2DE" 
          alt="Smiling Patient" 
          className="hero__img"
        />
        <div className="hero__overlay"></div>
      </div>
      
      <div className="hero__container container-max">
        <div className="hero__content">
          <span className="hero__badge">Trusted Dental Care</span>
          <h1 className="hero__title">
            Your Smile, <br/>
            <span className="hero__title--highlighted">Our Priority</span>
          </h1>
          <p className="hero__description">
            Experience world-class dental care in a calm, modern environment. We combine cutting-edge technology with a patient-first approach to give you the smile you deserve.
          </p>
          <div className="hero__actions">
            <button className="btn btn-primary">Book Appointment</button>
            <button className="btn btn-secondary">Our Services</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
