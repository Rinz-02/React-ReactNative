import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import { View,Text } from 'react-native';

export const TextInputDemo = () => {

  const [text, onChangeText] = React.useState(' Text Event');
  const [number, onChangeNumber] = React.useState('123');
    return(
        <>
        <View style={styles.view}>
            <Text>
                Input Event
            </Text>
            <TextInput placeholder='Input Event' value={text} onChange={onChangeText} style={styles.input}/> 
            <Text>
                Text Input
            </Text>
            <TextInput  value={number} onChange={onChangeNumber}  style={styles.input}/>
            <Text>
                Text Input
            </Text> 
            <TextInput placeholder='Text'  style={styles.input}/>

            <Text>
                Event : {text} , {number}
            </Text>
        </View>
        </>
    )

}


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})