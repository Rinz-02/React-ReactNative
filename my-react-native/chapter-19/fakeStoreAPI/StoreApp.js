import { View, Text, StyleSheet, FlatList, Image, Button,Item } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {CartContext} from "./CartContextProvider";


export function Store(){

    const [products, setProducts] = useState([]);
     const { amount } = useContext(CartContext);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error Occured While Trying to Get Products ! ", error);
      }
    };
    getProducts();
  }, []);


    return(
        <View >
              <View >
                <Text >{amount}</Text>
              </View>
              <View style={{ width: "95%", flex: 1 }}>
                <FlatList
                  data={products}
                  renderItem={({ item }) => <Item item={item} />}
                  keyExtractor={(item) => item.id.toString()}
                  numColumns={2} 
                />
              </View>
            </View>
    )
}