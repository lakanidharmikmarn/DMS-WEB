import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.scss';

const AuthLayout = ({
  children,
  title,
  subtitle,
  showBackButton = true,
  backToUrl = '/',
  layoutType = 'centered-card', // 'split-full-image' | 'split-framed-image' | 'centered-card'
  floatingImage = false,
  carouselActiveIndex = null, // null | 0 | 1
  showFooterLinks = true
}) => {
  const navigate = useNavigate();

  // Render left sidebar panel based on type
  const renderBrandPanel = () => {
    if (layoutType === 'split-full-image') {
      return (
        <div className="auth-brand-panel auth-brand-panel--dark">
          <div className="auth-brand-panel__logo">
            {/* Custom SVG Tooth icon matching figma */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}>
              <path d="M12 2C10.5 2 9.5 3 9 4.5C8.5 3 7.5 2 6 2C3 2 1 4.5 1 8C1 13.5 6.5 17 12 22C17.5 17 23 13.5 23 8C23 4.5 21 2 18 2C16.5 2 15.5 3 15 4.5C14.5 3 13.5 2 12 2Z" fill="#39b8fd"/>
            </svg>
            <span>DentaCare</span>
          </div>
          <div className="auth-brand-panel__content">
            <h1 className="auth-brand-panel__title">Precision Care for Your Perfect Smile.</h1>
            <p className="auth-brand-panel__subtitle">
              Access your clinical dashboard, manage appointments, and view patient records with our seamless, secure portal.
            </p>
          </div>
          <div className="auth-brand-panel__footer">
            &copy; 2026 DentaCare Inc. All rights reserved.
          </div>
        </div>
      );
    }

    if (layoutType === 'split-framed-image') {
      return (
        <div className="auth-brand-panel auth-brand-panel--light">
          <div className="auth-brand-panel__logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}>
              <path d="M12 2C10.5 2 9.5 3 9 4.5C8.5 3 7.5 2 6 2C3 2 1 4.5 1 8C1 13.5 6.5 17 12 22C17.5 17 23 13.5 23 8C23 4.5 21 2 18 2C16.5 2 15.5 3 15 4.5C14.5 3 13.5 2 12 2Z" fill="#39b8fd"/>
            </svg>
            <span>DentaCare</span>
          </div>
          <div className="auth-brand-panel__content">
            <h1 className="auth-brand-panel__title" style={{ fontSize: '38px' }}>Precision care, starting with you.</h1>
            <p className="auth-brand-panel__subtitle">
              Join DentaCare to manage appointments, view clinical records, and maintain your oral health with expert guidance.
            </p>
            <div className="auth-brand-panel__image-container">
              <img src="/images/dental_clinic_room.png" alt="Dental Clinic treatment chair and cabinets" />
            </div>
          </div>
          <div className="auth-brand-panel__footer">
            &copy; 2026 DentaCare Inc. All rights reserved.
          </div>
        </div>
      );
    }

    return null;
  };

  const isSplit = layoutType.startsWith('split');

  useEffect(() => {
    const html = document.documentElement;
    const { body } = document;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;

    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    };
  }, []);

  return (
    <div className="auth-page">
      <div className="auth-split">
        {/* Left Side Brand Panel (if split layout) */}
        {isSplit && renderBrandPanel()}

        {/* Right Side Form Panel */}
        <div className={`auth-form-panel ${!isSplit ? 'auth-form-panel--centered' : ''}`}>
          <div className="auth-form-wrapper">
            {!isSplit && (
              <div className="auth-centered-logo">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}>
                  <path d="M12 2C10.5 2 9.5 3 9 4.5C8.5 3 7.5 2 6 2C3 2 1 4.5 1 8C1 13.5 6.5 17 12 22C17.5 17 23 13.5 23 8C23 4.5 21 2 18 2C16.5 2 15.5 3 15 4.5C14.5 3 13.5 2 12 2Z" fill="#39b8fd"/>
                </svg>
                <span>DentaCare</span>
              </div>
            )}
            <div className={`auth-card ${!isSplit ? 'auth-card--shadowed' : ''} ${floatingImage ? 'auth-card--with-preview' : ''}`}>
              {/* Floating side image for NewPassword reset view */}
              {floatingImage && (
                <div className="auth-floating-preview">
                  <img src="/images/dental_clinic_room.png" alt="Dental room thumbnail preview" />
                </div>
              )}

              {showBackButton && (
                <button type="button" className="auth-card__back-btn" onClick={() => navigate(backToUrl)}>
                  <i className="pi pi-arrow-left"></i>
                  <span>Back</span>
                </button>
              )}

              {(title || subtitle) && (
                <header className="auth-card__header">
                  {title && <h1 className="auth-card__title">{title}</h1>}
                  {subtitle && <p className="auth-card__subtitle">{subtitle}</p>}
                </header>
              )}

              {children}
            </div>

            {/* Step indicators below card (Forgot Password / OTP flow) */}
            {carouselActiveIndex !== null && (
              <div className="auth-carousel-dots" aria-hidden="true">
                <span className={`dot ${carouselActiveIndex === 0 ? 'dot--active' : ''}`}></span>
                <span className={`dot ${carouselActiveIndex === 1 ? 'dot--active' : ''}`}></span>
              </div>
            )}
          </div>

          {/* Privacy Policy, Terms of Service, Support Links */}
          {showFooterLinks && (
          <footer className="auth-footer-links">
            <Link to="#" className="auth-footer-links__link">Privacy Policy</Link>
            <Link to="#" className="auth-footer-links__link">Terms of Service</Link>
            <Link to="#" className="auth-footer-links__link">Support</Link>
          </footer>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
