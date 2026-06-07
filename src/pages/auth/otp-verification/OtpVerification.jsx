import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import AuthLayout from '../AuthLayout';
import './OtpVerification.scss';

const OtpVerification = () => {
  const toast = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Retrieve email from recovery state
  const email = location.state?.email || 'user@example.com';
  
  // 6-digit OTP state as shown in Figma
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(58);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputRefs = useRef([]);

  // Active countdown timer
  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  // Focus the first input on render
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (value, index) => {
    if (value !== '' && !/^[0-9]$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus next input
    if (value !== '' && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Backspace auto-shift to previous input
    if (e.key === 'Backspace' && otp[index] === '' && index > 0 && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').trim().replace(/[^0-9]/g, '');
    
    if (pasteData.length === 0) return;

    const newOtp = [...otp];
    for (let i = 0; i < 6; i++) {
      if (pasteData[i]) {
        newOtp[i] = pasteData[i];
      }
    }
    setOtp(newOtp);

    const focusIndex = Math.min(pasteData.length - 1, 5);
    if (inputRefs.current[focusIndex]) {
      inputRefs.current[focusIndex].focus();
    }
  };

  const handleResend = () => {
    setTimer(58);
    setOtp(['', '', '', '', '', '']);
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
    toast.current.show({
      severity: 'info',
      summary: 'Code Resent',
      detail: `Verification code resent to ${email}`,
      life: 2000
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpCode = otp.join('');

    if (otpCode.length < 6) {
      toast.current.show({
        severity: 'warn',
        summary: 'Incomplete Code',
        detail: 'Please enter all 6 digits of the OTP code',
        life: 2000
      });
      return;
    }

    setIsSubmitting(true);

    // Mock verification (accepts code 123456 as correct for demo)
    setTimeout(() => {
      setIsSubmitting(false);
      if (otpCode === '123456') {
        toast.current.show({
          severity: 'success',
          summary: 'OTP Verified',
          detail: 'Email verified successfully. Let\'s reset your password.',
          life: 1500
        });

        setTimeout(() => {
          navigate('/new-password', { state: { verified: true } });
        }, 1200);
      } else {
        toast.current.show({
          severity: 'error',
          summary: 'Verification Failed',
          detail: 'Invalid verification code. Please enter 123456 to proceed.',
          life: 2500
        });
      }
    }, 1000);
  };

  return (
    <AuthLayout
      showBackButton={false}
      layoutType="centered-card"
      carouselActiveIndex={1}
      showFooterLinks={false}
    >
      <Toast ref={toast} position="top-right" />

      {/* Envelope / checkmark header icon */}
      <div className="auth-header-icon" style={{ backgroundColor: 'rgba(#39b8fd, 0.1)', color: '#006591' }}>
        <i className="pi pi-envelope-open" style={{ transform: 'scale(1.1)' }}></i>
      </div>

      <header className="auth-card__header" style={{ textAlign: 'center' }}>
        <h1 className="auth-card__title" style={{ textAlign: 'center', fontSize: '28px' }}>Verify Your Email</h1>
        <p className="auth-card__subtitle" style={{ textAlign: 'center' }}>
          We've sent a 6-digit code to your email. Enter it below to continue.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="auth-card__form">
        <div className="otp-inputs" onPaste={handlePaste} style={{ justifyContent: 'center', gap: '8px' }}>
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`otp-field ${digit ? 'has-value' : ''}`}
              autoComplete="off"
              style={{ width: '44px', height: '48px', fontSize: '18px' }}
            />
          ))}
        </div>

        {/* Resend and Timer layout */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="otp-timer">
            <i className="pi pi-clock" style={{ fontSize: '14px', marginRight: '4px' }}></i>
            <span>Resend code in <strong>00:{timer < 10 ? `0${timer}` : timer}</strong></span>
          </div>
          
          <div style={{ marginBottom: '8px' }}>
            <button
              type="button"
              className="resend-btn-text"
              onClick={handleResend}
              disabled={timer > 0}
              style={{ fontSize: '14px' }}
            >
              Resend Code
            </button>
          </div>
        </div>

        {/* Submit button (Teal-blue) */}
        <Button
          type="submit"
          label="Verify & Continue"
          loading={isSubmitting}
          className="auth-btn-teal"
        />
      </form>
    </AuthLayout>
  );
};

export default OtpVerification;
