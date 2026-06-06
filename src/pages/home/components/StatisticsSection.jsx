import React, { useState, useEffect, useRef } from 'react';
import './StatisticsSection.scss';

const StatisticsSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [displayValues, setDisplayValues] = useState({
    years: 0,
    patients: 0,
    rating: 0
  });
  const sectionRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    // Create intersection observer to detect when section enters viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only trigger animation once when section becomes visible
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Disconnect observer after first trigger
          observer.disconnect();
        }
      },
      {
        threshold: 0.2 // Trigger when 20% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  // Animate numbers when section becomes visible
  useEffect(() => {
    if (!hasAnimated) return;

    const animationDuration = 2500; // 2.5 seconds in milliseconds
    const startTime = Date.now();
    const startValues = { years: 0, patients: 0, rating: 0 };
    const endValues = { years: 18, patients: 12, rating: 4.9 };

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / animationDuration, 1); // 0 to 1

      setDisplayValues({
        years: Math.floor(startValues.years + (endValues.years - startValues.years) * progress),
        patients: Math.floor(startValues.patients + (endValues.patients - startValues.patients) * progress),
        rating: parseFloat((startValues.rating + (endValues.rating - startValues.rating) * progress).toFixed(1))
      });

      // Continue animation if not complete
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section className="statistics-section" ref={sectionRef}>
      <div className="statistics-container">
        <h2 className="statistics-title">Why Choose DentaCare</h2>
        <p className="statistics-subtitle">Trusted by thousands of patients for exceptional dental care</p>

        <div className="statistics-grid">
          {/* Years of Practice */}
          <div className="statistics-card">
            <div className="statistics-card__content">
              <div className="statistics-card__number">
                {displayValues.years}
                <span className="statistics-card__suffix">+</span>
              </div>
              <h3 className="statistics-card__label">Years of Practice</h3>
              <p className="statistics-card__description">Dedicated to providing excellent dental care</p>
            </div>
            <div className="statistics-card__icon">
              <span className="material-symbols-outlined">trending_up</span>
            </div>
          </div>

          {/* Happy Patients */}
          <div className="statistics-card">
            <div className="statistics-card__content">
              <div className="statistics-card__number">
                {displayValues.patients}
                <span className="statistics-card__suffix">k</span>
              </div>
              <h3 className="statistics-card__label">Happy Patients</h3>
              <p className="statistics-card__description">Smiles we've created and maintained</p>
            </div>
            <div className="statistics-card__icon">
              <span className="material-symbols-outlined">sentiment_satisfied</span>
            </div>
          </div>

          {/* Average Rating */}
          <div className="statistics-card">
            <div className="statistics-card__content">
              <div className="statistics-card__number">
                {displayValues.rating}
                <span className="statistics-card__suffix">★</span>
              </div>
              <h3 className="statistics-card__label">Average Rating</h3>
              <p className="statistics-card__description">Highly rated by our valued patients</p>
            </div>
            <div className="statistics-card__icon">
              <span className="material-symbols-outlined">star_rate</span>
            </div>
          </div>

          {/* 24/7 Online Booking */}
          <div className="statistics-card">
            <div className="statistics-card__content">
              <div className="statistics-card__number">
                24<span className="statistics-card__suffix">/7</span>
              </div>
              <h3 className="statistics-card__label">Online Booking</h3>
              <p className="statistics-card__description">Book appointments anytime, anywhere</p>
            </div>
            <div className="statistics-card__icon">
              <span className="material-symbols-outlined">schedule</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
