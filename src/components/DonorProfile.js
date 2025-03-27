import React, { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import MedicalReport from './MedicalReport';
import DonorReg from './DonorReg';
import './DonorProfile.css';

export default function DonorProfile() {

  const [isRegistered, setIsRegistered] = useState(false); // Track registration status
  const [showMedicalReport, setShowMedicalReport] = useState(false); // Show Medical Report form
  const [showDonorForm, setShowDonorForm] = useState(false); // Show Donor Registration form
  const [medicalReportSubmitted, setMedicalReportSubmitted] = useState(false); // Track if medical report is submitted
  const [medicalReportData, setMedicalReportData] = useState(); // Store medical report data
  const [donorData, setDonorData] = useState(); // Store donor data

  const handleMedicalReportSubmit = (reportData) => {
    setMedicalReportData(reportData);
    setMedicalReportSubmitted(true);
    setShowMedicalReport(false); // Close Medical Report form after submission
    setShowDonorForm(true); // Open Donor Registration form
  };

  const handleDonorRegistrationSubmit = (donorData) => {
    setDonorData(donorData);
    setIsRegistered(true);
    setShowDonorForm(false); // Close Donor Registration form
  };

  return (
    <div className="donor-profile-container">
      {!isRegistered ? (
        <div className="unregistered-section">
          <h4>You haven't registered as a donor yet.</h4>
          <Button
            className="add-donor-button"
            variant="primary"
            onClick={() => setShowMedicalReport(true)}
          >
            +
          </Button>
        </div>
      ) : (
        <Card className="profile-card">
          <Card.Body>
            <h4>{donorData.name}</h4>
            <p><strong>Sex:</strong> {donorData.sex}</p>
            <p><strong>Blood Type:</strong> {donorData.bloodType}</p>
            <p><strong>Organs Donating:</strong> {donorData.organs.join(", ")}</p>
            <p><strong>Phone Numbers:</strong> {donorData.phoneNumber.join(", ")}</p>
            <Button
              variant="info"
              onClick={() => setShowMedicalReport(true)}
              className="medical-report-button"
            >
              Show Medical Report
            </Button>
          </Card.Body>
        </Card>
      )}

      {/* Medical Report Form Modal */}
      <Modal show={showMedicalReport} onHide={() => setShowMedicalReport(false)}>
        <MedicalReport handleSubmit={handleMedicalReportSubmit} />
      </Modal>

      {/* Donor Registration Form Modal */}
      {medicalReportSubmitted && (
        <Modal show={showDonorForm} onHide={() => setShowDonorForm(false)}>
          <DonorReg
            medicalReport={medicalReportData}
            handleSubmit={handleDonorRegistrationSubmit}
          />
        </Modal>
      )}
    </div>
  );
}


