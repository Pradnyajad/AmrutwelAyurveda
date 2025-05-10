// FacilitiesPage.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Container, Row, Col, Image } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Add this import at the top
import Facility1 from '../Facility1.jpg';
import Facility2 from '../Facility2.png';
import Facility3 from '../Facility3.png';
import Facility4 from '../Facility4.jpg';


// ----- Facilities Section -----
const Facilities = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Facilities</h1>
      <p className="text-center text-muted mb-5">
        At Amrutwel Ayurveda, we believe in the timeless wisdom of Ayurveda to restore balance and promote holistic well-being. 
        Rooted in ancient traditions, our treatments combine authentic herbal remedies, personalized therapies, and expert guidance to help you achieve a healthier, more harmonious life.
        The retreat nestles in a calm and peaceful village atmosphere with well-appointed traditional Kerala architectural–styled cottages
        and other facilities that blend into the green and natural landscape of the paddy fields and coconut groves. The grandeur and
        richness of the ancient Kerala Amrutwel and the essence of its beauty are carefully adopted and nurtured at the aptly named ‘Amrutwel’.
      </p>

      <h1 className="text-start mb-4">
        We provide the best Ayurvedic treatment and necessary facilities
      </h1>

    <div className="row">
  <div className="col-md-6 mb-4">
    <ul className="list-unstyled">
      {[
        'Panchakarma treatments under experienced doctors',
        'Allopathic doctor available on call',
        'Physiotherapy therapist available on need basis',
        'Sprawling Campus of landscaped village greenery',
        'A/C & Non A/C Rooms, Cottages & Deluxe Cottages',
        'Natural Pool'
      ].map((text, index) => (
        <li key={index} className="custom-bullet mb-2">
          <span className="me-2">›</span>
          <span>{text}</span>
        </li>
      ))}
    </ul>
  </div>

  <div className="col-md-6 mb-4">
    <ul className="list-unstyled">
      {[
        'Reading cum Recreation center',
        'Internet Facility',
        'Yoga Classes',
        'Ayurvedic Food',
        'Library'
      ].map((text, index) => (
        <li key={index} className="custom-bullet mb-2">
          <span className="me-2">›</span>
          <span>{text}</span>
        </li>
      ))}
    </ul>
  </div>
</div>


    </div>
  );
};

// ----- Gallery Section -----


const FacilitiesAmenitiesGallery = ({ images }) => {
  const [show, setShow] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleShow = (index) => {
    setSelectedIndex(index);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedIndex(0);
  };

  const handleNext = () => {
    if (selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="mb-4 text-center">
        <Col>
          <h2>Facilities & Amenities</h2>
          <p className="lead">Offering our guests an unforgettable experience</p>
        </Col>
      </Row>

      <Row>
        {images.map((image, index) => (
          <Col md={6} className="mb-4" key={index}>
            <Image
              src={image.thumbnail}
              alt={`Facility ${index + 1}`}
              fluid
              rounded
              onClick={() => handleShow(index)}
              style={{ cursor: 'pointer', width: '100%', maxHeight: '250px', objectFit: 'cover' }}
            />
          </Col>
        ))}
      </Row>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Body className="position-relative text-center p-0">
          {/* Left Arrow */}
          {selectedIndex > 0 && (
            <FaChevronLeft
              onClick={handlePrev}
              className="position-absolute"
              style={{
                top: '50%',
                left: '10px',
                fontSize: '2rem',
                color: '#fff',
                cursor: 'pointer',
                zIndex: 10,
                transform: 'translateY(-50%)',
              }}
            />
          )}

          {/* Image */}
          <Image
            src={images[selectedIndex].full}
            alt={`Preview ${selectedIndex + 1}`}
            fluid
            style={{ maxHeight: '80vh', objectFit: 'contain' }}
          />

          {/* Right Arrow */}
          {selectedIndex < images.length - 1 && (
            <FaChevronRight
              onClick={handleNext}
              className="position-absolute"
              style={{
                top: '50%',
                right: '10px',
                fontSize: '2rem',
                color: '#fff',
                cursor: 'pointer',
                zIndex: 10,
                transform: 'translateY(-50%)',
              }}
            />
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};


// ----- Main Component -----
function FacilitiesPage() {
  const facilityImages = [
    {
        thumbnail: Facility1,
        full: Facility1,
    },
    {
        thumbnail: Facility2,
        full: Facility2,
      },
      {
        thumbnail: Facility3,
        full: Facility3,
      },
      {
        thumbnail: Facility4,
        full: Facility4,
      },
  ];

  return (
    <div>
      <Facilities />
      <FacilitiesAmenitiesGallery images={facilityImages} />
    </div>
  );
}

export default FacilitiesPage;
