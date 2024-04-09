// frontend/src/pages/shop.tsx
import React, { useEffect, useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Card from '@/components/ui/Card';
import styles from './shop.module.css';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ShopPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/products/');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (productId: number) => {
    // Placeholder for product click functionality
    console.log(`Product clicked: ${productId}`);
  };

  return (
    <PageLayout title="Shop" description="Explore our products">
      <div className={styles.shopContainer}>
        {products.map(product => (
          <Card
            key={product.id}
            title={product.name}
            description={product.description}
            imageUrl={product.imageUrl}
            onClick={() => handleProductClick(product.id)}
          />
        ))}
      </div>
    </PageLayout>
  );
};

export default ShopPage;
