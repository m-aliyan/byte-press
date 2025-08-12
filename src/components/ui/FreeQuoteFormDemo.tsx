import React from 'react';
import FreeQuoteForm from './FreeQuoteForm';

export default function FreeQuoteFormDemo() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '2rem'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1rem' }}>
          Free Quote Form Demo
        </h1>
        <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem' }}>
          This is a demonstration of the FreeQuoteForm component
        </p>
      </div>
      
      <FreeQuoteForm />
    </div>
  );
}
