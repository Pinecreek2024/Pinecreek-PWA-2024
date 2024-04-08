import React from 'react';
import Card from '@/components/ui/Card'; // Reusable Card component for displaying menu items
import styles from './MenuSection.module.css';

const MenuSection: React.FC = () => {
  const menuItems = [
    // Sample data; typically fetched from an API
    { id: 1, title: 'Dish 1', imageUrl: '/path/to/dish1.jpg', description: 'Description of Dish 1' },
    { id: 2, title: 'Dish 2', imageUrl: '/path/to/dish2.jpg', description: 'Description of Dish 2' },
    // More menu items as necessary
  ];

  return (
    <div className={styles.menuSection}>
      <h2>Our Menu</h2>
      <div className={styles.cardsContainer}>
        {menuItems.map(item => (
          <Card
            key={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
            description={item.description}
            onClick={() => {/* Handle item selection or navigation */}}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
