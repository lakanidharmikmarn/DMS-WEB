import React, { useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import AuthLayout from '../AuthLayout';
import './Login.scss';

const Login = () => {
  const toast = useRef(null);
  const navigate = useNavigate();
  
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false
    }
  });

  const onSubmit = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        toast.current.show({
          severity: 'success',
          summary: 'Login Successful',
          detail: `Welcome back to DentaCare!`,
          life: 2000
        });
        
        setTimeout(() => {
          navigate('/');
        }, 1500);
        resolve();
      }, 1000);
    });
  };

  return (
    <AuthLayout 
      title="Welcome Back" 
      subtitle="Please enter your credentials to access your account."
      showBackButton={true}
      backToUrl="/"
      layoutType="split-full-image"
    >
      <Toast ref={toast} position="top-right" />
      
      <form onSubmit={handleSubmit(onSubmit)} className="auth-card__form" noValidate>
        {/* Email Field with prefix icon */}
        <div className="form-group">
          <label htmlFor="email">Username or Email</label>
          <div className="input-with-icon-left">
            <i className="pi pi-envelope input-prefix-icon"></i>
            <Controller
              name="email"
              control={control}
              rules={{
                required: 'Username or Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                  message: 'Please enter a valid email address'
                }
              }}
              render={({ field, fieldState }) => (
                <InputText
                  id="email"
                  {...field}
                  placeholder="name@dentacare.com"
                  className={fieldState.invalid ? 'p-invalid' : ''}
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

        {/* Password Field with prefix icon */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="input-with-icon-left">
            <i className="pi pi-lock input-prefix-icon"></i>
            <Controller
              name="password"
              control={control}
              rules={{ required: 'Password is required' }}
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
          </div>
          {errors.password && (
            <span className="form-group__error">
              <i className="pi pi-exclamation-circle"></i>
              {errors.password.message}
            </span>
          )}
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="form-row-actions">
          <Controller
            name="rememberMe"
            control={control}
            render={({ field }) => (
              <label htmlFor="rememberMe" className="remember-me">
                <Checkbox
                  inputId="rememberMe"
                  onChange={(e) => field.onChange(e.checked)}
                  checked={field.value}
                />
                <span>Remember me</span>
              </label>
            )}
          />
          <Link to="/forgot-password" className="forgot-password-link">
            Forgot Password?
          </Link>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          label="Sign In"
          icon="pi pi-arrow-right"
          iconPos="right"
          loading={isSubmitting}
          className="auth-btn-navy"
        />

        {/* Divider */}
        <div className="login-social-divider">Or sign in with</div>

        {/* Google & Apple side-by-side */}
        <div className="login-social-btns">
          <button type="button" className="btn-social" onClick={() => {
            toast.current.show({ severity: 'info', summary: 'Google Sign In', detail: 'Connecting to Google...', life: 1500 });
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
            toast.current.show({ severity: 'info', summary: 'Apple Sign In', detail: 'Connecting to Apple...', life: 1500 });
          }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" style={{ marginRight: '4px' }}>
              <path d="M15.562 9.025c-.022-2.203 1.802-3.262 1.884-3.313c-1.026-1.502-2.628-1.707-3.199-1.758c-1.365-.138-2.662.805-3.355.805c-.693 0-1.777-.787-2.928-.765c-1.513.022-2.908.88-3.688 2.238c-1.574 2.731-.403 6.772 1.127 8.977c.749 1.079 1.636 2.288 2.805 2.244c1.126-.044 1.551-.726 2.913-.726c1.363 0 1.748.726 2.937.703c1.21-.022 1.984-1.1 2.73-2.193c.863-1.261 1.22-2.483 1.24-2.545c-.027-.01-2.383-.913-2.411-3.62z"/>
              <path d="M13.393 2.505c.613-.743 1.025-1.777.912-2.805c-.883.036-1.95.589-2.582 1.331c-.567.653-.962 1.699-.834 2.712c.983.076 1.985-.487 2.704-1.238z"/>
            </svg>
            <span>Apple</span>
          </button>
        </div>
      </form>

      {/* Footer Link */}
      <footer className="auth-card__footer">
        Don't have an account? 
        <Link to="/register">Sign Up</Link>
      </footer>
    </AuthLayout>
  );
};

export default Login;
