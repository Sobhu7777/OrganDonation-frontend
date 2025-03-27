import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import './OrganDonors.css';

const OrganDonors = ({ donors }) => {
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Active':
        return <Badge bg='success'>Active</Badge>;
      case 'Pending':
        return <Badge bg='warning'>Pending</Badge>;
      case 'Inactive':
        return <Badge bg='secondary'>Inactive</Badge>;
      default:
        return <Badge bg='light'>Unknown</Badge>;
    }
  };

  return (
    <div className='donor-list-container'>
      <h2 className='list-title'>Organ Donors</h2>
      {donors.map((donor, index) => (
        <Card key={index} className='donor-card'>
          <Card.Body>
            <div className='donor-header'>
              <h4>{donor.name}</h4>
              {getStatusBadge(donor.status)}
            </div>
            <p><strong>Donor ID:</strong> {donor.donor_id}</p>
            <p><strong>DOB:</strong> {donor.dob}</p>
            <p><strong>Sex:</strong> {donor.sex}</p>
            <p><strong>Contact No.:</strong> {donor.contact}</p>
            <p><strong>Registration Date:</strong> {donor.registration_date}</p>
            <p><strong>Organs List:</strong> {donor.organs.join(', ')}</p>
            <Button className='view-medical-report' variant='info'>View Medical Report</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default OrganDonors;
