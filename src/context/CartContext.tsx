import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the Product type
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  quantity?: number; 
  measurement?: string; 
}

// Define the CartContext type
type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
};

// Create the CartContext
const CartContext = createContext<CartContextType | undefined>(undefined);

// Hook to use the CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// Provider Component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  // Add product to the cart with quantity set to 1 if not defined
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedProduct = {
        ...product,
        quantity: product.quantity ?? 1, 
      };
      return [...prevCart, updatedProduct];
    });
  };

  // Remove product from the cart by ID
  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  // Update the quantity of a product in the cart
  const updateQuantity = (productId: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId
          ? { ...product, quantity: Math.max(1, quantity) } 
          : product
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
