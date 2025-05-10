import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SkinAndHairRejuvenation from '../SkinAndHairRejuvenation.jpg';
import SleepTherapy from '../SleepTherapy.jpg';
import StressAndAnxietyManagement from '../StressAndAnxietyManagement.jpg';
import PainAndJointCareTherapy from '../PainAndJointCareTherapy.jpg';

const packages = [
  {
    title: 'Skin And Hair Rejuvenation',
    image: SkinAndHairRejuvenation, 
  },
  {
    title: 'Sleep Therapy',
    image: SleepTherapy,
  },
  {
    title: 'Stress And Anxiety Management',
    image: StressAndAnxietyManagement,
  },
  {
    title: 'Pain And Joint Care Therapy',
    image: PainAndJointCareTherapy,
  },
];

export default function AyurvedaPackages() {
  return (
    <div className="container text-center custom-top-margin">
      <h6 className="text-uppercase text-muted">Ayurveda Wellness & Relaxation</h6>
      <h2 className="mb-5">Our Packages</h2>
      <div className="row">
        {packages.map((pkg, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card border-0">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: '1.1rem' }}>
                  {pkg.title}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
