import React, { useState, useEffect } from 'react';
import ShoppingCartItem from '@/components/ui/ShoppingCartItem';
import Button from '@/components/common/Button';
import styles from './ShoppingCart.module.css';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    // Ideally, fetch cart items from an API or global state/store
    const fetchCartItems = async () => {
      // Example API call
      try {
        const response = await fetch('http://localhost:8000/api/cart-items');
        const items = await response.json();
        setCartItems(items);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const handleRemoveItem = (itemId: number) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
    // Additionally, make an API call to update the server-side cart
  };

  const handleCheckout = () => {
    // Redirect to checkout page or handle checkout logic
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className={styles.shoppingCart}>
      <h2>Shopping Cart</h2>
      {cartItems.length ? (
        cartItems.map(item => (
          <ShoppingCartItem
            key={item.id}
            item={item}
            onRemove={() => handleRemoveItem(item.id)}
          />
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      <div className={styles.total}>
        <p>Total: ${calculateTotal().toFixed(2)}</p>
        <Button onClick={handleCheckout}>Proceed to Checkout</Button>
      </div>
    </div>
  );
};

export default ShoppingCart;
