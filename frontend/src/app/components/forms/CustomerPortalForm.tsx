import React, { useState } from 'react';
import TextInput from '@/components/ui/TextInput';
import Button from '@/components/common/Button';
import styles from './CustomerPortalForm.module.css';

const CustomerPortalForm: React.FC = () => {
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  // Additional fields as needed

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!customerName || !customerEmail) {
      alert('Please fill all required fields.');
      return;
    }

    const updatedCustomerInfo = {
      name: customerName,
      email: customerEmail
      // Include other fields as necessary
    };

    try {
      // Replace with your API endpoint
      const response = await fetch('http://localhost:8000/api/customer-update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCustomerInfo),
      });

      if (response.ok) {
        alert('Profile updated successfully!');
        // Further actions like updating global state or UI
      } else {
        alert('Failed to update profile.');
      }
    } catch (error) {
      console.error('Error updating customer profile:', error);
      alert('Error updating profile.');
    }
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
      <Button type="submit">Update Profile</Button>
    </form>
  );
};

export default CustomerPortalForm;
