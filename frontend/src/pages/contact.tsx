import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import TextInput from '@/components/ui/TextInput';
import TextArea from '@/components/ui/TextArea';
import styles from './contact.module.css';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log("Form submitted successfully");
    } catch (error) {
      console.error('Failed to submit form:', error);
    }
  };

  return (
    <PageLayout title="Contact Us" description="Get in touch with us">
      <div className={styles.contactFormContainer}>
        <form onSubmit={handleSubmit}>
          <TextInput 
            label="Your Name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextInput 
            label="Your Email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextArea 
            label="Your Message"
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </div>
    </PageLayout>
  );
};

export default ContactPage;
