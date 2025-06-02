import React from 'react';
import { Button, Row, Col, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logofooter from '../logofooter.png';
import AboutUsimg1 from '../AboutUsimg1.jpg';
import AboutUsimg2 from '../AboutUsimg2.png'

// About Us Section (Keeping this exactly as you provided - no changes here)
const AboutUsSection = () => {
    return (
        <div className="container py-5">
            <h2 className="text-center mb-5 fw-bold">About Us</h2>

            <div className="container mt-5">
                <Container fluid className="py-5 bg-light">
                    <Container>
                        <Row className="align-items-center">
                            <Col md={6} className="mb-4 mb-md-0">
                                <img
                                    src={logofooter}
                                    alt="Tharavad Ayurveda Retreat"
                                    className="img-fluid rounded shadow"
                                    style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
                                />
                            </Col>

                            <Col md={6}>
                                <h2 className="text-uppercase mb-3">Social Responsibility</h2>
                                <h6 className="fw-bold mb-4">
                                    Successful growth means more than financial profit. It resides
                                    in the appreciation of the community and the recognition that
                                    we all form parts of a natural whole.
                                </h6>
                                <p className="mb-3">
                                    Amrutwel Ayurveda Ayurvedic Group demonstrates our commitment
                                    to living in harmony with nature by their numerous
                                    environmental projects and their promotion of sustainability.
                                    We also maintain our involvement with various social programs
                                    and charitable endeavours.
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

// Doctors & Staff Profile Section (Changes only for Know More button size)
const DoctorsStaffProfile = () => {
    const features = [
        'Professional Staff',
        'Affordable Prices',
        'Expert Care, Trusted Healing',
        'Best Services',
        'Standard Therapy Sessions',
        'Affordable Prices',
    ];

    return (
        <>
            <style>{`
                /* Heading colors */
                h1, h2, h3, h4 {
                    color:  #198754 !important;
                }

                /* Original checkmark styles */
                .checkmark-circle {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 18px;
                    height: 18px;
                    background-color: #198754; /* Bootstrap success green */
                    border-radius: 50%;
                    color: white;
                    font-size: 14px;
                    font-weight: bold;
                    position: relative;
                    flex-shrink: 0;
                }
                    
                .checkmark-circle::before {
                    content: '';
                    position: absolute;
                    width: 5px;
                    height: 10px;
                    border: solid white;
                    border-width: 0 2.5px 2.5px 0;
                    transform: rotate(45deg);
                    top: 2px;
                    left: 6px;
                }

                /* Adjusted styles for image stack */
                .doctors-staff-section-images {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    position: relative;
                    gap: 15px;
                    padding-right: 40px;
                }

                .doctors-staff-section-images img {
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    max-width: 80%;
                    height: auto;
                }

                .doctors-staff-section-images img:first-child {
                    width: 70%;
                    align-self: flex-start;
                    z-index: 0;
                }

                .doctors-staff-section-images img:last-child {
                    width: 40%;
                    margin-top: -80px;
                    align-self: flex-end;
                    z-index: 1;
                }

                @media (max-width: 767.98px) {
                    .doctors-staff-section-images {
                        padding-right: 0;
                        margin-bottom: 30px;
                        align-items: center;
                    }
                    .doctors-staff-section-images img:first-child,
                    .doctors-staff-section-images img:last-child {
                        width: 100%;
                        margin-top: 0;
                        align-self: center;
                    }
                }

                .know-more-button-custom {
                    background-color: #5d6d5a;
                    border-color: #5d6d5a;
                    color: white;
                    margin-top: 20px;
                }

                .know-more-button-custom:hover {
                    background-color: #4c5a4a;
                    border-color: #4c5a4a;
                }

                .view-all-services-button {
                    color: #495F2C;
                    border-color: #495F2C;
                    background-color: transparent;
                }
            `}</style>

            <Container>
                <Container fluid className="py-5 bg-light">
                    <Row>
                        <Col md={6}>
                            <div className="doctors-staff-section-images">
                                <h2 className="text-uppercase mb-3">Doctors & Staff Profile</h2>
                            </div>
                        </Col>

                        <Col md={6}>
                            <div className="doctors-staff-section-images">
                                <h4>Expert Team</h4>
                                <p>“As globalization takes over our world at a rapid pace, it is unsurprising to
                                    see an increase in the popularity of alternative health and wellness destinations
                                    across the planet. The daily stresses to keep up in this fast-paced world, and the
                                    growing lack of faith in allopathic medication has forced people to look elsewhere and
                                    explore other natural and harmless forms of treatment for health and rejuvenation.</p>
                            </div>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col md={6}>
                            <div className="doctors-staff-section-images">
                                <Image
                                    src={AboutUsimg1}
                                    alt="Massage therapy"
                                    fluid
                                />
                                <Image
                                    src={AboutUsimg2}
                                    alt="Therapist working"
                                    fluid
                                />
                            </div>
                        </Col>

                        <Col md={6}>
                            <h4 className="text-success">"DEDICATED TEAM, HOLISTIC APPROACH"</h4>
                            <p className="text-muted">
                                Our aim was to cut through all economic classes instead of concentrating solely on the premium segment,
                                so that an overall awareness of this great medicinal form could reach the masses as well. When properly
                                conducted, Ayurveda is a fantastic and proven way to treat one’s body and mind for recovery, cure and a
                                preventative state of health.
                                We at the Amrutwel Ayurveda Group inherently believe that the overall service we provide as hosts is just as important
                                as the Ayurvedic treatments and other facilities at our destinations. It is this standard that drives us to 
                                constantly improve our management techniques, and elevate our goals in terms of how we run our centres and resorts. This allows us to manage, operate and promote existing hotels and resorts that share this high standard, regardless of the location. Our mission is and will always be to set the benchmark in standards for both Ayurveda and Hospitality.”
                            </p>

                            <Row className="mb-3">
                                {features.map((item, index) => (
                                    <Col xs={6} className="mb-2" key={index}>
                                        <div className="d-flex align-items-center">
                                            <div className="checkmark-circle me-2"></div>
                                            <span>{item}</span>
                                        </div>
                                    </Col>
                                ))}
                            </Row>

                            <div className="d-inline-block">
                                <Button size="sm" 
                                    style={{
                                        color: '#495F2C',
                                        borderColor: '#495F2C',
                                        backgroundColor: 'transparent',
                                        fontSize: '0.875rem',
                                        padding: '0.25rem 0.5rem',
                                    }}
                                >
                                    Know More
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
};

// Export both components
export { AboutUsSection, DoctorsStaffProfile };
