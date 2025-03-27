import React, { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import MedicalReport from './MedicalReport';
import DonorReg from './DonorReg';
import OrganModal from './OrganModal'; // Import the OrganModal component
import './DonorProfile.css';

export default function DonorProfile() {
  const [isRegistered, setIsRegistered] = useState(false); // Track registration status
  const [showMedicalReport, setShowMedicalReport] = useState(false); // Show Medical Report form
  const [showDonorForm, setShowDonorForm] = useState(false); // Show Donor Registration form
  const [showUpdateForm, setShowUpdateForm] = useState(false); // Show Update Profile form
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

  const handleUpdateSubmit = (updatedDonorData) => {
    setDonorData(updatedDonorData);
    setShowUpdateForm(false); // Close the update form after submitting
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

            {/* Show Medical Report Button */}
            <Button
              variant="info"
              onClick={() => setShowMedicalReport(true)}
              className="medical-report-button"
            >
              Show Medical Report
            </Button>

            {/* Update Profile Button */}
            <Button
              variant="secondary"
              onClick={() => setShowUpdateForm(true)}
              className="update-profile-button"
            >
              Update Profile
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

      {/* Update Donor Profile Modal */}
      {isRegistered && (
        <OrganModal
          show={showUpdateForm}
          handleClose={() => setShowUpdateForm(false)}
          handleSave={handleUpdateSubmit}
          donorData={donorData} // Pass existing donor data for updating
        />
      )}
    </div>
  );
}


