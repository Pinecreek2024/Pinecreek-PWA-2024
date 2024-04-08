import React from 'react';
import Button from '@/components/common/Button'; // Reusable Button component
import styles from './WishlistItem.module.css';

interface WishlistItemProps {
  item: {
    id: number;
    name: string;
    price: number;
  };
  onRemove: () => void;
}

const WishlistItem: React.FC<WishlistItemProps> = ({ item, onRemove }) => {
  return (
    <div className={styles.wishlistItem}>
      <div className={styles.itemDetails}>
        <p className={styles.itemName}>{item.name}</p>
        <p className={styles.itemPrice}>${item.price.toFixed(2)}</p>
      </div>
      <Button onClick={onRemove}>Remove</Button>
    </div>
  );
};

export default WishlistItem;
