import { createContext } from "react";

export const CartConext = createContext({
  // These value here helps in autocomplemetion.
  // otherwise we provided value in cartCtx in App component
  items: [],
  addItemToCart: () => {},
  updateCartItemQuantity: () => {},
});
