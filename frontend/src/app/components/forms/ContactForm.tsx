import React, { useState } from 'react';
import TextInput from '@/components/ui/TextInput';
import TextArea from '@/components/ui/TextArea';
import Button from '@/components/common/Button';
import styles from './ContactForm.module.css';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple front-end validation (extend as needed)
    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }

    const formData = {
      name,
      email,
      message
    };

    try {
      // Replace with your API endpoint
      const response = await fetch('http://localhost:8000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful submission (e.g., display thank you message, clear form)
        alert('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        // Handle errors (e.g., display error message)
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('Error submitting message.');
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
      <TextArea
        label="Message"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button type="submit">Send Message</Button>
    </form>
  );
};

export default ContactForm;
