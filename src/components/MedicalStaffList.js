import React from 'react';
import './MedicalStaffList.css';

const MedicalStaffList = ({ staff }) => {
  return (
    <div className="staff-list-container">
      <h2>Medical Staff List</h2>
      <div className="staff-list">
        {staff.map((member, index) => (
          <div key={index} className="staff-card">
            <h3>{member.name}</h3>
            <p><strong>Role:</strong> <span className={`role ${member.role.toLowerCase()}`}>{member.role}</span></p>
            <p><strong>Department:</strong> {member.department}</p>
            <p><strong>Specialization:</strong> <span className={`specialization ${member.specialization.toLowerCase()}`}>{member.specialization}</span></p>
            <p><strong>Years of Experience:</strong> {member.experience} years</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalStaffList;
