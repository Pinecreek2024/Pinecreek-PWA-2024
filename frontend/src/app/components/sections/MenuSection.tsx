import React, { useEffect, useState } from 'react';
import SectionLayout from '../layout/SectionLayout';
import Card from '../ui/Card';
import { MenuItem } from '../../interfaces/menuInterfaces';
import styles from './MenuSection.module.css';

const MenuSection: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/menu');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        console.error('Failed to fetch menu items:', error);
        setError('Failed to load menu items. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  const handleItemClick = (itemId: number) => {
    console.log('Menu item clicked:', itemId);
    // Additional click handling logic here
  };

  if (isLoading) {
    return <div>Loading menu items...</div>; // Or use a spinner component
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message
  }

  return (
    <SectionLayout title="Our Menu">
      <div className={styles.cardsContainer}>
        {menuItems.map(item => (
          <Card
            key={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
            description={item.description}
            onClick={() => handleItemClick(item.id)}
          />
        ))}
      </div>
    </SectionLayout>
  );
};

export default MenuSection;
