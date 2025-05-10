import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import About1 from '../About1.jpg';
import About2 from '../About2.jpg';
import About3 from '../About3.jpg';
import About4 from '../About4.jpg';

const AboutAmrutwel = () => {
  return (
    <Container fluid className="about-section py-5 px-md-5">
      <Row>
        {/* Left Section: Images */}
        <Col md={6} className=" d-flex flex-wrap justify-content-center ">
          <div className="image-container">
            <Image src={About1} className="image image1"/>
            <Image src={About2} className="image image2"/>
            <Image src={About3} className="image image3"/>
          </div>
        </Col>

        {/* Right Section: Text Content */}
        <Col md={6} className="text-content d-flex flex-column justify-content-center">
          <div className="herbs-img mb-3">
            <Image src={About4} fluid rounded />
          </div>
          <h3 className="section-title">About Amrutwel</h3>
          <p className="about-text">
            At Amrutwel Ayurveda, we believe in the timeless wisdom of Ayurveda to restore balance and promote holistic well-being.
            Rooted in ancient traditions, our treatments combine authentic herbal remedies, personalized therapies, and expert guidance
            to help you achieve a healthier, more harmonious life.
          </p>
          <div className="button-group d-flex gap-2">
            <Button variant="" style={{backgroundColor: '#ffffff',color: '#4a613a', borderColor: '#4a613a', width: '120px'}}>About Us</Button>
            <Button variant="link" style={{color: '#4a613a'}}className="text-decoration-none">Read more →</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutAmrutwel;
