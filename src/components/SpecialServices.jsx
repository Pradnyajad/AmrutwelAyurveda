import React from 'react';
import { Carousel } from 'react-bootstrap';
import SpecialServiceImg from '../SpecialServiceImg.jpg'; 


const AyurvedaCarousel = () => {
  return (
    
    <Carousel fade>
      <Carousel.Item>
        
        <img
          className="d-block w-100"
          src={SpecialServiceImg}
          alt="First slide"
          style={{
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <Carousel.Caption>
          <h3 style={{ color: '#ffffff', fontWeight: 'bold' }}>SPECIAL SERVICES</h3>
          <p>
          let the latest trends of tea take control of your cup? At Tea Trends Exports we do not brew as per the common flow,
          but our innovative Research and Development team continuously introduces the newest discoveries to add spice to the
          lifestyle of many consumers around the globe. 
          </p>
          <a href="#" style={{ color: '#b1d285', textDecoration: 'none' }}>
            Read more →
          </a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SpecialServiceImg}
          alt="Second slide"
          
        />
        <Carousel.Caption>
          <h3>SERVICE TITLE</h3>
          <p>
          let the latest trends of tea take control of your cup? At Tea Trends Exports we do not brew as per the common flow,
          but our innovative Research and Development team continuously introduces the newest discoveries to add spice to the
          lifestyle of many consumers around the globe. 
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SpecialServiceImg}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>ANOTHER SERVICE</h3>
          <p>
          let the latest trends of tea take control of your cup? At Tea Trends Exports we do not brew as per the common flow,
          but our innovative Research and Development team continuously introduces the newest discoveries to add spice to the
          lifestyle of many consumers around the globe. 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default AyurvedaCarousel;
