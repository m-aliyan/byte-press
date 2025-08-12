'use client';

import React, { useState, FormEvent } from 'react';
import './FreeQuoteForm.css';

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  serviceType: string;
  communicationPreferences: boolean;
}

export default function FreeQuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    serviceType: '',
    communicationPreferences: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    // Here you can add API call or other form submission logic
  };

  return (
    <div className="free-quote-form-container">
      <form onSubmit={handleSubmit} className="free-quote-form">
        <h2 className="form-title">Get Your Free Quote</h2>
        
        <div className="form-group">
          <label htmlFor="fullName" className="form-label">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            className="form-input"
            placeholder="Enter your full name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="form-input"
            placeholder="Enter your email address"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="serviceType" className="form-label">
            I am looking for... *
          </label>
          <input
            type="text"
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleInputChange}
            required
            className="form-input"
            placeholder="Enter your query here."
          />
        </div>

        <div className="form-group checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="communicationPreferences"
              checked={formData.communicationPreferences}
              onChange={handleInputChange}
              className="checkbox-input"
            />
            <span className="checkbox-text">
              Please <strong>CHECK THE BOX</strong> to COMMUNICATE VIA SMS OR EMAIL (Privacy Policy & Terms)
            </span>
          </label>
        </div>

        <button type="submit" className="submit-button">
          Get Free Quote
        </button>
      </form>
    </div>
  );
}
