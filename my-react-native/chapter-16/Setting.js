import React from 'react'
import {View,Text,Button} from "react-native"
import {useNavigation} from "@react-navigation/native"
import styles from "../App"
 
const Setting = () => {
    const navigation = useNavigation();

    return<>
    <View style={styles.container}>
        <Text>Setting</Text>
        <Button title="Home" onPress={() => navigation.navigate("Home")}></Button>
    </View>
    </>
}

export default Setting