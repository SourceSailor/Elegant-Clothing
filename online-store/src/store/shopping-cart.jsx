import { createContext } from "react";

export const CartContext = createContext({
  shoppingCart: [],
  totalItems: 0,
  openCart: false,
  totalPrice: 0,
});
