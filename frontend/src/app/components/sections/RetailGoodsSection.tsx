// frontend/src/app/components/sections/RetailGoodsSection.tsx
import React, { useEffect, useState } from 'react';
import Card from '@/components/ui/Card';
import { RetailGood } from '@/interfaces/retailInterfaces';
import styles from './RetailGoodsSection.module.css';

const RetailGoodsSection: React.FC = () => {
  const [retailGoods, setRetailGoods] = useState<RetailGood[]>([]);

  useEffect(() => {
    const fetchRetailGoods = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/retail-goods');
        const data = await response.json();
        setRetailGoods(data);
      } catch (error) {
        console.error('Failed to fetch retail goods:', error);
      }
    };

    fetchRetailGoods();
  }, []);

  const handleProductClick = (productId: number) => {
    // Define action for product click (e.g., navigate to product details)
    console.log('Product clicked:', productId);
  };

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
            onClick={() => handleProductClick(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default RetailGoodsSection;
