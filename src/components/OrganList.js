import React from 'react';
import './OrganList.css';

const OrganList = ({ organs }) => {
  return (
    <div className="organ-list-container">
      <h2 className="title">Organ List</h2>
      <table className="organ-table">
        <thead>
          <tr>
            <th>Organ ID</th>
            <th>Organ Name</th>
            <th>Donor ID</th>
            <th>Donor Name</th>
            <th>Age of Donor</th>
            <th>Blood Type</th>
            <th>Organ Status</th>
            <th>Recipient ID</th>
            <th>Recipient Name</th>
            <th>Registration Date</th>
          </tr>
        </thead>
        <tbody>
          {organs.map((organ) => (
            <tr key={organ.Organ_id} className="organ-row">
              <td>{organ.Organ_id}</td>
              <td>{organ.Organ_name}</td>
              <td>{organ.Donor_id}</td>
              <td>{organ.Donor_name}</td>
              <td>{organ.age_of_donor}</td>
              <td>{organ.blood_type}</td>
              <td className={`status ${organ.organ_status.toLowerCase()}`}>{organ.organ_status}</td>
              <td>{organ.Recipient_id}</td>
              <td>{organ.Recipient_name}</td>
              <td>{organ.registration_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrganList;