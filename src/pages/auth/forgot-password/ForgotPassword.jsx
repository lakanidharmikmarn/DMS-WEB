import { useRef } from 'react';
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
    viewBox="-112.64 -112.64 737.28 737.28"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ transform: 'scaleY(-1)' }}
  >
    {/* Circular background */}
    <rect
      x="-112.64"
      y="-112.64"
      width="737.28"
      height="737.28"
      rx="368.64"
      fill="#dbeafe"
      stroke="none"
    />
    {/* Icon path */}
    <g fill="none" fillRule="evenodd">
      <g fill="#006591" transform="translate(42.666667, 42.666667)">
        <path d="M405.333333,3.55271368e-14 L405.333333,426.666667 L170.666667,426.666667 L170.666667,341.333333 L213.333333,341.333333 L213.333333,384 L362.666667,384 L362.666667,42.6666667 L213.333333,42.6666667 L213.333333,85.3333333 L170.666667,85.3333333 L170.666667,3.55271368e-14 L405.333333,3.55271368e-14 Z M74.6666667,138.666667 C108.491057,138.666667 137.06239,161.157677 146.241432,192.000465 L320,192 L320,234.666667 L298.666667,234.666667 L298.666667,277.333333 L234.666667,277.333333 L234.666667,234.666667 L146.241432,234.666202 C137.06239,265.508989 108.491057,288 74.6666667,288 C33.4294053,288 7.10542736e-15,254.570595 7.10542736e-15,213.333333 C7.10542736e-15,172.096072 33.4294053,138.666667 74.6666667,138.666667 Z M74.6666667,181.333333 C56.9935547,181.333333 42.6666667,195.660221 42.6666667,213.333333 C42.6666667,231.006445 56.9935547,245.333333 74.6666667,245.333333 C92.3397787,245.333333 106.666667,231.006445 106.666667,213.333333 C106.666667,195.660221 92.3397787,181.333333 74.6666667,181.333333 Z" />
      </g>
    </g>
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
        <div className="forgot-password__icon-wrapper">
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
