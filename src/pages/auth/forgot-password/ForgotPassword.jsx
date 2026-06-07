import React, { useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import AuthLayout from '../AuthLayout';
import './ForgotPassword.scss';

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
    >
      <Toast ref={toast} position="top-right" />

      {/* Circular Recovery Icon */}
      <div className="auth-header-icon">
        <i className="pi pi-history"></i>
      </div>

      <header className="auth-card__header" style={{ textAlign: 'center' }}>
        <h1 className="auth-card__title" style={{ textAlign: 'center', fontSize: '28px' }}>Forgot Password?</h1>
        <p className="auth-card__subtitle" style={{ textAlign: 'center' }}>
          Enter your email address and we'll send you an OTP to reset your password.
        </p>
      </header>

      <form onSubmit={handleSubmit(onSubmit)} className="auth-card__form" noValidate>
        {/* Email Address */}
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

        {/* Submit button (Teal-blue button with arrow) */}
        <Button
          type="submit"
          label="Send Reset Link"
          icon="pi pi-arrow-right"
          iconPos="right"
          loading={isSubmitting}
          className="auth-btn-teal"
        />

        {/* Back to Login link */}
        <Link to="/login" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#64748b', fontWeight: '600', fontSize: '14px', marginTop: '16px', transition: 'color 0.2s' }} className="hover:text-primary">
          <i className="pi pi-arrow-left" style={{ fontSize: '12px' }}></i>
          <span>Back to Login</span>
        </Link>
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;
