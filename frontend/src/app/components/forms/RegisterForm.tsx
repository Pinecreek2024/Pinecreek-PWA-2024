import React, { useState } from 'react';
import TextInput from '@/components/ui/TextInput';
import Button from '@/components/common/Button';
import styles from './RegisterForm.module.css';

const RegisterForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    // Add more complex validation as needed

    const registrationData = {
      name,
      email,
      password // Consider using secure handling for passwords
    };

    try {
      // Replace with your actual API endpoint
      const response = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });

      if (response.ok) {
        alert('Registration successful!');
        // Further actions like redirecting the user or clearing the form
      } else {
        alert('Registration failed.');
        // Handle specific error cases here (e.g., email already in use)
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred during registration.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextInput
        label="Name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextInput
        label="Email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        label="Password"
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit">Register</Button>
    </form>
  );
};

export default RegisterForm;
