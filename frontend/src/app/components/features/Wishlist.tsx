import React, { useState, useEffect } from 'react';
import WishlistItem from '@/components/ui/WishlistItem';
import Button from '@/components/common/Button';
import styles from './Wishlist.module.css';

interface Item {
  id: number;
  name: string;
  price: number;
}

const Wishlist: React.FC = () => {
  const [wishlistItems, setWishlistItems] = useState<Item[]>([]);

  useEffect(() => {
    // Fetch wishlist items from an API or global state/store
    const fetchWishlistItems = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/wishlist');
        const items = await response.json();
        setWishlistItems(items);
      } catch (error) {
        console.error('Error fetching wishlist items:', error);
      }
    };

    fetchWishlistItems();
  }, []);

  const handleRemoveItem = async (itemId: number) => {
    // Logic to remove item from wishlist, including API call to update the server
    try {
      const response = await fetch(`http://localhost:8000/api/wishlist/${itemId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setWishlistItems(wishlistItems.filter(item => item.id !== itemId));
      } else {
        console.error('Failed to remove item from wishlist');
      }
    } catch (error) {
      console.error('Error removing item from wishlist:', error);
    }
  };

  return (
    <div className={styles.wishlist}>
      <h2>Your Wishlist</h2>
      {wishlistItems.length > 0 ? (
        wishlistItems.map(item => (
          <WishlistItem
            key={item.id}
            item={item}
            onRemove={() => handleRemoveItem(item.id)}
          />
        ))
      ) : (
        <p>Your wishlist is empty.</p>
      )}
      {/* Button for Wishlist-related actions (e.g., share, save, etc.) */}
      <Button className={styles.actionButton}>Share Wishlist</Button>
    </div>
  );
};

export default Wishlist;
