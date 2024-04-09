// frontend/src/pages/menu.tsx
import React, { useEffect, useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Card from '@/components/ui/Card';
import styles from './menu.module.css';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const MenuPage: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/menu/');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        console.error('Failed to fetch menu items:', error);
      }
    };

    fetchMenuItems();
  }, []);

  const handleCardClick = (itemId: number) => {
    // Placeholder functionality - replace with navigation or other actions
    console.log(`Menu item clicked: ${itemId}`);
  };

  return (
    <PageLayout title="Menu" description="Explore our delicious menu items">
      <div className={styles.menuContainer}>
        {menuItems.map(item => (
          <Card
            key={item.id}
            title={item.name}
            description={item.description}
            imageUrl={item.imageUrl}
            onClick={() => handleCardClick(item.id)}
          />
        ))}
      </div>
    </PageLayout>
  );
};

export default MenuPage;
