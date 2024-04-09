// frontend/src/app/components/sections/FarmstallSection.tsx
import React, { useEffect, useState } from 'react';
import SectionLayout from '../layout/SectionLayout';
import Card from '../ui/Card';
import { FarmstallItem } from '@/interfaces/farmstalInterfaces'; // Import the FarmstallItem interface
import styles from './FarmstallSection.module.css';

const FarmstallSection: React.FC = () => {
  const [farmstallItems, setFarmstallItems] = useState<FarmstallItem[]>([]); // Use the FarmstallItem interface for the state

  useEffect(() => {
    const fetchFarmstallItems = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/farmstall');
        const data = await response.json();
        setFarmstallItems(data);
      } catch (error) {
        console.error('Failed to fetch farmstall items:', error);
      }
    };

    fetchFarmstallItems();
  }, []);

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
