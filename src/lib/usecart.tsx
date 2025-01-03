import { useContext } from "react";
import { CartContext } from "./useContext";

export const useCart = () => {
  const context = useContext(CartContext);
  // console.log(context);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
