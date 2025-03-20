import { View, Text } from "react-native";
import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
        const[amount,setAmount] = React.useState(0);

 return (
    <CartContext.Provider value={{ amount, setAmount }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;