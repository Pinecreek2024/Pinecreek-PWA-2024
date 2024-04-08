// frontend/src/app/components/Users/[Id].tsx
import React from 'react';
import useUsers from '@/hooks/useUsers';

const UserIdComponent = () => {
  const { user } = useUsers();

  return (
    <div>
      <h3>User ID:</h3>
      <p>{user?.id}</p>
    </div>
  );
};

export default UserIdComponent;
