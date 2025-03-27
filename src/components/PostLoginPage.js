import React from 'react';
import { Button } from 'react-bootstrap';
import './PostLoginPage.css';

export default function PostLoginPage() {
  return (
    <div className="post-login-container">
      <header className="welcome-header">
        <h1>Empowering Lives Through Organ Donation</h1>
      </header>
      <subheader className="role-selection-subheader">
        <h3>Please select your role to continue</h3>
      </subheader>
      <div className="role-buttons">
        <Button variant="primary" className="role-button" onClick={() => window.location.href='/DonorProfile'}>
          Donor
        </Button>
        <Button variant="primary" className="role-button" onClick={() => window.location.href='/RecipientPage'}>
          Recipient
        </Button>
        <Button variant="primary" className="role-button" onClick={() => window.location.href='/HospitalAdminLogin'}>
          Hospital
        </Button>
      </div>
    </div>
  );
}
