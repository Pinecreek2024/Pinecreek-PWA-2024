import React from 'react';
import Button from '@/components/common/Button';
import styles from './ShoppingCartItem.module.css';

interface ShoppingCartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  };
  onRemove: () => void;
}

const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({ item, onRemove }) => {
  return (
    <div className={styles.shoppingCartItem}>
      <div className={styles.itemInfo}>
        <p>{item.name}</p>
        <p>${item.price.toFixed(2)} x {item.quantity}</p>
      </div>
      <div className={styles.removeButton}>
        <Button onClick={onRemove}>Remove</Button>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
