// frontend/src/pages/customer-portal.tsx
import React, { useEffect, useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import styles from './customer-portal.module.css'; // Ensure this CSS module exists

// Example data structure, replace with your actual data structure
interface UserProfile {
  name: string;
  email: string;
  // Add other user profile fields
}

const CustomerPortal: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch('http://localhost:8000/api/user-profile/');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setUserProfile(data);
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <PageLayout title="Customer Portal" description="Manage your account and orders">
      <div className={styles.portalContainer}>
        <h1>Welcome to Your Portal, {userProfile?.name}</h1>
        <div className={styles.content}>
          <p>Email: {userProfile?.email}</p>
          {/* Add more user information and functionalities here */}
          {/* Example: Order history, profile settings, etc. */}
        </div>
      </div>
    </PageLayout>
  );
};

export default CustomerPortal;
