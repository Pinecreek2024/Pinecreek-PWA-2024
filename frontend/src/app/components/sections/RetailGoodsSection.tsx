import React, { useEffect, useState } from 'react';
import Card from '@/components/ui/Card';
import { RetailGood } from '@/interfaces/retailInterfaces';
import styles from './RetailGoodsSection.module.css';

const RetailGoodsSection: React.FC = () => {
  const [retailGoods, setRetailGoods] = useState<RetailGood[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRetailGoods = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/retail-goods');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setRetailGoods(data);
      } catch (error) {
        console.error('Failed to fetch retail goods:', error);
        setError('Failed to load retail goods. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchRetailGoods();
  }, []);

  const handleProductClick = (productId: number) => {
    console.log('Product clicked:', productId);
    // Additional logic for navigating to product detail page
  };

  if (isLoading) {
    return <div>Loading retail goods...</div>; // Or use a spinner component
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message
  }

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
