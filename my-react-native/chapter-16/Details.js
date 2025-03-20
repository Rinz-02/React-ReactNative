import React from 'react'
import {View,Text,Button} from 'react-native'
import styles from '../App'

function Details({route}) {

    const{title} = route.params;
    
  return (
    <View style={styles.container}>
        <Text>page : {JSON.stringify(title)}</Text>
    </View>
  )
}

export default Details
