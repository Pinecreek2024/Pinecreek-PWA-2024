import React, { useState, ChangeEvent } from 'react';
import TextInput from '@/components/ui/TextInput';
import Dropdown from '@/components/ui/Dropdown';
import Button from '@/components/common/Button';
import styles from './OrderForm.module.css';

const OrderForm: React.FC = () => {
  const [menuItem, setMenuItem] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');
  const [specialInstructions, setSpecialInstructions] = useState<string>('');

  const menuItems = [
    { value: 'item1', label: 'Item 1' },
    { value: 'item2', label: 'Item 2' },
    // Add more menu items as needed
  ];

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
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
      <Button onClick={() => {}}>Place Order</Button>
    </form>
  );
};

export default OrderForm;
