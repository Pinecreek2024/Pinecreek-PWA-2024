import React, { useState, useEffect, ChangeEvent } from 'react';
import TextInput from '@/components/ui/TextInput';
import Dropdown from '@/components/ui/Dropdown';
import Button from '@/components/common/Button';
import styles from './OrderForm.module.css';

interface MenuItem {
  value: string;
  label: string;
}

const OrderForm: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [menuItem, setMenuItem] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');
  const [specialInstructions, setSpecialInstructions] = useState<string>('');

  useEffect(() => {
    // Fetch menu items from an API
    const fetchMenuItems = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/menu-items');
        const items = await response.json();
        setMenuItems(items);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    fetchMenuItems();
  }, []);

  const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setMenuItem(e.target.value);
  };

  const handleTextInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'quantity') {
      setQuantity(value);
    } else if (name === 'specialInstructions') {
      setSpecialInstructions(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!menuItem || !quantity) {
      alert('Please select a menu item and specify the quantity.');
      return;
    }

    const orderData = {
      menuItem,
      quantity: parseInt(quantity, 10),
      specialInstructions
    };

    try {
      // Replace with your actual API endpoint
      const response = await fetch('http://localhost:8000/api/place-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        alert('Order placed successfully!');
        // Reset form or perform other actions as needed
      } else {
        alert('Failed to place order.');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Error in order submission.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Dropdown
        label="Menu Item"
        name="menuItem"
        options={menuItems}
        value={menuItem}
        onChange={handleDropdownChange}
      />
      <TextInput
        label="Quantity"
        name="quantity"
        type="number"
        value={quantity}
        onChange={handleTextInputChange}
      />
      <TextInput
        label="Special Instructions"
        name="specialInstructions"
        value={specialInstructions}
        onChange={handleTextInputChange}
      />
      <Button type="submit">Place Order</Button>
    </form>
  );
};

export default OrderForm;
