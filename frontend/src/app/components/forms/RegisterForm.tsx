import React, { useState } from 'react';
import TextInput from '@/components/ui/TextInput';
import Button from '@/components/common/Button';
import styles from './RegisterForm.module.css';

const RegisterForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
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
      <Button onClick={() => {}}>Register</Button>
    </form>
  );
};

export default RegisterForm;
