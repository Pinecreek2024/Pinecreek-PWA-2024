// YourProjectDirectory/frontend/src/app/hooks/useCart.ts
import { useContext } from 'react';
import { CartContext, CartContextType } from '@/context/CartContext';

const useCart = () => {
  const context = useContext<CartContextType | null>(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return {
    items: context.items,
    addItem: context.addItem,
    removeItem: context.removeItem,
    clearCart: context.clearCart,
    total: context.total
  };
};

export default useCart;
