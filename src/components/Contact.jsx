import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from './firebase'; // import db
import { collection, addDoc } from 'firebase/firestore'; // Firestore methods

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    country: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), formData); // Save data
      alert("Form submitted!");
      setFormData({
        fullName: '',
        email: '',
        contactNumber: '',
        country: '',
        message: '',
      });
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Failed to submit form");
    }
  };

  return (
    <div className="form-background">
      <div className="overlay">
        <div className="form-box">
          <h2>GET SERVICES</h2>
          <p>Reach out to us and we will respond as soon as we can.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="fullName" placeholder="Full name" value={formData.fullName} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <input type="text" name="contactNumber" placeholder="Contact number" value={formData.contactNumber} onChange={handleChange} />
              <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} />
            </div>
            <textarea name="message" placeholder="Message" rows="4" value={formData.message} onChange={handleChange}></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
