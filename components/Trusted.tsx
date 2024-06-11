// TrustedBySection.tsx

import React from 'react';
import './Pricing.css'; // Import the pricing.css styles

const TrustedBySection: React.FC = () => {
  // Array of logos
  const logos = [
    { src: '/gap-logo.png', alt: 'Logo 1' },
    { src: '/banana-republic-logo.png', alt: 'Logo 3' },
    { src: '/old-navy.jpeg', alt: 'Logo 3' },
    { src: '/tommy-logo.jpg', alt: 'Logo 2' },
  
    // Add more logo objects as needed
  ];

  return (
    <section className="homepage_logos-section pricing">
      <div className="max-container">
        <h2>Trusted By</h2>
        <div className="logos-container">
          {logos.map((logo, index) => (
            <div className="logo-item" key={index}>
              <img src={logo.src} alt={logo.alt} className="logo-image grayscale" /> {/* Add the "grayscale" class */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;


