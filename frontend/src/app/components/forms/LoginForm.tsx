import React, { useState } from 'react';
import TextInput from '@/components/ui/TextInput';
import Button from '@/components/common/Button';
import styles from './LoginForm.module.css';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple form validation
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }

    const loginData = {
      email,
      password
    };

    try {
      // Replace with your actual API endpoint
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        // Handle successful authentication
        alert('Logged in successfully!');
        // Update global state or redirect as needed
      } else {
        // Handle errors, such as invalid credentials
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Error logging in.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Login</h2>
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
      <Button type="submit">Log In</Button>
    </form>
  );
};

export default LoginForm;
