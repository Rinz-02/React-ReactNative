import React, { Component, useEffect } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import * as Location from 'expo-location';

export default function GeoLocation(){
     const [location, setLocation] = React.useState(null);
     const [errorMsg, setErrorMsg] = React.useState(null);

     useEffect(() => {
        async function getCurrentLocation(){
            let {status} = await Location.getForegroundPermissionsAsync(); 
            if(status !== 'granted'){
                setErrorMsg('Permission to asscess location was denied!');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);

            
        }
        getCurrentLocation();
     },[])

     let text = 'Waiting...'
     if(errorMsg) {
        text = errorMsg;
     }else if(location){
        text = JSON.stringify(location);
     }

     return(<>
      <View style={styles.container}>
        <Text style={styles.paragraph}>{text}</Text>
      </View>
     </>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});