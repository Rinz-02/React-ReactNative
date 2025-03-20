import React, { useState, useEffect,StyleSheet } from "react";
import { View } from "react-native"; 
import  {Progress} from 'react-native-progress';
import ProgressBar from 'react-native-progress/Bar';

export default function MeassuringProgress(){
    return<>
    <View style={{flex:1,
        justifyContent:'center',
        alignItems:'center'
    }}><ProgressBar progress={0.3} width={200} animated={true}/></View>
    </>
}


