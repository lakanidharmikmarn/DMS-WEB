import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container-max">
        {/* Column 1 - Bio */}
        <div className="footer__col footer__col--info">
          <div className="footer__logo">DentaCare</div>
          <p className="footer__description">
            Leading the way in modern dentistry with a commitment to patient comfort and clinical excellence.
          </p>
          <div className="footer__socials">
            <span className="material-symbols-outlined footer__social-icon">social_leaderboard</span>
            <span className="material-symbols-outlined footer__social-icon">photo_camera</span>
            <span className="material-symbols-outlined footer__social-icon">terminal</span>
          </div>
        </div>

        {/* Column 2 - Contact */}
        <div className="footer__col">
          <h5 className="footer__title">Contact Us</h5>
          <ul className="footer__list">
            <li className="footer__item">
              <span className="material-symbols-outlined footer__item-icon">call</span>
              Phone: (555) 123-4567
            </li>
            <li className="footer__item">
              <span className="material-symbols-outlined footer__item-icon">pin_drop</span>
              Address: 123 Dental Plaza, City
            </li>
            <li className="footer__item">
              <span className="material-symbols-outlined footer__item-icon">schedule</span>
              Mon-Fri: 8am - 6pm
            </li>
          </ul>
        </div>

        {/* Column 3 - Quick Links */}
        <div className="footer__col">
          <h5 className="footer__title">Quick Links</h5>
          <ul className="footer__list">
            <li className="footer__item">
              <a className="footer__link" href="#">Privacy Policy</a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">Terms of Service</a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">Emergency Care</a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">Patient Portal</a>
            </li>
          </ul>
        </div>

        {/* Column 4 - Newsletter */}
        <div className="footer__col">
          <h5 className="footer__title">Newsletter</h5>
          <p className="footer__newsletter-desc">Stay updated with our latest health tips.</p>
          <form className="footer__newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email" 
              className="footer__newsletter-input"
            />
            <button type="submit" className="footer__newsletter-btn">
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">© 2024 DentaCare. All rights reserved.</p>
          <div className="footer__payments">
            <img 
              alt="Visa" 
              className="footer__payment-img" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwd9wOYswIyU0ykprsRj8gTXQlUOMoPEk6aCNNSKEXe-ZkJwUMFN8h5pbXTY4piAqOc6EHqgxP0sCWX43bHFfi9uWvJeUkrYzIT8QLe0ol0A3v_JSXgR_IDJatzpyjWKDProRuOx0uGvvXC5M645fbYq-1XecwYWu78bmsa5b29NopqW-p3PrPeO0wesub9xh-Qr6haeucyjC1UlHgPcOXYfKKgVnWYNQ2hEybIfyZtjIKMgjHNTv3Gi1_oiHJXrPUmm233Ex8mHs"
            />
            <img 
              alt="Mastercard" 
              className="footer__payment-img" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHw4bzyCDhWo1zzIFAJy3RLJDxZDMwWL62wOKw3HKd24l6SAoZ_bh6XMq4HzQ-UHMU5xGkzxSYkGHth_qDAYChIJ70i2gOpYPLHBJDcSil6325YF2x-Fv2kyxF4VAHi98Rrt_kMdFJbsbIjzx25gWi775q3bITu2nfACKEo5t0IDyEVshuPFQa2tN94krVHpfwUea3yXOLS1yVNMuQShDuF4HDN3ILkq-J8GPtnP_9xkG9PqGcZ9J3cul-RLnpjz6eFQ9CxukExOw"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
