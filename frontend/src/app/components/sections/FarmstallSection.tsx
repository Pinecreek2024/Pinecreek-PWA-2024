import React, { useEffect, useState } from 'react';
import SectionLayout from '../layout/SectionLayout';
import Card from '../ui/Card';
import { FarmstallItem } from '@/interfaces/farmstalInterfaces'; // Import the FarmstallItem interface
import styles from './FarmstallSection.module.css';

const FarmstallSection: React.FC = () => {
  const [farmstallItems, setFarmstallItems] = useState<FarmstallItem[]>([]);
  const [error, setError] = useState<string | null>(null); // State for handling errors
  const [isLoading, setIsLoading] = useState<boolean>(false); // State for handling loading state

  useEffect(() => {
    const fetchFarmstallItems = async () => {
      setIsLoading(true); // Set loading state to true
      try {
        const response = await fetch('http://localhost:8000/api/farmstall');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setFarmstallItems(data);
      } catch (error) {
        console.error('Failed to fetch farmstall items:', error);
        setError('Failed to load farmstall items. Please try again later.');
      } finally {
        setIsLoading(false); // Set loading state to false regardless of outcome
      }
    };

    fetchFarmstallItems();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Or render a loading spinner component
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message
  }

  return (
    <SectionLayout title="Explore Our Farmstall">
      <div className={styles.cardsContainer}>
        {farmstallItems.map(item => (
          <Card
            key={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
            description={item.description}
            onClick={() => {/* Define onClick action if necessary */}}
          />
        ))}
      </div>
    </SectionLayout>
  );
};

export default FarmstallSection;
