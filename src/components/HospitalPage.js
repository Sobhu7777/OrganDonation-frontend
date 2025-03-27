import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './HospitalPage.css';

export default function HospitalPage() {
  return (
    <div className="hospital-page-container">
      {/* Hospital Profile Section */}
      <div className="hospital-profile">
        <h1 className="hospital-name">Sunrise Medical Center</h1>
        <p className="hospital-location">123 Health St, Welltown, 98765</p>
        <p className="hospital-phone">Phone: +1 555 987 6543</p>
      </div>

      <h2 className="hospital-page-title">Hospital Data Dashboard</h2>
      <div className="sections-grid">
        <Card className="section-card">
          <Button variant="primary" className="section-button">
            View Organ Donors
          </Button>
        </Card>
        <Card className="section-card">
          <Button variant="primary" className="section-button">
            View Organ Recipients
          </Button>
        </Card>
        <Card className="section-card">
          <Button variant="primary" className="section-button">
            Organs List
          </Button>
        </Card>
        <Card className="section-card">
          <Button variant="primary" className="section-button">
            Medical Staff
          </Button>
        </Card>
        <Card className="section-card">
          <Button variant="primary" className="section-button">
            Pending Transplants
          </Button>
        </Card>
      </div>
    </div>
  );
}
