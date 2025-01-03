import { createContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import axios, { AxiosResponse } from "axios";

export type APIResponse = {
  id?: number;
  name?: string;
  [key: string]: ReactNode;
};

type cartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  items: cartItem[];
  name: string;
  setName: (name: string) => void;
  addItem: (item: cartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  fetchedData: APIResponse[] | null;
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
  const [name, setName] = useState<string>("Adebayo");
  const [fetchedData, setFetchedData] = useState<APIResponse[] | []>([]); // State to store API response

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<APIResponse[]> = await axios.get(
          "https://fakestoreapi.com/products"
        );
        setFetchedData(response.data);
        console.log("Hellow", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <CartContext.Provider
      value={{
        items,
        name,
        addItem,
        removeItem,
        clearCart,
        setName,
        fetchedData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
