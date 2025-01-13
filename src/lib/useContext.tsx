import { createContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import axios, { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

export type APIResponse = {
  id: string;
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
  id: string;
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
  id: string;
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
  id: string;
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
  name: string;
  setName: (name: string) => void;
  addItemToCart: (item: cartItem) => void;
  removeItemFromCart: (id: string) => void;
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
  handleProductClick: (item: recentlyFeaturedDataProp) => void;
  // cartList: APIResponse[] | null;
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
  const [items, setItems] = useState<cartItem[]>([]);
  const [name, setName] = useState<string>("Adebayo");
  const [fetchedData, setFetchedData] = useState<APIResponse[] | []>([]);
  const [recentlyFeaturedData, setrecentlyFeaturedData] = useState<
    recentlyFeaturedDataProp[] | []
  >([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [cartList, setCartList] = useState<cartItem[] | []>([]);
  const navigate = useNavigate();

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
      navigate("viewProduct");
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
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      } else {
        return [...prevItems, item];
      }
    });
    // setCartList((prevCartList) => {
    //   const existingItem = prevCartList.find((i) => i.id === item.id);
    //   if (existingItem) {
    //     return prevCartList.map((i) =>
    //       i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
    //     );
    //   } else {
    //     return [...prevCartList, item];
    //   }
    // });

    console.log(items);
  };

  const removeItemFromCart = (id: string) => {
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
        items,
        name,
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
        // cartList,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
