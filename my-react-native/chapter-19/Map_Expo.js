import React, {  useEffect } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import MapView from 'react-native-maps';

export default function Map(){
    return(
        <View style={styles.container}>
            <MapView style={styles.map}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    map : {
        width : 300,
        height : 150
    }
})