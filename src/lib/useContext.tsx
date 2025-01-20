import { createContext, useEffect, useMemo, useState } from "react";
import { ReactNode } from "react";
import axios, { AxiosResponse } from "axios";

export type APIResponse = {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: {
    id: number;
    name: string;
    image: string;
  };
  quantity: number;
};

type cartItem = {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: {
    id: number;
    name: string;
    image: string;
  };
  quantity: number;
};
export type recentlyFeaturedDataProp = {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: {
    id: number;
    name: string;
    image: string;
  };
  quantity: number;
};
export type Item = {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: {
    id: number;
    name: string;
    image: string;
  };
  quantity: number;
};
type CartContextType = {
  items: cartItem[];
  cartValue: APIResponse[];
  name: string;
  setName: (name: string) => void;
  addItemToCart: (item: cartItem) => void;
  removeItemFromCart: (id: number) => void;
  clearCart: () => void;
  fetchedData: APIResponse[] | null;
  recentlyFeaturedData: recentlyFeaturedDataProp[] | [];
  addToRecentlyFeaturedArray: (item: recentlyFeaturedDataProp) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedItem: Item | null;
  showModal: boolean;
  openModal: (item: Item) => void;
  closeModal: () => void;
  isLoading: boolean;
  cartCount: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setIsLoading: any;
  handleProductClick: (item: recentlyFeaturedDataProp) => void;
  // cartList: APIResponse[] | null;
  increaseQuantity: (item: cartItem) => void;
  decreaseQuantity: (item: cartItem) => void;
  handleAddItem: (item: recentlyFeaturedDataProp) => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<APIResponse[]>([]);
  const cartValue = useMemo(() => ({ items, setItems }), [items]);
  const cartCount = items.length;
  // const [items, setItems] = useState<cartItem[]>(() => {
  //   const savedCart = localStorage.getItem("cartItems");
  //   return savedCart ? JSON.parse(savedCart) : [];
  // });
  const [name, setName] = useState<string>("Adebayo");
  const [fetchedData, setFetchedData] = useState<APIResponse[] | []>([]);
  const [recentlyFeaturedData, setrecentlyFeaturedData] = useState<
    recentlyFeaturedDataProp[] | []
  >([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(items));
    } else {
      localStorage.removeItem("cartItems");
    }
  }, [items]);

  const openModal = (item: Item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

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

  const handleProductClick = (item: recentlyFeaturedDataProp) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      openModal(item);
    }, 2000);
  };

  const handleAddItem = (item: recentlyFeaturedDataProp) => {
    addToRecentlyFeaturedArray(item);
    handleProductClick(item);
  };

  const addItemToCart = (item: cartItem) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };
  const increaseQuantity = (item: cartItem) => {
    setItems((prevItems) =>
      prevItems.map((i) =>
        i.id === item.id ? { ...i, quantity: (i.quantity || 0) + 1 } : i
      )
    );
  };
  const decreaseQuantity = (item: cartItem) => {
    setItems((prevItems) =>
      prevItems.map((i) =>
        i.id === item.id ? { ...i, quantity: Math.max(i.quantity - 1, 0) } : i
      )
    );
  };

  const removeItemFromCart = (id: number) => {
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
        console.log(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartCount,
        name,
        cartValue: items,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        setName,
        fetchedData,
        recentlyFeaturedData,
        addToRecentlyFeaturedArray,
        searchQuery,
        setSearchQuery,
        selectedItem,
        showModal,
        openModal,
        closeModal,
        isLoading,
        handleProductClick,
        handleAddItem,
        increaseQuantity,
        decreaseQuantity,
        setIsLoading,
        ...cartValue,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
