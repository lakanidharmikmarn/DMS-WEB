import React, { useRef, useMemo } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import AuthLayout from '../AuthLayout';
import './NewPassword.scss';

const NewPassword = () => {
  const toast = useRef(null);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      password: '',
      confirmPassword: ''
    }
  });

  const passwordVal = watch('password') || '';

  // Password strength calculation
  const strength = useMemo(() => {
    let score = 0;
    if (passwordVal.length >= 8) score++;
    if (/\d/.test(passwordVal)) score++;
    if (/[A-Z]/.test(passwordVal)) score++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(passwordVal)) score++;

    const labels = ['', 'Weak', 'Fair', 'Good', 'Strong'];
    const classes = ['', 'weak', 'fair', 'good', 'strong'];
    
    return {
      score,
      label: labels[score] || '',
      className: classes[score] || ''
    };
  }, [passwordVal]);

  const onSubmit = (data) => {
    if (strength.score < 2) {
      toast.current.show({
        severity: 'warn',
        summary: 'Weak Password',
        detail: 'Please choose a stronger password',
        life: 2000
      });
      return;
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        toast.current.show({
          severity: 'success',
          summary: 'Password Updated',
          detail: 'Your password has been reset successfully.',
          life: 2000
        });

        setTimeout(() => {
          navigate('/verified-successful');
        }, 1500);

        resolve();
      }, 1000);
    });
  };

  return (
    <AuthLayout
      showBackButton={false}
      layoutType="centered-card"
      floatingImage={true}
    >
      <Toast ref={toast} position="top-right" />

      {/* Shield Lock Icon */}
      <div className="auth-header-icon">
        <i className="pi pi-shield"></i>
      </div>

      <header className="auth-card__header" style={{ textAlign: 'center' }}>
        <h1 className="auth-card__title" style={{ textAlign: 'center', fontSize: '28px' }}>Reset Your Password</h1>
        <p className="auth-card__subtitle" style={{ textAlign: 'center' }}>
          Choose a strong password to secure your account.
        </p>
      </header>

      <form onSubmit={handleSubmit(onSubmit)} className="auth-card__form" noValidate>
        {/* New Password Field */}
        <div className="form-group">
          <label htmlFor="password">New Password</label>
          <Controller
            name="password"
            control={control}
            rules={{
              required: 'New password is required',
              minLength: { value: 8, message: 'Minimum 8 characters required' }
            }}
            render={({ field, fieldState }) => (
              <Password
                id="password"
                {...field}
                placeholder="Enter new password"
                toggleMask
                feedback={false}
                className={fieldState.invalid ? 'p-invalid' : ''}
                autoFocus
              />
            )}
          />
          {errors.password && (
            <span className="form-group__error">
              <i className="pi pi-exclamation-circle"></i>
              {errors.password.message}
            </span>
          )}
        </div>

        {/* Password Strength Meter */}
        {passwordVal.length > 0 && (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <span style={{ fontSize: '12.5px', color: '#64748b', fontWeight: '500' }}>Password Strength</span>
              <span style={{ fontSize: '12.5px', color: '#64748b', fontWeight: '600' }}>{strength.label}</span>
            </div>
            <div className="password-strength-meter">
              {[1, 2, 3, 4].map((level) => (
                <div
                  key={level}
                  className={`password-strength-meter__bar ${strength.score >= level ? `password-strength-meter__bar--active ${strength.className}` : ''}`}
                />
              ))}
            </div>
          </>
        )}

        <div className="password-requirement-text">
          <i className="pi pi-info-circle"></i>
          <span>Minimum 8 characters with numbers and symbols.</span>
        </div>

        {/* Confirm Password Field */}
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              required: 'Please confirm your new password',
              validate: (val) => val === passwordVal || 'Passwords do not match'
            }}
            render={({ field, fieldState }) => (
              <Password
                id="confirmPassword"
                {...field}
                placeholder="Confirm your password"
                toggleMask
                feedback={false}
                className={fieldState.invalid ? 'p-invalid' : ''}
              />
            )}
          />
          {errors.confirmPassword && (
            <span className="form-group__error">
              <i className="pi pi-exclamation-circle"></i>
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          label="Update Password"
          icon="pi pi-shield"
          iconPos="right"
          loading={isSubmitting}
          className="auth-btn-teal"
        />

        {/* Cancel link */}
        <Link to="/login" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', color: '#006591', fontWeight: '600', fontSize: '14px', marginTop: '12px' }}>
          Cancel and return to login
        </Link>

        {/* Security metadata footer */}
        <div className="auth-meta-footer">
          <div className="auth-meta-footer__item">
            <i className="pi pi-lock"></i>
            <span>AES-256 Encryption</span>
          </div>
          <div className="auth-meta-footer__item">
            <i className="pi pi-verified"></i>
            <span>Secure Session</span>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
};

export default NewPassword;
