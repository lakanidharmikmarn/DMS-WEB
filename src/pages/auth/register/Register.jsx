import React, { useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import AuthLayout from '../AuthLayout';
import './Register.scss';

const Register = () => {
  const toast = useRef(null);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      password: '',
      terms: false
    }
  });

  const onSubmit = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        toast.current.show({
          severity: 'success',
          summary: 'Account Created',
          detail: 'Your registration was successful. Redirecting to login...',
          life: 2000
        });
        
        setTimeout(() => {
          navigate('/login');
        }, 1800);
        resolve();
      }, 1200);
    });
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Start your journey to a brighter, healthier smile."
      showBackButton={true}
      backToUrl="/login"
      layoutType="split-framed-image"
    >
      <Toast ref={toast} position="top-right" />

      {/* Social Sign up at the top */}
      <div className="login-social-btns">
        <button type="button" className="btn-social" onClick={() => {
          toast.current.show({ severity: 'info', summary: 'Google Connect', detail: 'Connecting via Google...', life: 1500 });
        }}>
          <svg width="18" height="18" viewBox="0 0 18 18" style={{ marginRight: '4px' }}>
            <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
            <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.683 5.482 18 9 18z" fill="#34A853"/>
            <path d="M3.964 10.711A5.41 5.41 0 0 1 3.682 9c0-.591.102-1.17.282-1.711V4.957H.957A8.993 8.993 0 0 0 0 9c0 1.452.348 2.827.957 4.043l3.007-2.332z" fill="#FBBC05"/>
            <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.844 11.426 0 9 0 5.482 0 2.438 2.317.957 5.289l3.007 2.332C4.672 5.164 6.656 3.58 9 3.58z" fill="#EA4335"/>
          </svg>
          <span>Google</span>
        </button>
        <button type="button" className="btn-social" onClick={() => {
          toast.current.show({ severity: 'info', summary: 'Apple Connect', detail: 'Connecting via Apple...', life: 1500 });
        }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" style={{ marginRight: '4px' }}>
            <path d="M15.562 9.025c-.022-2.203 1.802-3.262 1.884-3.313c-1.026-1.502-2.628-1.707-3.199-1.758c-1.365-.138-2.662.805-3.355.805c-.693 0-1.777-.787-2.928-.765c-1.513.022-2.908.88-3.688 2.238c-1.574 2.731-.403 6.772 1.127 8.977c.749 1.079 1.636 2.288 2.805 2.244c1.126-.044 1.551-.726 2.913-.726c1.363 0 1.748.726 2.937.703c1.21-.022 1.984-1.1 2.73-2.193c.863-1.261 1.22-2.483 1.24-2.545c-.027-.01-2.383-.913-2.411-3.62z"/>
            <path d="M13.393 2.505c.613-.743 1.025-1.777.912-2.805c-.883.036-1.95.589-2.582 1.331c-.567.653-.962 1.699-.834 2.712c.983.076 1.985-.487 2.704-1.238z"/>
          </svg>
          <span>Apple</span>
        </button>
      </div>

      <div className="login-social-divider" style={{ margin: '14px 0', fontSize: '11px' }}>or REGISTER WITH EMAIL</div>

      <form onSubmit={handleSubmit(onSubmit)} className="auth-card__form" noValidate>
        {/* Full Name */}
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <Controller
            name="fullName"
            control={control}
            rules={{ 
              required: 'Full name is required',
              minLength: { value: 3, message: 'Name must be at least 3 characters' }
            }}
            render={({ field, fieldState }) => (
              <InputText
                id="fullName"
                {...field}
                placeholder="John Doe"
                className={fieldState.invalid ? 'p-invalid' : ''}
              />
            )}
          />
          {errors.fullName && (
            <span className="form-group__error">
              <i className="pi pi-exclamation-circle"></i>
              {errors.fullName.message}
            </span>
          )}
        </div>

        {/* Email Address */}
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
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
                placeholder="john@example.com"
                className={fieldState.invalid ? 'p-invalid' : ''}
              />
            )}
          />
          {errors.email && (
            <span className="form-group__error">
              <i className="pi pi-exclamation-circle"></i>
              {errors.email.message}
            </span>
          )}
        </div>

        {/* 2-Column Row for Phone & Password */}
        <div className="form-row-grid">
          {/* Phone Number */}
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <Controller
              name="phone"
              control={control}
              rules={{
                required: 'Phone is required',
                pattern: {
                  value: /^[0-9+()-\s]{10,15}$/,
                  message: 'Enter valid phone'
                }
              }}
              render={({ field, fieldState }) => (
                <InputText
                  id="phone"
                  {...field}
                  placeholder="+1 (555) 000-0000"
                  className={fieldState.invalid ? 'p-invalid' : ''}
                />
              )}
            />
            {errors.phone && (
              <span className="form-group__error">
                <i className="pi pi-exclamation-circle"></i>
                {errors.phone.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Controller
              name="password"
              control={control}
              rules={{
                required: 'Password is required',
                minLength: { value: 8, message: 'Min 8 characters' }
              }}
              render={({ field, fieldState }) => (
                <Password
                  id="password"
                  {...field}
                  placeholder="••••••••"
                  toggleMask
                  feedback={false}
                  className={fieldState.invalid ? 'p-invalid' : ''}
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
        </div>

        {/* Checkbox Agreement */}
        <div className="form-group" style={{ gap: '0', marginTop: '4px' }}>
          <Controller
            name="terms"
            control={control}
            rules={{ required: 'You must agree to register' }}
            render={({ field, fieldState }) => (
              <label htmlFor="terms" className="remember-me" style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', lineHeight: '1.4' }}>
                <Checkbox
                  inputId="terms"
                  onChange={(e) => field.onChange(e.checked)}
                  checked={field.value}
                  className={fieldState.invalid ? 'p-invalid' : ''}
                  style={{ marginTop: '2px' }}
                />
                <span>
                  By creating an account, I agree to the <Link to="#" style={{ color: '#006591', fontWeight: '600' }}>Terms of Service</Link> and{' '}
                  <Link to="#" style={{ color: '#006591', fontWeight: '600' }}>Privacy Policy</Link> regarding my clinical data.
                </span>
              </label>
            )}
          />
          {errors.terms && (
            <span className="form-group__error" style={{ marginTop: '6px' }}>
              <i className="pi pi-exclamation-circle"></i>
              {errors.terms.message}
            </span>
          )}
        </div>

        {/* Submit button (Teal-blue background) */}
        <Button
          type="submit"
          label="Create Account"
          loading={isSubmitting}
          className="auth-btn-teal"
        />
      </form>

      {/* Footer Link */}
      <footer className="auth-card__footer">
        Already have an account? 
        <Link to="/login">Login</Link>
      </footer>
    </AuthLayout>
  );
};

export default Register;
