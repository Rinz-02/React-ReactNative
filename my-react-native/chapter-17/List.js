import ListControls from "./ListControls";
import React from "react";
import { Text, FlatList } from "react-native";

export default function List({ListControls,data,onFilter,onSort,asc}){
  return(
    <FlatList 
    data={data}
    ListHeaderComponent={<ListControls {...{ onFilter, onSort, asc }} />}
    renderItem={({item}) => <Text>{item.value}</Text>}/>
  )
}