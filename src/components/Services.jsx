import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaSpa, FaUserNurse, FaPrayingHands, FaComments } from 'react-icons/fa';

const services = [
  { icon: <FaSpa />, title: 'Ayurveda Treatment' },
  { icon: <FaUserNurse />, title: 'Ayurveda Packages' },
  { icon: <FaPrayingHands />, title: 'Yoga & Meditation' },
  { icon: <FaComments />, title: 'Online Consultation' },
];

function Services() {
  return (
    <section className="services-section">
      <Container>
        <Row className="mb-5">
          <Col md={6}>
          <h5>Our Services</h5>
            <h2>Amazing tranquility in our<br />ayurveda retreats</h2>
          </Col>
          <Col md={6}>
            <p>
              At Tharavad Ayurveda Retreat, we offer a wide range of comprehensive treatments tailored to meet your specific needs. 
              Our expert practitioners excel in the art of Panchakarma, an ancient Ayurvedic therapy that detoxifies and revitalizes the body, 
              promoting both physical and emotional well-being.
            </p>
            <p>
              Through this deeply therapeutic process, we aim to restore balance and harmony to your mind, body, and spirit.
            </p>
          </Col>
        </Row>
        <Row>
          {services.map((service, index) => (
            <Col md={3} key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <div className="service-title">{service.title}</div>
              <div className="read-more">→</div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Services;
