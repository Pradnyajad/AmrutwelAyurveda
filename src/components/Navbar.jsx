import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container, Form, Button, Dropdown } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
import logo from '../logo.png';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowDropdown(false);
  }, [location.pathname]);

  return (
    <div className="bg-image text-dark vh-100 d-flex flex-column">
      <BootstrapNavbar bg="light" expand="lg" className="shadow-sm px-3">
        <Container fluid>
          {/* Mobile/Tablet View */}
          <div className="d-flex d-lg-none justify-content-between align-items-center w-100">
            <BootstrapNavbar.Brand href="/">
              <img src={logo} alt="Logo" width="40" height="40" className="d-inline-block align-top" />
            </BootstrapNavbar.Brand>
            <BootstrapNavbar.Toggle aria-controls="navbar-nav" />
          </div>

          {/* Desktop View */}
          <div className="d-none d-lg-flex align-items-center">
            <BootstrapNavbar.Brand href="/">
              <img src={logo} alt="Logo" width="40" height="40" className="d-inline-block align-top" />
            </BootstrapNavbar.Brand>
            <BootstrapNavbar.Toggle aria-controls="navbar-nav" />
          </div>

          <BootstrapNavbar.Collapse id="navbar-nav">
            <Nav className="ms-auto align-items-center gap-3">
              {/* About Us */}
              <Nav.Link as={NavLink} to="/aboutus" end className={({ isActive }) => (isActive ? "active-link" : "")}>
                About Us
              </Nav.Link>

              {/* Treatments dropdown */}
              <Nav.Item
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
                className="position-relative"
              >
                <Nav.Link
                  as="div"
                  onClick={() => setShowDropdown(!showDropdown)}
                  style={{ cursor: 'pointer' }}
                >
                  Treatments
                </Nav.Link>

                {showDropdown && (
                  <div className="submenu bg-white shadow p-2 rounded position-absolute z-3">
                    <Nav.Link as={NavLink} to="/online-ayurveda-consultation" className={({ isActive }) => (isActive ? "active-link" : "")}>
                      Online Ayurveda Consultation For OP
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/panchakarma-treatment" className={({ isActive }) => (isActive ? "active-link" : "")}>
                      Panchakarma Treatment
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/yoga-and-meditation" className={({ isActive }) => (isActive ? "active-link" : "")}>
                      Yoga and Meditation
                    </Nav.Link>
                  </div>
                )}
              </Nav.Item>

              {/* Product & Services */}
              <Nav.Link as={NavLink} to="/product-service" className={({ isActive }) => (isActive ? "active-link" : "")}>
                Product & Services
              </Nav.Link>

              {/* Facilities */}
              <Nav.Link as={NavLink} to="/facilities" className={({ isActive }) => (isActive ? "active-link" : "")}>
                Facilities
              </Nav.Link>

              {/* Contact */}
              <Nav.Link as={NavLink} to="/contact" className={({ isActive }) => (isActive ? "active-link" : "")}>
                Contact
              </Nav.Link>

              {/* Language Dropdown */}
              <Dropdown>
                <Dropdown.Toggle variant="link" className="nav-link" id="language-dropdown">
                  English
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item as={NavLink} to="/french">
                    French
                  </Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/spanish">
                    Spanish
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {/* Search Icon */}
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
        <div className="d-flex gap-3 mt-3 flex-nowrap">
              <NavLink to="/aboutus">
                    <Button variant="success" style={{ minWidth: '150px' }}>
                     About Us
                    </Button>
             </NavLink>

           <NavLink to="/facilities">
          <Button
            style={{
              minWidth: '150px',
              color: 'white',
              borderColor: 'white',
              backgroundColor: 'transparent'
            }}
          >
            View all Services
          </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
