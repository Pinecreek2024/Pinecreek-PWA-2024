// frontend/src/app/components/sections/MenuSection.tsx
import React, { useEffect, useState } from 'react';
import SectionLayout from '../layout/SectionLayout';
import Card from '../ui/Card';
import { MenuItem } from '../../interfaces/menuInterfaces';
import styles from './MenuSection.module.css';

const MenuSection: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/menu');
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        console.error('Failed to fetch menu items:', error);
      }
    };

    fetchMenuItems();
  }, []);

  const handleItemClick = (itemId: number) => {
    // Define what should happen when a menu item is clicked
    console.log('Menu item clicked:', itemId);
  };

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
