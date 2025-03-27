import React, { useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import './MedicalReport.css'; // Importing CSS file

export default function MedicalReport() {
    const [report, setReport] = useState({
        reportType: '',
        doctorName: '',
        dateOfReport: '',
        organCompatibility: [],
      });
    
      const organOptions = ['Kidney', 'Liver', 'Heart', 'Lung'];
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setReport((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setReport((prev) => {
          if (checked) {
            return { ...prev, organCompatibility: [...prev.organCompatibility, value] };
          } else {
            return {
              ...prev,
              organCompatibility: prev.organCompatibility.filter((organ) => organ !== value),
            };
          }
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Medical Report Submitted: ', report);
      };
    
      return (
        <div className="medical-report">
          <h2 className="title">Medical Report</h2>
          <Card className="report-card">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formReportType">
                  <Form.Label>Report Type</Form.Label>
                  <Form.Control
                    type="text"
                    name="reportType"
                    value={report.reportType}
                    onChange={handleChange}
                    placeholder="Enter report type (e.g., Blood Test, X-Ray)"
                    required
                    className="input-field"
                  />
                </Form.Group>
    
                <Form.Group controlId="formDoctorName">
                  <Form.Label>Doctor's Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="doctorName"
                    value={report.doctorName}
                    onChange={handleChange}
                    placeholder="Enter doctor's name"
                    required
                    className="input-field"
                  />
                </Form.Group>
    
                <Form.Group controlId="formDateOfReport">
                  <Form.Label>Date of Report</Form.Label>
                  <Form.Control
                    type="date"
                    name="dateOfReport"
                    value={report.dateOfReport}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </Form.Group>
    
                <Form.Group controlId="formOrganCompatibility">
                  <Form.Label>Organ Compatibility</Form.Label>
                  {organOptions.map((organ, index) => (
                    <Form.Check
                      key={index}
                      type="checkbox"
                      label={organ}
                      value={organ}
                      onChange={handleCheckboxChange}
                      className="checklist-item"
                    />
                  ))}
                </Form.Group>
    
                <Button variant="primary" type="submit" className="submit-button">
                  Submit Report
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      );
}
