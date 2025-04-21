import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container, Form, Button } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import logo from '../logo.png'; 

const Navbar = () => {
  return (
    <div className="bg-image text-dark vh-100 d-flex flex-column">
      <BootstrapNavbar bg="light" expand="lg" className="shadow-sm px-3">
        <Container fluid>
          <BootstrapNavbar.Brand href="/">
            <img
              src={logo}
              alt="Logo"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
          </BootstrapNavbar.Brand>

          <BootstrapNavbar.Toggle aria-controls="navbar-nav" />

          <BootstrapNavbar.Collapse id="navbar-nav">
            <Nav className="ms-auto align-items-center gap-3">
              <Nav.Link href="#home">About Us</Nav.Link>
              <Nav.Link href="#product">Treatments</Nav.Link>
              <Nav.Link href="#services">Product & Services</Nav.Link>
              <Nav.Link href="#contact">Facilities</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown">
                  English
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">French</a></li>
                  <li><a className="dropdown-item" href="/">Spanish</a></li>
                </ul>
              </li>
              <Form className="d-flex">
                <Search size={20} style={{ cursor: 'pointer', marginTop: '8px' }} />
              </Form>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>

      {/* Hero Section */}
      <div className="hero-section d-flex flex-column justify-content-center align-items-start text-start px-4">
        <h3 className="display-9 fw-bold text-white">
          Experience Holistic Healing with Amrutwel Ayurveda
        </h3>
        <p className="lead text-white">
          Discover the Ancient Secrets of Ayurveda for a Healthier You
        </p>
        <div className="d-flex gap-3 mt-3 flex-wrap">
          <Button variant="success">Book Now</Button>
          <Button
  style={{
    color: 'white',
    borderColor: 'white',
    backgroundColor: 'transparent'
  }}
>
  View all Services
</Button>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
