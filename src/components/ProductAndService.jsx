import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductAndServiceImg from '../AyuurvedicMedicinee.jpg';  // Confirm this filename
import PaintedMedicineImg from '../PaintedMedicine.jpg';       // Avoid spaces in filename

const ProductAndService = () => {
  return (
    <Container fluid className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          {/* Left Column: Single Image */}
          <Col md={6} className="mb-4 mb-md-0">
            <img
              src={ProductAndServiceImg}
              alt="Tharavad Ayurveda Retreat"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
            />
          </Col>

          {/* Right Column: Text */}
          <Col md={6}>
            <h2 
              className="text-uppercase mb-3" 
              style={{ color: '#198754' }}
            >
              Ayurvedic Medicine
            </h2>
            <h5 className="fw-bold mb-4">
              Amrutwel Ayurveda Group calls upon four generations 
              of expertise in Ayurvedic medicine to formulate 
              authentic herbal treatments using natural ingredients.
            </h5>
            <p className="mb-3">
              Modern equipment and the highest standards of quality control allow us to provide our retail customers, partners, and distributors with effective therapeutic medicine. Best used under the guidance of an Ayurvedic doctor or health professional, these traditional remedies stand the test of time in healing a range of common health complaints.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <Row className="align-items-center">
          {/* Left Column: Text */}
          <Col md={6}>
            <h2 
              className="text-uppercase mb-3" 
              style={{ color: '#198754' }}
            >
              Patented Ayurvedic Remedies
            </h2>
            <h5 className="fw-bold mb-4">
              Always true to traditional Ayurvedic scripture, Amrutwel Ayurveda Group knows
              that some modern conditions call for solutions that cannot be found in the ancient texts.
            </h5>
            <p className="mb-3">
              For this reason, they formed their own range of patented remedies, originally derived from their organic Ayurvedic herb farm in Kerala, and expertly combined to produce powerful healing tonics.
            </p>
          </Col>

          {/* Right Column: Image */}
          <Col md={6} className="mb-4 mb-md-0">
            <img
              src={PaintedMedicineImg}
              alt="Painted Ayurvedic Medicine"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ProductAndService;
