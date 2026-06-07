import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (tabName) => {
    setActiveTab(tabName);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', icon: 'home' },
    { name: 'Services', icon: 'medical_services' },
    { name: 'Meet Our Team', icon: 'groups' },
    { name: 'Blog', icon: 'article' },
    { name: 'FAQs', icon: 'help' },
    { name: 'Contact Us', icon: 'contact_support' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <div className="navbar__logo">DentaCare</div>
        
        {/* Desktop Links */}
        <div className="navbar__links">
          <a className="navbar__link navbar__link--active" href="#">Home</a>
          <a className="navbar__link" href="#">Services</a>
          <a className="navbar__link" href="#">Blog</a>
          <a className="navbar__link" href="#">FAQs</a>
        </div>
        
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="navbar__btn navbar__btn--outline navbar__btn--desktop" onClick={() => navigate('/login')}>Sign In</button>
          <button className="navbar__btn navbar__btn--desktop">Book Appointment</button>
        </div>

        {/* Hamburger Menu Toggle (Mobile Only) */}
        <button className="navbar__hamburger" onClick={toggleMenu} aria-label="Open menu">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>

      {/* Mobile Navigation Drawer Page Overlay */}
      <div className={`navbar__mobile-menu ${isMenuOpen ? 'navbar__mobile-menu--open' : ''}`}>
        {/* Top Section */}
        <header className="navbar__mobile-header">
          <span className="navbar__mobile-logo">DentalCare</span>
          <button className="navbar__mobile-close" onClick={toggleMenu} aria-label="Close Menu">
            <span className="material-symbols-outlined">close</span>
          </button>
        </header>

        {/* Navigation Links */}
        <nav className="navbar__mobile-nav">
          <ul className="navbar__mobile-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  className={`navbar__mobile-link ${activeTab === link.name ? 'navbar__mobile-link--active' : ''}`} 
                  href="#" 
                  onClick={() => handleLinkClick(link.name)}
                >
                  <span className="material-symbols-outlined">{link.icon}</span>
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Call to Action & Footer Info */}
        <footer className="navbar__mobile-footer">
          <div className="navbar__mobile-cta-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
            <button className="navbar__mobile-cta-btn" style={{ backgroundColor: 'transparent', border: '2px solid var(--secondary)', color: 'var(--secondary)' }} onClick={() => { setIsMenuOpen(false); navigate('/login'); }}>
              <span className="material-symbols-outlined">login</span>
              Sign In
            </button>
            <button className="navbar__mobile-cta-btn" onClick={() => setIsMenuOpen(false)}>
              <span className="material-symbols-outlined">calendar_month</span>
              Book Appointment
            </button>
          </div>
          
          <div className="navbar__mobile-info">
            <div className="navbar__mobile-phone">
              <span className="material-symbols-outlined">call</span>
              <span className="navbar__mobile-phone-num">+1 (555) 000-DENT</span>
            </div>
            
            <div className="navbar__mobile-socials">
              <a href="#" className="navbar__mobile-social-link">
                <span className="material-symbols-outlined">public</span>
              </a>
              <a href="#" className="navbar__mobile-social-link">
                <span className="material-symbols-outlined">photo_camera</span>
              </a>
              <a href="#" className="navbar__mobile-social-link">
                <span className="material-symbols-outlined">share</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </nav>
  );
};

export default Navbar;
