import React, { useEffect, useState } from 'react';
import Card from '@/components/ui/Card';
import styles from './ProductRecommendations.module.css';

interface Product {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
}

const ProductRecommendations: React.FC = () => {
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Replace with the actual API call
    const fetchRecommendedProducts = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/recommended-products');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const products = await response.json();
        setRecommendedProducts(products);
      } catch (error) {
        console.error('Failed to fetch recommended products:', error);
      }
    };

    fetchRecommendedProducts();
  }, []);

  const handleProductClick = (productId: number) => {
    // Handle the product click event, such as navigating to the product detail page
    console.log(`Product ${productId} clicked`);
  };

  return (
    <div className={styles.productRecommendations}>
      <h2>Recommended for You</h2>
      <div className={styles.cardsContainer}>
        {recommendedProducts.map(product => (
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

export default ProductRecommendations;
