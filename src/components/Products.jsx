import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Product1 from '../Product1.jpg'
import Product2 from '../Product2.jpg'
import Product3 from '../Product3.jpg'
import Product4 from '../Product4.jpg'

const ProductsLayout = () => {
  return (
    <section className="py-5 bg-white">
      <Container>
        <Row className="g-3">
          {/* Left Column */}
          <Col md={6}>
            <h5 className="text-success fw-bold">PRODUCTS</h5>
            <p className="text-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tortor purus.
              Praesent elementum massa sed faucibus facilisis.
            </p>
            <div className="text-end mb-3">
              <span className="text-dark fw-semibold" style={{ cursor: 'pointer' }}>
                Read more →
              </span>
            </div>

            {/* Two stacked images */}
            <Row className="g-3">
              <Col xs={12}>
                <Card className="text-white border-0">
                  <Card.Img src={Product1}/>
                  <Card.ImgOverlay>
                    <Card.Title>LOREM IPSUM DOLOR SIT AMET</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col xs={12}>
                <Card className="text-white border-0">
                  <Card.Img src={Product2}/>
                  <Card.ImgOverlay>
                    <Card.Title>PELLENTESQUE ERAT MI ALIQUET</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            </Row>
          </Col>

          {/* Right Column: Two stacked images */}
          <Col md={6}>
            <Row className="g-3">
              <Col xs={12}>
                <Card className="text-white border-0">
                  <Card.Img src={Product3} />
                  <Card.ImgOverlay>
                    <Card.Title>PELLENTESQUE ERAT MI ALIQUET</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col xs={12}>
                <Card className="text-white border-0">
                  <Card.Img src={Product4} />
                  <Card.ImgOverlay>
                    <Card.Title>LOREM IPSUM DOLOR SIT AMET</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductsLayout;
