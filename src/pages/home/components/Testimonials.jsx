import React from 'react';
import './Testimonials.scss';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      type: 'General Patient',
      rating: 5,
      avatarBg: 'avatar-bg--primary',
      quote: `"The team at DentaCare made me feel completely at ease. I've always had dental anxiety, but their gentle approach and advanced tech really changed my perspective. My smile has never looked better!"`,
      isFeatured: false
    },
    {
      id: 2,
      name: 'Michael Chen',
      type: 'Cosmetic Patient',
      rating: 5,
      avatarBg: 'avatar-bg--secondary',
      quote: `"Highly professional and results-oriented. I came in for cosmetic work and the process was seamless from digital mapping to final placement. The best dentist in the city, hands down."`,
      isFeatured: true
    },
    {
      id: 3,
      name: 'Emma Williams',
      type: 'Family Dentistry',
      rating: 5,
      avatarBg: 'avatar-bg--tertiary',
      quote: `"They were so patient with my kids. Finding a family-friendly dentist who is also technically proficient is rare. The office is beautiful and the staff is wonderful."`,
      isFeatured: false
    }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials__container container-max">
        <h2 className="testimonials__title">What Our Patients Say</h2>
        
        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <div 
              key={t.id} 
              className={`testimonials__card ${t.isFeatured ? 'testimonials__card--featured' : ''}`}
            >
              <div className="testimonials__stars">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined testimonials__star">star</span>
                ))}
              </div>
              
              <p className="testimonials__quote">{t.quote}</p>
              
              <div className="testimonials__user">
                <div className={`testimonials__avatar ${t.avatarBg}`}></div>
                <div className="testimonials__user-info">
                  <p className="testimonials__user-name">{t.name}</p>
                  <p className="testimonials__user-type">{t.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
