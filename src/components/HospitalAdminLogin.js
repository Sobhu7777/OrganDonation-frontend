import React, { useState } from 'react';
import './HospitalAdminLogin.css';

export default function HospitalAdminLogin() {
  const [adminId, setAdminId] = useState('');

  return (
    <div className="admin-login-container">
      <div className="admin-login-header">
        <h1>Hospital Administrator Login</h1>
      </div>
      <div className="admin-login-form">
        <div className="form-group">
          <label htmlFor="adminId">Administrator ID:</label>
          <input
            type="password" /* Ensuring the ID is hidden like *** */
            className="form-control"
            id="adminId"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
            placeholder="Enter Admin ID"
          />
        </div>
        <button className="login-button">
          Login
        </button>
      </div>
    </div>
  );
}

