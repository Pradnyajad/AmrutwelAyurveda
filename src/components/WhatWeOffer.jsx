import React from 'react';
import { Carousel, Container, Row, Col, Image } from 'react-bootstrap';

const WhatWeOffer = () => {
  const images = [
    { src: '/images/wellness1.jpg', alt: 'Massage Therapy' },
    { src: '/images/wellness2.jpg', alt: 'Meditation Pose' },
    { src: '/images/wellness3.jpg', alt: 'Ayurvedic Oils' },
    { src: '/images/wellness4.jpg', alt: 'Spa Treatment' },
    { src: '/images/wellness5.jpg', alt: 'Yoga Session' },
    { src: '/images/wellness6.jpg', alt: 'Essential Oils' }
  ];

  // Split into groups of 3
  const groupedImages = [];
  for (let i = 0; i < images.length; i += 3) {
    groupedImages.push(images.slice(i, i + 3));
  }

  return (
    <Container className="my-5">
      <h2 className="text-center mb-3">What We Offer</h2>
      <p className="text-center mb-4 fs-5">
        Meditation, wellness and holistic experiences, gifted with devotion, love, patience and <span className="text-decoration-underline">so.</span>
      </p>

      <Carousel interval={5000} fade indicators={true}>
        {groupedImages.map((group, idx) => (
          <Carousel.Item key={idx}>
            <Row className="justify-content-center">
              {group.map((img, i) => (
                <Col md={4} key={i} className="mb-3">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fluid
                    rounded
                    style={{ height: '300px', objectFit: 'cover', width: '100%' }}
                  />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default WhatWeOffer;
