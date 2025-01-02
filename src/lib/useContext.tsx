import { createContext, useState } from "react";
import { ReactNode } from "react";

type cartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  items: cartItem[];
  name: string; // Add the new 'name' value to the context type
  setName: (name: string) => void;
  addItem: (item: cartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<cartItem[]>([]);
  const [name, setName] = useState<string>("Adebayo"); // Initialize name in state

  const addItem = (item: cartItem) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      } else {
        return [...prevItems, item];
      }
    });
  };

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        name,
        addItem,
        removeItem,
        clearCart,
        setName,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
