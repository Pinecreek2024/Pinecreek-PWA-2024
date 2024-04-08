// frontend/src/app/components/Users/UserProfile.tsx
import React, { useEffect } from 'react';
import { useUser } from '@/context/UserContext';
import { User } from '@/interfaces/userInterfaces';

const UserProfile = () => {
  const { user, fetchUser, updateUser } = useUser();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const handleUpdate = () => {
    if (user) {
      const updatedUserData: User = { ...user, name: 'New Name' };
      updateUser(updatedUserData);
    }
  };

  if (!user) return <div>Loading user data...</div>;

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={handleUpdate}>Update Profile</button>
    </div>
  );
};

export default UserProfile;
