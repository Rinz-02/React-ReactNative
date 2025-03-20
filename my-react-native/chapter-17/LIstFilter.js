import React from "react";
import PropTypes from "prop-types";
import { View, TextInput } from "react-native";

export default function ListFilter({onFilter}){
    return(
        <View>
            <TextInput
            placeholder="search"
            onChangeText={onFilter}>
            </TextInput>
        </View>
    )
}