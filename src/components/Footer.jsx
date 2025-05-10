import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logofooter from '../logofooter.png'; 
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#eae5d9', color: '#000', padding: '40px 0' }}>
      <Container>
  <Row className="mb-4 align-items-start">
    {/* Left Column with Logo & Contact */}
    <Col md={3} className="mb-4 mb-md-0">
      <img src={logofooter} alt="Amrutwel Ayurveda" style={{ height: 150 }} />
      <ul className="list-unstyled mt-3" style={{ lineHeight: '2' }}>
        <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Address</li>
        <li><FontAwesomeIcon icon={faPhone} /> Contact No.</li>
        <li><FontAwesomeIcon icon={faEnvelope} /> Email</li>
        <li><FontAwesomeIcon icon={faLinkedinIn}/> Linkedin</li>
      </ul>
    </Col>

    {/* Products */}
    <Col md={3} className="mb-4 mb-md-0">
      <h5>Products</h5>
      <ul className="list-unstyled" style={{ lineHeight: '2' }}>
        <li>Lorem ipsum</li>
        <li>Consectetur</li>
        <li>Adipiscing elit</li>
        <li>Fermentum lacus</li>
        <li>Nulla egestas</li>
        <li>Mauris accumsan</li>
        <li>Adipiscing elit</li>
        <li>Fermentum lacus</li>
      </ul>
    </Col>

    {/* Quick Links */}
    <Col md={3}>
      <h5>Quick Links</h5>
      <ul className="list-unstyled" style={{ lineHeight: '2' }}>
        <li>Home</li>
        <li>About us</li>
        <li>Treatment</li>
        <li>Product & services</li>
        <li>Facilities</li>
        <li>Contact</li>
      </ul>
    </Col>

    {/* Social Icons */}
    <Col md={3} className="d-flex align-items-start justify-content-md-end">
      <div>
        <h5>Follow Us</h5>
        <div className="d-flex gap-3 mt-2">
          <a href="/" className="text-dark"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="/" className="text-dark"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="/" className="text-dark"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="/" className="text-dark"><FontAwesomeIcon icon={faLinkedinIn} /></a>

        </div>
      </div>
    </Col>
  </Row>

  {/* Bottom Bar */}
  <Row className="justify-content-between align-items-center mt-4">
    <Col md={6}>
      <small>© 2021 Lorem ipsum. All Rights Reserved. A Lorem ipsum Website</small>
    </Col>
  </Row>
</Container>
    </footer>
  );
};

export default Footer;

