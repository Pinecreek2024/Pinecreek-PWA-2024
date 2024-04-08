import React, { useState } from 'react';
import TextInput from '@/components/ui/TextInput';
import TextArea from '@/components/ui/TextArea';
import Button from '@/components/common/Button';
import styles from './ContactForm.module.css';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle contact form submission logic here
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
      <TextArea
        label="Message"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button onClick={() => {}}>Send Message</Button>
    </form>
  );
};

export default ContactForm;
