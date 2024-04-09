// YourProjectDirectory/frontend/src/app/hooks/useAuth.ts
import { useContext } from 'react';
import axios from 'axios';
import UserContext, { UserContextType } from '@/context/AuthContext';

const useAuth = () => {
  const context = useContext<UserContextType | null>(UserContext);

  if (!context) {
    throw new Error('useAuth must be used within a UserProvider');
  }

  const { user, fetchUser, updateUser } = context;

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      if (response.data.user) {
        // Assuming updateUser sets the user, it can be used here
        updateUser(response.data.user);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login failed', error);
      return false;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await axios.post('/api/auth/logout');
      // Assuming fetchUser will reset the user on logout
      fetchUser();
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  const isAuthenticated = (): boolean => {
    return !!user;
  };

  return { user, login, logout, isAuthenticated };
};

export default useAuth;
