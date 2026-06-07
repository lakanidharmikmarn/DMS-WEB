import React, { useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import AuthLayout from '../AuthLayout';
import './ForgotPassword.scss';

const RecoveryIcon = () => (
  <svg
    className="forgot-password__icon-svg"
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M19.25 9.25C17.43 6.82 14.48 5.25 11.25 5.25C7.08 5.25 3.75 8.58 3.75 12.75"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
    <path
      d="M8.75 18.75C10.57 21.18 13.52 22.75 16.75 22.75C20.92 22.75 24.25 19.42 24.25 15.25"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
    <path
      d="M20.75 5.75V9.25H17.25"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.25 22.25V18.75H10.75"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="10.75"
      y="12.5"
      width="6.5"
      height="5"
      rx="1"
      stroke="currentColor"
      strokeWidth="1.75"
    />
    <path
      d="M12.25 12.5V11.25C12.25 10.15 13.15 9.25 14.25 9.25C15.35 9.25 16.25 10.15 16.25 11.25V12.5"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
  </svg>
);

const ForgotPassword = () => {
  const toast = useRef(null);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      email: ''
    }
  });

  const onSubmit = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        toast.current.show({
          severity: 'success',
          summary: 'OTP Code Sent',
          detail: `Verification code sent to ${data.email}.`,
          life: 2000
        });

        setTimeout(() => {
          navigate('/otp-verification', { state: { email: data.email } });
        }, 1500);

        resolve();
      }, 1000);
    });
  };

  return (
    <AuthLayout
      showBackButton={false}
      layoutType="centered-card"
      carouselActiveIndex={0}
      showFooterLinks={false}
    >
      <Toast ref={toast} position="top-right" />

      <div className="forgot-password">
        <div className="auth-header-icon auth-header-icon--recovery">
          <RecoveryIcon />
        </div>

        <header className="auth-recovery-header">
          <h1 className="auth-card__title">Forgot Password?</h1>
          <p className="auth-card__subtitle">
            Enter your email address and we&apos;ll send you an OTP to reset your password.
          </p>
        </header>

        <form onSubmit={handleSubmit(onSubmit)} className="auth-card__form forgot-password__form" noValidate>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-with-icon-left">
              <i className="pi pi-envelope input-prefix-icon"></i>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: 'Email address is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                    message: 'Please enter a valid email address'
                  }
                }}
                render={({ field, fieldState }) => (
                  <InputText
                    id="email"
                    {...field}
                    placeholder="e.g. name@clinic.com"
                    className={fieldState.invalid ? 'p-invalid' : ''}
                    autoFocus
                  />
                )}
              />
            </div>
            {errors.email && (
              <span className="form-group__error">
                <i className="pi pi-exclamation-circle"></i>
                {errors.email.message}
              </span>
            )}
          </div>

          <Button
            type="submit"
            label="Send Reset Link"
            icon="pi pi-arrow-right"
            iconPos="right"
            loading={isSubmitting}
            className="auth-btn-teal forgot-password__submit"
          />

          <Link to="/login" className="auth-back-link">
            <i className="pi pi-arrow-left"></i>
            <span>Back to Login</span>
          </Link>
        </form>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
