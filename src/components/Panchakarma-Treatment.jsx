import React from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';
import SkinAndHairRejuvenation from '../SkinAndHairRejuvenation.jpg';
import { Link } from 'react-router-dom';

const PanchakarmaSection = () => {
  return (
    <>
      <style>{`
        h1, h2, h3, h4 {
          color: #198754 !important;
        }
      `}</style>

      <div className="container py-5">
        <h2 className="text-center mb-5 fw-bold">
          Panchakarma Treatment in Kerala, India
        </h2>

        <div className="container mt-5">
          <h2 className="text-3xl font-bold text-center mb-4">
            What is Panchakarma?
          </h2>

          <Container fluid className="py-5 bg-light">
            <Container>
              <Row className="align-items-center">

                <Col md={6} className="mb-4 mb-md-0">
                  <img
                    src={SkinAndHairRejuvenation}
                    alt="Tharavad Ayurveda Retreat"
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
                  />
                </Col>

                <Col md={6}>
                  <h2 className="text-uppercase text-muted mb-3">
                    Ayurveda Treatment Centres
                  </h2>
                  <h6 className="fw-bold mb-4">
                    Our Treatment Centres have formed the backbone of the company since the very beginning,
                    representing the model of health care and therapy excellence on which our Kerala retreat centre and 9 international Spa Franchises were later based.
                  </h6>
                  <p className="mb-3">
                    Modern equipment and the highest standards of quality control allow us to provide our retail customers, partners, and distributors with effective therapeutic medicine. Best used under the guidance of an Ayurvedic doctor or health professional, these traditional remedies stand the test of time in healing a range of common health complaints.
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

          <h2 className="text-center mb-4">
            Benefits of Panchakarma Treatment in Kerala, India
          </h2>

          <div className="text-muted">
            <p>
              Panchakarma treatment in Kerala, India helps in improving physical, mental and emotional health. It helps in eliminating toxins and nourishing the body from inside. The therapies also decrease stress and provide a deep relaxation for a clear mind. Panchakarma sessions on regular intervals are beneficial for a better digestive system, increased stamina and vigor.
              Consultants of this traditional medicine also focus on the ability of Ayurveda to improve lifespan.
            </p>
            <p>
              Book now to transform yourself with the best panchakarma treatment!
            </p>
          </div>

          <h2 className="text-center mb-4">
            Choosing the Best Panchakarma Centre in India
          </h2>

          <p className="mb-3">
            There are few things one should keep in mind while choosing the right Panchakarma center in India. Make sure the centre has accreditation and experience of the practitioners. Guarantee that the center provides respective quality in the facility and convenience in its accommodation for perfect healing.
            Check out the visitors’ reviews & testimonials as they ensure all the credibility and trust hospital displays.
          </p>
        </div>
      </div>
    </>
  );
};

export default PanchakarmaSection;
