import React from 'react';
import Card from '@/components/ui/Card'; // Assuming the Card component is used for individual items
import styles from './RetailGoodsSection.module.css';

const RetailGoodsSection: React.FC = () => {
  const retailGoods = [
    // Sample data, typically sourced from an API
    { id: 1, title: 'Product 1', imageUrl: '/path/to/product1.jpg', description: 'Description for Product 1' },
    { id: 2, title: 'Product 2', imageUrl: '/path/to/product2.jpg', description: 'Description for Product 2' },
    // More products as needed
  ];

  return (
    <div className={styles.retailGoodsSection}>
      <h2>Explore Our Retail Goods</h2>
      <div className={styles.cardsContainer}>
        {retailGoods.map(product => (
          <Card
            key={product.id}
            title={product.title}
            imageUrl={product.imageUrl}
            description={product.description}
            onClick={() => {/* Handle click event for product details or purchase */}}
          />
        ))}
      </div>
    </div>
  );
};

export default RetailGoodsSection;
