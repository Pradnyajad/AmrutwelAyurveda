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
    buttonStyle: "success"
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
        <div className="row justify-content-center">
          {plans.map((plan, idx) => (
            <div key={idx} className="col-md-4 mb-4">
              <div className="card pricing-card" style={{height: '600px'}}>
                <div className="card-body">
                  <h5 className="card-title fw-bold">{plan.title}</h5>
                  <div className="price-box my-5">
                    <h4 className="mb-0 text-white">{plan.price} <small className="fs-5">/{plan.type}</small></h4>
                  </div>
                  <ul className="list-unstyled feature-list">
                    {plan.features.map((feature, i) => (
                      <li key={i} className='text-center'>• {feature}</li>
                    ))}
                  </ul>
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
