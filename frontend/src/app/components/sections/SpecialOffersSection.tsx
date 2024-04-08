import React from 'react';
import Card from '@/components/ui/Card'; // Assuming Card is used for displaying offers
import styles from './SpecialOffersSection.module.css';

const SpecialOffersSection: React.FC = () => {
  const specialOffers = [
    // Sample offers; typically fetched from an API
    { id: 1, title: 'Offer 1', imageUrl: '/path/to/offer1.jpg', description: 'Description for Offer 1' },
    { id: 2, title: 'Offer 2', imageUrl: '/path/to/offer2.jpg', description: 'Description for Offer 2' },
    // More offers as needed
  ];

  return (
    <div className={styles.specialOffersSection}>
      <h2>Special Offers</h2>
      <div className={styles.cardsContainer}>
        {specialOffers.map(offer => (
          <Card
            key={offer.id}
            title={offer.title}
            imageUrl={offer.imageUrl}
            description={offer.description}
            onClick={() => {/* Handle offer selection or navigation */}}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialOffersSection;
