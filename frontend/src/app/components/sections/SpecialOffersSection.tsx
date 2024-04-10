import React, { useEffect, useState } from 'react';
import Card from '@/components/ui/Card';
import { SpecialOffer } from '@/interfaces/specialInterfaces'; // Import the SpecialOffer interface
import styles from './SpecialOffersSection.module.css';

const SpecialOffersSection: React.FC = () => {
  const [specialOffers, setSpecialOffers] = useState<SpecialOffer[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSpecialOffers = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/special-offers');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        if (Array.isArray(data)) { // Add a check to ensure data is an array
          setSpecialOffers(data);
        } else {
          throw new Error('Invalid data format! Expected an array.');
        }
      } catch (error) {
        console.error('Failed to fetch special offers:', error);
        setError('Failed to load special offers. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSpecialOffers();
  }, []);

  if (isLoading) {
    return <div>Loading special offers...</div>; // Or use a spinner component
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message
  }

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
            onClick={() => console.log('Special offer clicked:', offer.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialOffersSection;
