import { useRef, useMemo } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import AuthLayout from '../AuthLayout';
import './NewPassword.scss';

const ShieldLockIcon = () => (
  <svg
    className="new-password__icon-svg"
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M14 4.25L6.75 7.75V13C6.75 17.35 9.94 21.45 14 22.55C18.06 21.45 21.25 17.35 21.25 13V7.75L14 4.25Z"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="11.25"
      y="13.25"
      width="5.5"
      height="4.5"
      rx="0.75"
      stroke="currentColor"
      strokeWidth="1.75"
    />
    <path
      d="M12.75 13.25V12.25C12.75 11.42 13.42 10.75 14.25 10.75C15.08 10.75 15.75 11.42 15.75 12.25V13.25"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
  </svg>
);

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

  const onSubmit = () => {
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
      showFooterLinks={false}
    >
      <Toast ref={toast} position="top-right" />

      <div className="new-password">
        <div className="auth-header-icon auth-header-icon--recovery">
          <ShieldLockIcon />
        </div>

        <header className="auth-recovery-header">
          <h1 className="auth-card__title">Reset Your Password</h1>
          <p className="auth-card__subtitle">
            Choose a strong password to secure your account.
          </p>
        </header>

        <form onSubmit={handleSubmit(onSubmit)} className="auth-card__form new-password__form" noValidate>
          <div className="form-group">
            <label htmlFor="password">New Password</label>
            <div className="input-with-icon-left">
              <i className="pi pi-lock input-prefix-icon"></i>
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
            </div>
            {errors.password && (
              <span className="form-group__error">
                <i className="pi pi-exclamation-circle"></i>
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="password-strength-block">
            <div className="password-strength-header">
              <span>Password Strength</span>
              {strength.label && <span>{strength.label}</span>}
            </div>
            <div className="password-strength-meter">
              {[1, 2, 3, 4].map((level) => (
                <div
                  key={level}
                  className={`password-strength-meter__bar ${
                    strength.score >= level
                      ? `password-strength-meter__bar--active ${strength.className}`
                      : ''
                  }`}
                />
              ))}
            </div>
          </div>

          <p className="password-requirement-text">
            <i className="pi pi-info-circle"></i>
            <span>Minimum 8 characters with numbers and symbols.</span>
          </p>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="input-with-icon-left">
              <i className="pi pi-lock input-prefix-icon"></i>
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
            </div>
            {errors.confirmPassword && (
              <span className="form-group__error">
                <i className="pi pi-exclamation-circle"></i>
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <Button
            type="submit"
            label="Update Password"
            icon="pi pi-shield"
            iconPos="right"
            loading={isSubmitting}
            className="auth-btn-teal new-password__submit"
          />

          <Link to="/login" className="auth-cancel-link">
            Cancel and return to login
          </Link>

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
      </div>
    </AuthLayout>
  );
};

export default NewPassword;
