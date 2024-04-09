// frontend/src/pages/farmstall.tsx
import React, { useEffect, useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Card from '@/components/ui/Card';
import styles from './farmstall.module.css';

interface FarmstallItem {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

const FarmstallPage: React.FC = () => {
  const [items, setItems] = useState<FarmstallItem[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/farmstallitems/');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Failed to fetch farmstall items:', error);
      }
    };

    fetchItems();
  }, []);

  const handleItemClick = (itemId: number) => {
    // Placeholder for item click functionality
    console.log(`Farmstall item clicked: ${itemId}`);
  };

  return (
    <PageLayout title="Farmstall" description="Explore our farmstall items">
      <div className={styles.farmstallContainer}>
        {items.map(item => (
          <Card
            key={item.id}
            title={item.name}
            description={item.description}
            imageUrl={item.imageUrl}
            onClick={() => handleItemClick(item.id)}
          />
        ))}
      </div>
    </PageLayout>
  );
};

export default FarmstallPage;
