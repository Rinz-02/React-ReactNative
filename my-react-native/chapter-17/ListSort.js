
import React from "react";
import PropTypes from "prop-types"; 
import { Text } from "react-native";

const icon = new Map([[true, "▼"], [false, "▲"]]);

export default function ListSort({onSort,asc}){
    return(
        <Text onPress={onSort}>{icon.get(asc)}</Text>
    )
}