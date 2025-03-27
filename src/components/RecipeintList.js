import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import './RecipientList.css';

const RecipientList = ({ recipients }) => {
  return (
    <div className="recipient-list-container">
      {recipients.map((recipient) => (
        <Card className="recipient-card" key={recipient.recipient_id}>
          <Card.Body>
            <h4>{recipient.name}</h4>
            <p><strong>Recipient ID:</strong> {recipient.recipient_id}</p>
            <p><strong>DOB:</strong> {recipient.dob}</p>
            <p><strong>Sex:</strong> {recipient.sex}</p>
            <p><strong>Contact No:</strong> {recipient.contactNo}</p>
            <p><strong>Medical Details:</strong> {recipient.medicalDetails}</p>
            <p><strong>Requested Organs:</strong> {recipient.requestedOrgans.join(', ')}</p>
            <p><strong>Registration Date:</strong> {recipient.registrationDate}</p>
            <p>
              <strong>Transplant Status:</strong>{' '}
              <Badge bg={
                recipient.transplantStatus === 'Pending' ? 'warning' :
                recipient.transplantStatus === 'In Progress' ? 'primary' :
                'success'
              }>
                {recipient.transplantStatus}
              </Badge>
            </p>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default RecipientList;
