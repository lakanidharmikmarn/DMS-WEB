import React from 'react';
import './WhyChooseUs.scss';

const WhyChooseUs = () => {
  return (
    <section className="why-us">
      <div className="why-us__container container-max">
        <div className="why-us__content">
          <h2 className="why-us__title">Experience the Difference</h2>
          
          <div className="why-us__features">
            {/* Feature 1 */}
            <div className="why-us__feature">
              <div className="why-us__feature-icon-wrapper">
                <span className="material-symbols-outlined why-us__feature-icon">verified_user</span>
              </div>
              <div className="why-us__feature-text">
                <h4 className="why-us__feature-title">Certified Expertise</h4>
                <p className="why-us__feature-desc">
                  Our team consists of board-certified specialists with over 15 years of combined clinical experience.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="why-us__feature">
              <div className="why-us__feature-icon-wrapper">
                <span className="material-symbols-outlined why-us__feature-icon">mood</span>
              </div>
              <div className="why-us__feature-text">
                <h4 className="why-us__feature-title">Patient Comfort First</h4>
                <p className="why-us__feature-desc">
                  We offer sedation options and a calming atmosphere designed specifically to reduce dental anxiety.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="why-us__feature">
              <div className="why-us__feature-icon-wrapper">
                <span className="material-symbols-outlined why-us__feature-icon">schedule</span>
              </div>
              <div className="why-us__feature-text">
                <h4 className="why-us__feature-title">Flexible Scheduling</h4>
                <p className="why-us__feature-desc">
                  Same-day emergency appointments and weekend hours to accommodate your busy lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="why-us__media">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC602Gkeb3KWtwo8NuouoFZDFzqYQEse0-5mqO21s6Xe-7d_7R5uEFFr5Rl1oFWkhqjfgvYnt90Tl7fxGWSCXMouuZmoGUcSgTSXH46yThaVC2dboGrZM34XILQpfzkjILfJElAgDT5lhQp88lAH8yGrx8PW-zrWeIrsdQVYd70vnDN_k_dyJuZ1RWztMBdRTKF4VAidDPgBakhMqOH-ZMaRF7h05gcGnhYjpaI-6XAtotd0HDV4qmD_fY-WYyvDONIWG284YMfdM" 
            alt="Dental Office" 
            className="why-us__img"
          />
          
          <div className="why-us__badge glass-card">
            <div className="why-us__rating-row">
              <span className="why-us__rating-num">4.9</span>
              <div className="why-us__stars">
                <span className="material-symbols-outlined why-us__star">star</span>
                <span className="material-symbols-outlined why-us__star">star</span>
                <span className="material-symbols-outlined why-us__star">star</span>
                <span className="material-symbols-outlined why-us__star">star</span>
                <span className="material-symbols-outlined why-us__star">star</span>
              </div>
            </div>
            <p className="why-us__badge-label">2,500+ Happy Patients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
