import React from "react";
import { View } from "react-native"; 
import ListFilter from "./ListSort";
import ListSort from "./ListSort";

export default function ListControlls({onFilter,asc,onSort}){
    return(
        <View >
            <ListFilter onFilter={onFilter}/>
            <ListSort onSort={onSort} asc={asc} />
        </View>
    )
}