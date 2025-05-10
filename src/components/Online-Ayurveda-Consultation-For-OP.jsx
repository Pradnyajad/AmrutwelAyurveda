import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OnlineAyurvedaConsultation = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-3xl font-bold text-center mb-4">
        Online Ayurveda Consultation for OP
      </h1>

      <div className="prose prose-sm mx-auto text-gray-700">
        <p>
          Parkinson's Disease, which is widely prevalent today, refers to a
          particular type of nervous disorder condition. It is known as &quot;Kampa
          Vatha&quot; in Ayurveda. There are different types of Kampa Vatha. The
          Ayurvedic treatment method is based on physical examination of the
          patient by the Physician according to the fundamental principles of
          &quot;Thridoshas.&quot; It is absolutely essential to have In Patient
          treatment for the management, alleviation, and mitigation of this
          condition. Better results (50-70% generally) are reportedly attained
          after undergoing Panchakarma Treatment at our center. Normally 21 days
          Panchakarma treatments along with other special types of treatments,
          are given by us. Out Patient Treatment usually gives lesser
          improvement in symptoms; but patients can go for it if they are unable
          to get admitted for a longer period. For that, the patient has to answer
          a questionnaire so that our panel of doctors can prescribe apt
          medicines suited for the individual. Medicines for treatment purposes
          may be couriered to the patient. You may kindly fill in the required
          details in the &quot;Online Consultation Form&quot; available on our
          website.
        </p>
        <p>
          Outpatient Treatment usually gives lesser improvement in symptoms; but
          we can go for it if the patient is unable to get admitted for the time
          being. For that, the patient has to answer a questionnaire so that our
          panel of doctors can prescribe apt medicines (include special Kashaya,
          Thailam, Choorna, etc.) suited for the individual.
        </p>
      </div>

      <div className="text-center mt-4 mb-5">
        <Link to="/contact">
          <Button variant="primary" size="sm" className="custom-button">
            Book Your Appointment
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OnlineAyurvedaConsultation;
