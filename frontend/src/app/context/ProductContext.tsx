// ProductContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface ProductContextType {
  products: Product[];
  fetchProducts: () => Promise<void>;
  getProduct: (productId: string) => Product | undefined;
}

const ProductContext = createContext<ProductContextType>(null!);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Optionally, fetch products when the component mounts
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products', error);
    }
  };

  const getProduct = (productId: string) => {
    return products.find(product => product.id === productId);
  };

  return (
    <ProductContext.Provider value={{ products, fetchProducts, getProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
