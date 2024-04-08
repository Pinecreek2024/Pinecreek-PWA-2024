// frontend/src/app/hooks/useUsers.ts
import { useUser } from '@/context/UserContext';

const useUsers = () => {
  const { user, fetchUser, updateUser } = useUser();
  return { user, fetchUser, updateUser };
}

export default useUsers;
