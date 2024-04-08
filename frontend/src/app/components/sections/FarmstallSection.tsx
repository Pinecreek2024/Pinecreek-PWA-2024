import React from 'react';
import Card from '@/components/ui/Card'; // Reusable Card component for displaying farmstall items
import styles from './FarmstallSection.module.css';

const FarmstallSection: React.FC = () => {
  const farmstallItems = [
    // Sample data; ideally fetched from an API
    { id: 1, title: 'Item 1', imageUrl: '/path/to/item1.jpg', description: 'Description for Item 1' },
    { id: 2, title: 'Item 2', imageUrl: '/path/to/item2.jpg', description: 'Description for Item 2' },
    // Additional items as needed
  ];

  return (
    <div className={styles.farmstallSection}>
      <h2>Explore Our Farmstall</h2>
      <div className={styles.cardsContainer}>
        {farmstallItems.map(item => (
          <Card 
            key={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
            description={item.description}
            onClick={() => {/* Item click handler */}}
          />
        ))}
      </div>
    </div>
  );
};

export default FarmstallSection;
