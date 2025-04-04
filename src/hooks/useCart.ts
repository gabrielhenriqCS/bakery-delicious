import { useState } from 'react';
import { BagItem } from '../types/bakery';

export const useBag = () => {
  const [bagItems, setBagItems] = useState<BagItem[]>([]);
  
  const addToBag = (product: BagItem) => {
    setBagItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromBag = (productId: string) => {
    setBagItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromBag(productId);
      return;
    }
    setBagItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setBagItems([]);

  const total = bagItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return {
    bagItems,
    addToBag,
    removeFromBag,
    updateQuantity,
    clearCart,
    total,
    count: bagItems.reduce((sum, item) => sum + item.quantity, 0)
  };
};