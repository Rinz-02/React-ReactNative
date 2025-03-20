import * as React from 'react';
import { View, Text } from 'react-native';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';
import ProgressBar from 'react-native-progress/Bar';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{flex: 1, alignItems: 'bottom', justifyContent: 'center'}}>Home Screen</Text>
      <Button onPress={() => navigation.navigate('FirstPage')} style={{marginBottom: 30}}>
        FirstPage
      </Button>
      <View style={{paddingBottom: 30}}>
        <ProgressBarMeter/>
      </View>
    </View>
  );
}

export function FirstPage(){
    const navigation = useNavigation();

    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{flex: 1, alignItems: 'bottom', justifyContent: 'center'}}>FirstPage</Text>
            <Button onPressIn={() => navigation.navigate('SecondPage')} style={{marginBottom: 30}}>
                SecondPage
            </Button>
            <View style={{paddingBottom: 30}}>
               <ProgressBarMeter/>
            </View>
            
        </View>
    )
}

export function SecondPage(){
    const navigation = useNavigation();

    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{flex: 1, alignItems: 'bottom', justifyContent: 'center'}}>SoecondPage</Text>
            <Button onPressIn={() => navigation.navigate('ThirdPage')} style={{marginBottom: 30}}>
                ThirdPage
            </Button>
            <View style={{paddingBottom: 30}}>
           <ProgressBarMeter/>
        </View>
        </View>
    )
}

export function ThirdPage(){
    const navigation = useNavigation();

    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{flex: 1, alignItems: 'bottom', justifyContent: 'center'}}>ThirdPage</Text>
            <Button onPressIn={() => navigation.navigate('Home')} style={{marginBottom: 30}}>
                HomeScreen
            </Button>
            <View style={{paddingBottom: 30}}>
        <ProgressBarMeter/>
      </View>
        </View>
    )
}

export function ProgressBarMeter(){
    const[progress,setProgress] = React.useState(0);

    React.useEffect(() => {
        function increaserProgress(){
            setTimeout(() =>{
                setProgress(progress => progress+0.1);
            } ,2000)
        }
        increaserProgress();
    })

    return(
        <ProgressBar progress={progress} width={200}/>
    )

}