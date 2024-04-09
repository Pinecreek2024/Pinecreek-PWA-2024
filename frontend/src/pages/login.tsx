// frontend/src/pages/login.tsx
import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import TextInput from '@/components/ui/TextInput';
import Button from '@/components/common/Button'; // Importing Button from common components
import styles from './login.module.css'; // Ensure this CSS module exists

const LoginPage: React.FC = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/auth/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Login successful:', data);
      // Handle login success (e.g., store tokens, navigate to dashboard)
    } catch (error) {
      console.error('Failed to log in:', error);
      // Handle login failure (e.g., show error message)
    }
  };

  return (
    <PageLayout title="Login" description="Access your account">
      <div className={styles.loginContainer}>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <TextInput 
            label="Username"
            name="username"
            placeholder="Enter your username"
            value={loginData.username}
            onChange={handleChange}
          />
          <TextInput 
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={loginData.password}
            onChange={handleChange}
          />
          <Button type="submit" className={styles.loginButton}>Login</Button>
        </form>
      </div>
    </PageLayout>
  );
};

export default LoginPage;
