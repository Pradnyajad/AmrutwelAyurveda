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
        <Row className="mb-4">
          {/* Logo & Contact Info */}
          <Col xs={12} md={6} lg={3} className="mb-4 mb-lg-0">
            <img src={logofooter} alt="Amrutwel Ayurveda" style={{ height: 150 }} />
            <ul className="list-unstyled mt-3" style={{ lineHeight: '1.8' }}>
              <li><FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" /> Address</li>
              <li><FontAwesomeIcon icon={faPhone} className="me-2" /> Contact No.</li>
              <li><FontAwesomeIcon icon={faEnvelope} className="me-2" /> Email</li>
              <li><FontAwesomeIcon icon={faLinkedinIn} className="me-2" /> LinkedIn</li>
            </ul>
          </Col>

          {/* Products */}
          <Col xs={12} md={6} lg={3} className="mb-4 mb-lg-0">
            <h5>Products</h5>
            <ul className="list-unstyled" style={{ lineHeight: '1.8' }}>
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
          <Col xs={12} md={6} lg={3} className="mb-4 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled" style={{ lineHeight: '1.8' }}>
              <li>Home</li>
              <li>About us</li>
              <li>Treatment</li>
              <li>Product & services</li>
              <li>Facilities</li>
              <li>Contact</li>
            </ul>
          </Col>

          {/* Social Icons */}
          <Col xs={12} md={6} lg={3}>
            <h5>Follow Us</h5>
            <div className="d-flex gap-3 mt-2">
              <a href="/" className="text-dark fs-5"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="/" className="text-dark fs-5"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="/" className="text-dark fs-5"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="/" className="text-dark fs-5"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </Col>
        </Row>

        {/* Bottom Bar */}
        <Row className="mt-4">
          <Col xs={12} className="text-center">
            <small>© 2021 Lorem ipsum. All Rights Reserved. A Lorem ipsum Website</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
