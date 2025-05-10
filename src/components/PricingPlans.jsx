import React from 'react';


const plans = [
  {
    title: "BASIC WELLNESS PLAN",
    price: "₹2,999/-",
    type: "Monthly",
    features: [
      "Ayurvedic Consultation (30 min)",
      "Personalized Diet & Lifestyle Guidance",
      "1 Herbal Therapy Session",
      "Basic Detox Recommendations"
    ],
    buttonStyle: "outline-success"
  },
  {
    title: "ADVANCED HEALING PLAN",
    price: "₹6,599/-",
    type: "Monthly",
    features: [
      "Ayurvedic Consultation (30 min)",
      "Personalized Diet & Lifestyle Guidance",
      "1 Herbal Therapy Session",
      "Basic Detox Recommendations"
    ],
    buttonStyle: "outline-success"
  },
  {
    title: "COMPLETE REJUVENATION PLAN",
    price: "₹9,599/-",
    type: "Monthly",
    features: [
      "Ayurvedic Consultation (30 min)",
      "Personalized Diet & Lifestyle Guidance",
      "1 Herbal Therapy Session",
      "Basic Detox Recommendations"
    ],
    buttonStyle: "outline-success"
  }
];

const PricingPlans = () => {
  return (
    <div className="pricing-section text-white py-5 text-center">
      <p className="text-light">Our Pricing</p>
      <h2 className="title">CHOOSE FROM OUR LOWEST<br />PLANS AND PRICES</h2>

      <div className="container mt-4">
        <div className="row row-overflow">
          {plans.map((plan, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
              <div className="card pricing-card w-100">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title fw-bold">{plan.title}</h5>
                    <div className="price-box my-4 mx-auto">
                      <h4 className="mb-0 text-white">{plan.price} <small className="fs-6">/{plan.type}</small></h4>
                    </div>
                    <div className='text-center'>
                      <ul className="list-unstyled feature-list">
                      {plan.features.map((feature, i) => (
                        <li key={i}>• {feature}</li>
                      ))}
                    </ul>
                    </div>
                  </div>
                  <button className={`btn btn-${plan.buttonStyle} mt-3`}>Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
