import React, { useState } from 'react';
import WishlistItem from '@/components/ui/WishlistItem'; // A component for individual wishlist items
import styles from './Wishlist.module.css';

const Wishlist: React.FC = () => {
  const [wishlistItems, setWishlistItems] = useState([
    // Sample data; in a real app, this would likely be fetched from an API
    { id: 1, name: 'Item 1', price: 10.00 },
    { id: 2, name: 'Item 2', price: 15.50 },
    // Add more items as necessary
  ]);

  const handleRemoveItem = (itemId: number) => {
    // Logic to remove item from wishlist
    setWishlistItems(wishlistItems.filter(item => item.id !== itemId));
  };

  return (
    <div className={styles.wishlist}>
      <h2>Your Wishlist</h2>
      {wishlistItems.map(item => (
        <WishlistItem
          key={item.id}
          item={item}
          onRemove={() => handleRemoveItem(item.id)}
        />
      ))}
    </div>
  );
};

export default Wishlist;
