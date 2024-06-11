import React from 'react';
import './Pricing.css'; // Reuse the CSS styles from Pricing.css

interface ContactCardProps {
  title: string;
  description: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ title, description }) => {
  return (
    <div className="pricing-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Contact Us</button> {/* Change the button text */}
    </div>
  );
};

const Contact: React.FC = () => {
  return (
    <div className="pricing">
      <h2>Contact Options</h2> {/* Change the header */}
      <div className="pricing-cards">
        <ContactCard 
          title="Email Support"
          description="Send us an email at support@example.com and we'll get back to you as soon as possible."
        />
        <ContactCard 
          title="Phone Support"
          description="Call our support team at 1-800-555-1234. We're available from Monday to Friday, 9 AM to 5 PM."
        />
        <ContactCard 
          title="Live Chat"
          description="Chat with us live using our website's chat feature. We're online 24/7 to assist you."
        />
      </div>
    </div>
  );
};

export default Contact;
