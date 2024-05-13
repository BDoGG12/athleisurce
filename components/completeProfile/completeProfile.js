import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import classes from './CompleteProfile.module.css'; // Import the CSS file

const CompleteProfile = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send formData to your backend or do something else with it
    console.log(formData);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2>Complete Your Profile</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className={classes.formGroup}  controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
            </Form.Group>
            <Form.Group className={classes.formGroup}  controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
            </Form.Group>
            <Form.Group className={classes.formGroup}  controlId="dob">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" name="dob" value={formData.dob} onChange={handleChange} />
            </Form.Group>
            <Form.Group className={classes.formGroup}  controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} />
            </Form.Group>
            <Form.Group className={classes.formGroup}  controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" name="city" value={formData.city} onChange={handleChange} />
            </Form.Group>
            <Form.Group className={classes.formGroup}  controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" name="state" value={formData.state} onChange={handleChange} />
            </Form.Group>
            <Form.Group className={classes.formGroup}  controlId="postalCode">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} />
            </Form.Group>
            <Form.Group className={classes.formGroup}  controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CompleteProfile;
