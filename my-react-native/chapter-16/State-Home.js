import { useNavigation,navigationOptions } from '@react-navigation/native'
import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'
import styles from "../App"

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => {
          navigation.navigate("Details", {
            itemId: 86,
            otherParam: "anything you want here",
          });
        }}
      >
         Details
      </Button>
    </View>
  );
}