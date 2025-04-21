import React from 'react';
import { Carousel } from 'react-bootstrap';
import SkinAndHairRejuvenation from '../SkinAndHairRejuvenation.jpg';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      text: "I fell in love with this place. All the staffs are very professional and helpful.<br> I will certainly come back and advertise for this little corner of paradise. <br> Special thanks to Dr.Susmitha and all other therapists.<br> Thank you Manoj and Mani for the excellent food,<br> and a fantastic service from Manoj. I will never forget smile of Dr.Priyanka, kindness of Dr.Binu. Congratulations for your fantastic work and I hope I will come back soon.",
      author: "Guillaume - France",
    },
    {
      text: "This is another wonderful testimonial that highlights the amazing experience at your establishment.",
      author: "Another Happy Client",
    },
    {
      text: "One more fantastic review showcasing the quality of your services and the satisfaction of your customers.",
      author: "Yet Another Satisfied Guest",
    },
  ];

  return (
    <div className="testimonial-container">
      <div className="testimonial-carousel">
        <Carousel interval={5000} controls={false} indicators={true} fade>
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <div className="testimonial-text">
                <p dangerouslySetInnerHTML={{ __html: testimonial.text }} />
                <cite>- {testimonial.author}</cite>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="static-image">
        <img src={SkinAndHairRejuvenation} alt="Testimonial Setting" className="img-fluid" />
      </div>
    </div>
  );
};

export default TestimonialCarousel;
