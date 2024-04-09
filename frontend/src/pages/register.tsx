// frontend/src/pages/register.tsx
import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import TextInput from '@/components/ui/TextInput';
import Button from '@/components/common/Button'; // Ensure Button is correctly imported
import styles from './register.module.css';

const RegisterPage: React.FC = () => {
  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validation logic (e.g., checking if passwords match) should be added here

    try {
      const response = await fetch('http://localhost:8000/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: registerData.username,
          email: registerData.email,
          password: registerData.password,
          // Confirm password can be handled on the backend or used for front-end validation
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Registration successful:', data);
      // Handle registration success (e.g., redirect to login page, show success message)
    } catch (error) {
      console.error('Failed to register:', error);
      // Handle registration failure (e.g., show error message)
    }
  };

  return (
    <PageLayout title="Register" description="Create a new account">
      <div className={styles.registerContainer}>
        <form onSubmit={handleSubmit} className={styles.registerForm}>
          <TextInput 
            label="Username"
            name="username"
            placeholder="Enter your username"
            value={registerData.username}
            onChange={handleChange}
          />
          <TextInput 
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={registerData.email}
            onChange={handleChange}
          />
          <TextInput 
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={registerData.password}
            onChange={handleChange}
          />
          <TextInput 
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            value={registerData.confirmPassword}
            onChange={handleChange}
          />
          <Button type="submit" className={styles.registerButton}>Register</Button>
        </form>
      </div>
    </PageLayout>
  );
};

export default RegisterPage;
