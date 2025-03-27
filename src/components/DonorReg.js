import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function DonorReg({ compatibleOrgans, onSubmit }) {
  const [name, setName] = useState('');
  const [sex, setSex] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [organs, setOrgans] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState(['']);

  const handleCheckboxChange = (organ) => {
    if (organs.includes(organ)) {
      setOrgans(organs.filter((o) => o !== organ));
    } else {
      setOrgans([...organs, organ]);
    }
  };

  const handlePhoneNumberChange = (index, value) => {
    const updatedPhones = [...phoneNumber];
    updatedPhones[index] = value;
    setPhoneNumber(updatedPhones);
  };

  const handleAddPhoneNumber = () => {
    setPhoneNumber([...phoneNumber, '']);
  };

  const handleSubmit = () => {
    onSubmit({
      name,
      sex,
      bloodType,
      organs,
      phoneNumber
    });
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Sex:</Form.Label>
        <Form.Control as="select" value={sex} onChange={(e) => setSex(e.target.value)}>
          <option value="">Select...</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Blood Type:</Form.Label>
        <Form.Control as="select" value={bloodType} onChange={(e) => setBloodType(e.target.value)}>
          <option value="">Select...</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Select Organs to Donate:</Form.Label>
        {compatibleOrgans.map((organ, index) => (
          <Form.Check
            key={index}
            type="checkbox"
            label={organ}
            checked={organs.includes(organ)}
            onChange={() => handleCheckboxChange(organ)}
          />
        ))}
      </Form.Group>

      <Form.Group>
        <Form.Label>Phone Numbers:</Form.Label>
        {phoneNumber.map((phone, index) => (
          <div key={index} className="mb-2">
            <Form.Control
              type="text"
              value={phone}
              onChange={(e) => handlePhoneNumberChange(index, e.target.value)}
            />
          </div>
        ))}
        <Button variant="secondary" onClick={handleAddPhoneNumber}>
          Add Another Phone Number
        </Button>
      </Form.Group>

      <Button variant="primary" onClick={handleSubmit}>
        Register
      </Button>
    </Form>
  );
}
