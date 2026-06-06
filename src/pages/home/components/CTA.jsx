import React from 'react';
import './CTA.scss';

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta__wrapper container-max">
        <div className="cta__card">
          <div className="cta__bg-shapes">
            <div className="cta__shape cta__shape--top-right"></div>
            <div className="cta__shape cta__shape--bottom-left"></div>
          </div>
          
          <div className="cta__content">
            <h2 className="cta__title">Ready for a Brighter Smile?</h2>
            <p className="cta__description">
              Book your consultation today and take the first step towards a lifetime of oral health. New patients get a free professional whitening consultation.
            </p>
            <div className="cta__action-wrapper">
              <button className="cta__btn">Book Your Appointment Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
