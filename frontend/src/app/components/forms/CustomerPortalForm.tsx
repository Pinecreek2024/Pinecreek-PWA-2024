import React, { useState } from 'react';
import TextInput from '@/components/ui/TextInput';
import Button from '@/components/common/Button';
import styles from './CustomerPortalForm.module.css';

const CustomerPortalForm: React.FC = () => {
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  // Additional fields as needed

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle updating customer information
  };

  return (
    <form onSubmit={handleUpdate} className={styles.form}>
      <h2>Your Profile</h2>
      <TextInput
        label="Name"
        name="name"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />
      <TextInput
        label="Email"
        name="email"
        type="email"
        value={customerEmail}
        onChange={(e) => setCustomerEmail(e.target.value)}
      />
      {/* Additional input fields as necessary */}
      <Button onClick={() => {}}>Update Profile</Button>
    </form>
  );
};

export default CustomerPortalForm;
