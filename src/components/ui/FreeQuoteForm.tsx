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

interface FieldTouched {
  fullName: boolean;
  email: boolean;
  phoneNumber: boolean;
  serviceType: boolean;
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

  const [touched, setTouched] = useState<FieldTouched>({
    fullName: false,
    email: false,
    phoneNumber: false,
    serviceType: false,
    communicationPreferences: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleBlur = (fieldName: keyof FieldTouched) => {
    setTouched(prev => ({
      ...prev,
      [fieldName]: true,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log('Form submitted with data:', formData);
    // Here you can add API call or other form submission logic
  };

  const shouldShowError = (fieldName: keyof FieldTouched) => {
    const fieldTouched = touched[fieldName];
    const fieldValue = formData[fieldName];
    const isRequired = fieldName === 'fullName' || fieldName === 'email' || fieldName === 'serviceType';
    
    // Show error if field is required and empty, AND either:
    // 1. Form has been submitted, OR
    // 2. Field has been touched (blurred)
    return isRequired && !fieldValue && (isSubmitted || fieldTouched);
  };

  const getInputClassName = (fieldName: keyof FieldTouched) => {
    const baseClass = 'form-input';
    return shouldShowError(fieldName) ? `${baseClass} error` : baseClass;
  };

  return (
    <div className="free-quote-form-container">
      <form onSubmit={handleSubmit} className={`free-quote-form ${isSubmitted ? 'form-submitted' : ''}`}>
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
            onBlur={() => handleBlur('fullName')}
            required
            className={getInputClassName('fullName')}
            placeholder="Enter your full name"
          />
          {shouldShowError('fullName') && (
            <div className="error-message">Full name is required</div>
          )}
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
            onBlur={() => handleBlur('email')}
            required
            className={getInputClassName('email')}
            placeholder="Enter your email address"
          />
          {shouldShowError('email') && (
            <div className="error-message">Valid email is required</div>
          )}
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
            onBlur={() => handleBlur('phoneNumber')}
            className={getInputClassName('phoneNumber')}
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
            onBlur={() => handleBlur('serviceType')}
            required
            className={getInputClassName('serviceType')}
            placeholder="Enter your query here."
          />
          {shouldShowError('serviceType') && (
            <div className="error-message">Service type is required</div>
          )}
        </div>

        <div className="form-group checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="communicationPreferences"
              checked={formData.communicationPreferences}
              onChange={handleInputChange}
              onBlur={() => handleBlur('communicationPreferences')}
              className="checkbox-input"
            />
            <span className="checkbox-text">
              Please <strong>check the box</strong> to communicate via sms or email (privacy policy & terms)
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
