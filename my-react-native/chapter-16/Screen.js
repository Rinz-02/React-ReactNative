import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {View,Text,Button} from 'react-native'
import styles from '../App'


function Screen() {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Text>Home</Text>
        <Button title="First" onPress={() => {navigation.navigate("Details",{title : "First"})}}></Button>
        <Button title="Second" onPress={() => {navigation.navigate("Details" , {title : "Second"})}}></Button>
        <Button title="Third" onPress={() => {navigation.navigate("Details" ,{title: "Third"})}}></Button>
    </View>
  )
}

export default Screen
