import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles;
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

function HomePage() {
  return (
    <Container fluid className="min-vh-100 bg-light d-flex flex-column justify-content-center">
      <header className="text-center mb-5">
        <h1 className="display-4 text-primary mb-3">Save Lives, Be a Donor</h1>
        <p className="lead text-muted">Join our life-saving community by signing up to be an organ donor today.</p>
        <Button variant="success" size="lg" className="mt-4">Sign Up</Button>
      </header>
      <Row className="text-center justify-content-center">
        <Col xs={12} sm={6} md={3} className="mb-4">
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="text-success">Donors</Card.Title>
              <Card.Text className="display-4">1,234</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3} className="mb-4">
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="text-success">Organs</Card.Title>
              <Card.Text className="display-4">567</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3} className="mb-4">
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="text-success">Transplants</Card.Title>
              <Card.Text className="display-4">890</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3} className="mb-4">
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="text-success">Recipients</Card.Title>
              <Card.Text className="display-4">456</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="text-center mt-5">
        <Button variant="primary" size="lg">Login</Button>
      </div>
    </Container>
  )
}

export default HomePage
