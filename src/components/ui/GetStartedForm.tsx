'use client';

import React, { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import './GetStartedForm.css';

interface FormData {
  fullName: string;
  email: string;
  selectServices: string;
  phoneNumber: string;
  aboutProject: string;
  communicationPreferences: boolean;
}

interface FieldTouched {
  fullName: boolean;
  email: boolean;
  selectServices: boolean;
  phoneNumber: boolean;
  aboutProject: boolean;
  communicationPreferences: boolean;
}

interface ValidationErrors {
  fullName: string;
  email: string;
  selectServices: string;
  phoneNumber: string;
  aboutProject: string;
  communicationPreferences: string;
}

export default function GetStartedForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    selectServices: '',
    phoneNumber: '',
    aboutProject: '',
    communicationPreferences: false,
  });

  const [touched, setTouched] = useState<FieldTouched>({
    fullName: false,
    email: false,
    selectServices: false,
    phoneNumber: false,
    aboutProject: false,
    communicationPreferences: false,
  });

  const [errors, setErrors] = useState<ValidationErrors>({
    fullName: '',
    email: '',
    selectServices: '',
    phoneNumber: '',
    aboutProject: '',
    communicationPreferences: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateField = (name: keyof FormData, value: string | boolean): string => {
    switch (name) {
      case 'fullName':
        return value.toString().trim() === '' ? 'Full name is required' : '';
      case 'email':
        if (value.toString().trim() === '') return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value.toString()) ? 'Please enter a valid email address' : '';
      case 'selectServices':
        return value.toString().trim() === '' ? 'Please select a service' : '';
      case 'phoneNumber':
        return value.toString().trim() === '' ? 'Phone number is required' : '';
      case 'aboutProject':
        return value.toString().trim() === '' ? 'Project description is required' : '';
      case 'communicationPreferences':
        return !value ? 'Please check the box to continue' : '';
      default:
        return '';
    }
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {
      fullName: validateField('fullName', formData.fullName),
      email: validateField('email', formData.email),
      selectServices: validateField('selectServices', formData.selectServices),
      phoneNumber: validateField('phoneNumber', formData.phoneNumber),
      aboutProject: validateField('aboutProject', formData.aboutProject),
      communicationPreferences: validateField('communicationPreferences', formData.communicationPreferences),
    };

    setErrors(newErrors);
    
    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some(error => error !== '');
    
    if (hasErrors) {
      // Focus first invalid field if there are errors
      const firstErrorField = Object.entries(newErrors).find(([_, error]) => error !== '');
      if (firstErrorField) {
        const fieldName = firstErrorField[0];
        const element = document.getElementById(fieldName);
        if (element) {
          element.focus();
        }
      }
    }
    
    return !hasErrors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    const newValue = type === 'checkbox' ? checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof ValidationErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleBlur = (fieldName: keyof FieldTouched) => {
    setTouched(prev => ({
      ...prev,
      [fieldName]: true,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Prevent double submission
    if (isLoading) return;
    
    setIsSubmitted(true);
    setIsLoading(true);
    
    // Mark all fields as touched to show errors
    setTouched({
      fullName: true,
      email: true,
      selectServices: true,
      phoneNumber: true,
      aboutProject: true,
      communicationPreferences: true,
    });
    
    if (validateForm()) {
      // All fields are valid, navigate to contact
      router.push('/contact');
    } else {
      // Reset loading state if validation fails
      setIsLoading(false);
    }
  };

  // Check if form is valid for button state
  const isFormValid = () => {
    return !Object.values({
      fullName: validateField('fullName', formData.fullName),
      email: validateField('email', formData.email),
      selectServices: validateField('selectServices', formData.selectServices),
      phoneNumber: validateField('phoneNumber', formData.phoneNumber),
      aboutProject: validateField('aboutProject', formData.aboutProject),
      communicationPreferences: validateField('communicationPreferences', formData.communicationPreferences),
    }).some(error => error !== '');
  };

  // Check if button should be disabled
  const isButtonDisabled = () => {
    return !isFormValid() || isLoading;
  };

  const getInputClassName = (fieldName: keyof ValidationErrors) => {
    const baseClass = 'form-input';
    const hasError = errors[fieldName] && isSubmitted;
    return hasError ? `${baseClass} error` : baseClass;
  };

  const getSelectClassName = (fieldName: keyof ValidationErrors) => {
    const baseClass = 'form-select';
    const hasError = errors[fieldName] && isSubmitted;
    return hasError ? `${baseClass} error` : baseClass;
  };

  const getTextareaClassName = (fieldName: keyof ValidationErrors) => {
    const baseClass = 'form-textarea';
    const hasError = errors[fieldName] && isSubmitted;
    return hasError ? `${baseClass} error` : baseClass;
  };

  const getCheckboxClassName = (fieldName: keyof ValidationErrors) => {
    const baseClass = 'checkbox-input';
    const hasError = errors[fieldName] && isSubmitted;
    return hasError ? `${baseClass} error` : baseClass;
  };

  const shouldShowError = (fieldName: keyof ValidationErrors) => {
    const fieldValue = formData[fieldName];
    const isRequired = fieldName === 'fullName' || fieldName === 'email' || fieldName === 'selectServices' || fieldName === 'phoneNumber' || fieldName === 'aboutProject' || fieldName === 'communicationPreferences';
    
    // Show error ONLY after form submission
    // Let users fill the entire form without seeing errors
    return isRequired && !fieldValue && isSubmitted;
  };

  return (
    <div className="get-started-form-container">
      <form onSubmit={handleSubmit} className={`get-started-form ${isSubmitted ? 'form-submitted' : ''}`}>
        <h2 className="form-title">Let's Get Started !</h2>
        
        {/* First Row - Full Name and Email */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="fullName" className="form-label required">
              Full Name
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
            <label htmlFor="email" className="form-label required">
              Email
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
              <div className="error-message">Email is required</div>
            )}
          </div>
        </div>

        {/* Second Row - Select Services and Phone Number */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="selectServices" className="form-label required">
              Select Services
            </label>
            <select
              id="selectServices"
              name="selectServices"
              value={formData.selectServices}
              onChange={handleInputChange}
              onBlur={() => handleBlur('selectServices')}
              required
              className={getSelectClassName('selectServices')}
            >
              <option value="">Select a service</option>
              <option value="book-publishing">Book Publishing</option>
              <option value="ghostwriting">Ghostwriting</option>
              <option value="book-formatting">Book Formatting</option>
              <option value="editing-proofreading">Editing & Proofreading</option>
              <option value="book-illustration">Book Illustration</option>
              <option value="audiobook-services">Audiobook Services</option>
              <option value="childrens-books">Children's Books</option>
              <option value="book-cover-design">Book Cover Design</option>
              <option value="book-marketing">Book Marketing</option>
            </select>
            {shouldShowError('selectServices') && (
              <div className="error-message">Please select a service</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber" className="form-label required">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              onBlur={() => handleBlur('phoneNumber')}
              required
              className={getInputClassName('phoneNumber')}
              placeholder="Enter your phone number"
            />
            {shouldShowError('phoneNumber') && (
              <div className="error-message">Phone number is required</div>
            )}
          </div>
        </div>

        {/* Third Row - About Project Textarea */}
        <div className="form-group">
          <label htmlFor="aboutProject" className="form-label required">
            About Project
          </label>
          <textarea
            id="aboutProject"
            name="aboutProject"
            value={formData.aboutProject}
            onChange={handleInputChange}
            onBlur={() => handleBlur('aboutProject')}
            required
            className={getTextareaClassName('aboutProject')}
            placeholder="Tell us about your project..."
            rows={4}
          />
          {shouldShowError('aboutProject') && (
            <div className="error-message">Project description is required</div>
          )}
        </div>

        {/* Checkbox for Communication Preferences */}
        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              id="communicationPreferences"
              name="communicationPreferences"
              checked={formData.communicationPreferences}
              onChange={handleInputChange}
              className={getCheckboxClassName('communicationPreferences')}
              required
            />
            <span className="checkbox-text">
              Please CHECK THE BOX to COMMUNICATE VIA SMS OR EMAIL (
              <a href="/privacy-policy" className="checkbox-link">PRIVACY POLICY</a> & 
              <a href="/terms-conditions" className="checkbox-link"> TERM & CONDITIONS</a>
              ) – Carrier charges may apply for SMS. Reply STOP or UNSUBSCRIBE to STOP anytime.
            </span>
          </label>
          {shouldShowError('communicationPreferences') && (
            <div className="error-message">Please check the box to continue</div>
          )}
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className={`submit-button ${isButtonDisabled() ? 'disabled' : ''}`}
          disabled={isButtonDisabled()}
          aria-disabled={isButtonDisabled()}
          aria-busy={isLoading}
        >
          LET'S GET STARTED
        </button>
      </form>
    </div>
  );
}
