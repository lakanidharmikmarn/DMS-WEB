import React, { useState, useEffect } from 'react';
import './ScrollToTop.scss';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    // Calculate scroll percentage
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;

    // Show button when scrolled 30% or more
    if (scrolled >= 30) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'scroll-to-top--visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
        {/* Background Circle with Pulse Animation */}
        <circle cx="50" cy="50" r="48" fill="currentColor" opacity="0.9">
          <animate attributeName="r" values="46;48;46" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.9;1;0.9" dur="3s" repeatCount="indefinite" />
        </circle>

        {/* Arrow Path with Draw Animation */}
        <path
          d="M50 70V30M50 30L30 50M50 30L70 50"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="0,200"
        >
          <animate attributeName="stroke-dasharray" from="0,200" to="200,200" dur="1s" fill="freeze" />
        </path>
      </svg>
    </button>
  );
};

export default ScrollToTop;
