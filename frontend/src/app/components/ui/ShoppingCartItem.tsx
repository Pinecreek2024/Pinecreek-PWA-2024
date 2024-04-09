import React from 'react';
import Button from '@/components/common/Button';
import styles from './ShoppingCartItem.module.css';

interface ShoppingCartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    imageUrl?: string; // Optional image URL
  };
  onRemove: () => void;
}

const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({ item, onRemove }) => {
  return (
    <div className={styles.shoppingCartItem}>
      {item.imageUrl && (
        <div className={styles.itemImage}>
          <img src={item.imageUrl} alt={item.name} />
        </div>
      )}
      <div className={styles.itemInfo}>
        <p>{item.name}</p>
        <p>${(item.price * item.quantity).toFixed(2)} (${item.price.toFixed(2)} x {item.quantity})</p>
      </div>
      <div className={styles.removeButton}>
        <Button onClick={onRemove} aria-label={`Remove ${item.name} from cart`}>Remove</Button>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
