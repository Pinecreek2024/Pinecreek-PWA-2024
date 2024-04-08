import React, { useState } from 'react';
import ShoppingCartItem from '@/components/ui/ShoppingCartItem'; // A separate component for individual items in the cart
import Button from '@/components/common/Button';
import styles from './ShoppingCart.module.css';

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState([
    // Sample cart items; in a real app, this would be fetched from a store or API
    { id: 1, name: 'Item 1', price: 10.00, quantity: 2 },
    { id: 2, name: 'Item 2', price: 15.50, quantity: 1 },
    // Add more items as necessary
  ]);

  const handleRemoveItem = (itemId: number) => {
    // Logic to remove item from cart
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const handleCheckout = () => {
    // Checkout logic
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className={styles.shoppingCart}>
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (
        <ShoppingCartItem
          key={item.id}
          item={item}
          onRemove={() => handleRemoveItem(item.id)}
        />
      ))}
      <div className={styles.total}>
        <p>Total: ${calculateTotal().toFixed(2)}</p>
        <Button onClick={handleCheckout}>Proceed to Checkout</Button>
      </div>
    </div>
  );
};

export default ShoppingCart;
