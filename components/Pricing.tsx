import React from 'react';
import './Pricing.css';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features }) => {
  return (
    <div className="pricing-card">
      <h3>{title}</h3>
      <p>{price}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button>Choose Plan</button>
    </div>
  );
};

const Pricing: React.FC = () => {
  return (
    <div className="pricing">
      <h2>Pricing Plans</h2>
      <div className="pricing-cards">
        <PricingCard 
          title="Free Plan"
          price="Free"
          features={["20 Message Chat Limit", "Max of 2 Participants in Chat", "Max of 3 Chats Available", "Supports 6 Languages"]}
        />
        <PricingCard 
          title="Premium"
          price="$9.99/month"
          features={["Unlimited Messages in Chat", "Unlimited Participants in Chat", "Unlimited Chat Rooms", "All Languages Available"]}
        />
        <PricingCard 
          title="Enterprise"
          price="Contact Us"
          features={["All Features of the Premium Plan", "For Large Enterprise Accounts", "Dedicated Support Team", "Early Access to New Features"]}
        />
      </div>
    </div>
  );
};

export default Pricing;
