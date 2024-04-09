// frontend/src/app/components/sections/SpecialOffersSection.tsx
import React, { useEffect, useState } from 'react';
import Card from '@/components/ui/Card';
import { SpecialOffer } from '@/interfaces/specialInterfaces'; // Import the SpecialOffer interface
import styles from './SpecialOffersSection.module.css';

const SpecialOffersSection: React.FC = () => {
  const [specialOffers, setSpecialOffers] = useState<SpecialOffer[]>([]);

  useEffect(() => {
    const fetchSpecialOffers = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/special-offers');
        const data = await response.json();
        setSpecialOffers(data);
      } catch (error) {
        console.error('Failed to fetch special offers:', error);
      }
    };

    fetchSpecialOffers();
  }, []);

  const handleOfferClick = (offerId: number) => {
    // Define action for offer click (e.g., navigate to offer details)
    console.log('Special offer clicked:', offerId);
  };

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
            onClick={() => handleOfferClick(offer.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialOffersSection;
