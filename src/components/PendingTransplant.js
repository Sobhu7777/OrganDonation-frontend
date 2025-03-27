import React from 'react';
import './PendingTransplant.css';

export default function PendingTransplant({ transplants }) {
  return (
    <div className="transplant-list-container">
      <h2>Pending Transplants</h2>
      <div className="transplant-list">
        {transplants.map((transplant, index) => (
          <div key={index} className="transplant-item">
            <div className="transplant-header">
              <h4>{transplant.recipientName} - {transplant.organNeeded}</h4>
            </div>
            <div className="transplant-details">
              <p><strong>Recipient ID:</strong> {transplant.recipientId}</p>
              <p><strong>Transplant Date:</strong> {transplant.transplantDate}</p>
              <p><strong>Transplant Time:</strong> {transplant.transplantTime}</p>
              <p><strong>Medical Team:</strong> {transplant.medicalTeam}</p>
              <p><strong>Head of Operation:</strong> {transplant.headOfOperation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
