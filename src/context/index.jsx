import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(1);
  const [wishList, setWishList] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );
  const [cart, setCart] = useState([]);


  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishList));
  }, [wishList]);

  return (
    <Context.Provider value={{ count, setCount, wishList, setWishList, cart, setCart }}>
      {children}
    </Context.Provider>
  );
};

export const useStateValue = () => useContext(Context);
