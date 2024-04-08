import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import { User } from '@/interfaces/userInterfaces'; // Ensure this path correctly points to your User interface

interface UserContextType {
  user: User | null;
  fetchUser: () => Promise<void>;
  updateUser: (userData: User) => Promise<void>;
}

const UserContext = createContext<UserContextType | null>(null);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Fetch the user data when the component mounts
  useEffect(() => {
    fetchUser();
  }, []);

  // Function to fetch user data
  const fetchUser = async () => {
    try {
      const response = await axios.get('/api/user'); // Adjust this endpoint as needed
      setUser(response.data as User); // Assuming the response data is of type User
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  // Function to update user data
  const updateUser = async (userData: User) => {
    try {
      const response = await axios.put(`/api/user/${userData.id}`, userData); // Adjust this endpoint as needed
      setUser(response.data as User); // Assuming the response data is of type User
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  // Provide the user and functions to the context consumers
  return (
    <UserContext.Provider value={{ user, fetchUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for using the user context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export default UserContext; // Exporting the context itself for optional use
export type { UserContextType }; // Exporting the type for TypeScript usage
