import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import AuthLayout from '../AuthLayout';
import LottieAnimation from '../../../components/lottie/LottieAnimation';
import './VerifiedSuccessful.scss';

const VerifiedSuccessful = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout
      showBackButton={false}
      layoutType="centered-card"
      showFooterLinks={false}
    >
      <div className="verified-success">
        <div className="verified-success__lottie-wrap">
          <LottieAnimation
            name="verified-success"
            loop={false}
            className="verified-success__lottie"
          />
        </div>

        <h1 className="verified-success__title">Password Reset Successful!</h1>

        <p className="verified-success__description">
          Your password has been updated successfully. You can now sign in with your new credentials.
        </p>

        <Button
          type="button"
          label="Go to Login"
          icon="pi pi-arrow-right"
          iconPos="right"
          onClick={() => navigate('/login')}
          className="auth-btn-teal verified-success__button"
        />
      </div>
    </AuthLayout>
  );
};

export default VerifiedSuccessful;
