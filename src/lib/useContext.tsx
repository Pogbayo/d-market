import { createContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import axios, { AxiosResponse } from "axios";

export type APIResponse = {
  category: string;
  description: string;
  id: number;
  images: string;
  price: number;
  rating: object;
  title: string;
};

type cartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};
export type recentlyFeaturedDataProp = {
  category: string;
  description: string;
  id: number;
  images: string;
  price: number;
  rating: object;
  title: string;
};
type CartContextType = {
  items: cartItem[];
  name: string;
  setName: (name: string) => void;
  addItem: (item: cartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  fetchedData: APIResponse[] | null;
  recentlyFeaturedData: recentlyFeaturedDataProp[] | [];
  addToRecentlyFeaturedArray: (item: recentlyFeaturedDataProp) => void;
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
  const [recentlyFeaturedData, setrecentlyFeaturedData] = useState<
    recentlyFeaturedDataProp[] | []
  >([]);

  const addToRecentlyFeaturedArray = (item: recentlyFeaturedDataProp) => {
    setrecentlyFeaturedData((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems;
      } else {
        return [...prevItems, item];
      }
    });
  };

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
          "https://api.escuelajs.co/api/v1/products"
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
        recentlyFeaturedData,
        addToRecentlyFeaturedArray,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
