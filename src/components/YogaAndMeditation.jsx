import React from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import imagecarousel1 from '../imagecarousel 1.jpg';

const YogaAndMeditation = () => {
  return (
    <div className="container py-5 yoga-section">
      <h3 className="text-center mb-5 fw-bold">
        Ayurveda
      </h3>

      <div className="container mt-5">
        <p className="text-center mb-4 fw-bold">
          The learning and practicing of Ayurveda with the help of conventional remedies.
        </p>

        <Container fluid className="py-5 bg-light">
          <Container>
            <Row className="align-items-center">
              <Col md={6} className="mb-4 mb-md-0">
                <img
                  src={imagecarousel1}
                  alt="Panchakarma Treatment"
                  className="img-fluid rounded shadow"
                  style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
                />
              </Col>
              <Col md={6}>
                <h4 className="text-uppercase text-muted mb-3">
                  Vedic Knowledge
                </h4>
                <h6 className="fw-bold mb-4">
                  We offer our guests the chance to learn more about Ayurveda and the systems of Indian Philosophy of which it forms an integral part.
                </h6>
                <p>
                  The daily practice of meditation and Yoga, Ayurvedic massage training, regular Ayurvedic cookery workshops and lectures on the six 
                  Vedanta schools of Indian philosophy give our guests the chance to experience a transformative retreat at Kairali-The Ayurvedic Healing Village.
                </p>
                <Link to="/contact">
                  <Button variant="primary" size="sm" className="custom-button">
                    Book Your Appointment
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </Container>

      
      </div>
    </div>
  );
};

export default YogaAndMeditation;
