import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import AuthLayout from '../AuthLayout';
import './VerifiedSuccessful.scss';

const VerifiedSuccessful = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout
      showBackButton={false}
      layoutType="centered-card"
    >
      <div className="auth-success-state">
        <div className="auth-success-state__icon-container">
          <i className="pi pi-check"></i>
        </div>

        <h2 className="auth-success-state__title">Password Reset Successful!</h2>
        
        <p className="auth-success-state__description">
          Your password has been updated successfully. You can now sign in with your new credentials.
        </p>

        <Button
          type="button"
          label="Go to Login"
          icon="pi pi-arrow-right"
          iconPos="right"
          onClick={() => navigate('/login')}
          className="auth-btn-teal"
          style={{ width: '100%', maxWidth: '300px' }}
        />
      </div>
    </AuthLayout>
  );
};

export default VerifiedSuccessful;
