import { useNavigation } from '@react-navigation/native'
import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'
import styles from "../App"

export default function Details({ route }) {
  const navigation = useNavigation();

  const { itemId, otherParam } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        onPress={() =>
          navigation.push("Details", {
            itemId: itemId - 1,
          })
        }
      >
        Go to Details... again
      </Button>
      <Button onPress={() => navigation.navigate("Home")}> Home</Button>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
    </View>
  );
}
