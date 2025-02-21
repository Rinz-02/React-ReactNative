import React from 'react'
import {View,Box,Text,Button} from "react-native"
import {useNavigation,navigate} from "@react-navigation/native"
import styles from "../App"


const Home = () => {
    const navigation = useNavigation();
 return(
        <View style={styles.container}>
            <Text>Home</Text>
            <Button title="Setting" onPress={() => {navigation.navigate("Setting")}}></Button>
        </View>
    )
}

    

export default Home

