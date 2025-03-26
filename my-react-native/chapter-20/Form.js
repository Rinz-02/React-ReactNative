import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import { View,Text,Button } from 'react-native';

export const Form  = ()=> {

     const[user,setUser] = React.useState();
     const[password,setPassword] = React.useState();
const onPress = (user,password) => {
  const dataUser = 'william';
  const dataPassword = 1234;

//   if(user==dataUser){
//     if(password==dataPassword){
//         return<View>
//         <Text>Login Successfully</Text>
//     </View>
//     }
//     else{
//         return<View>
//         <Text>Login Fail</Text>
//     </View>
//     }
//   }else{
//     return<View>
//         <Text>Login Fail</Text>
//     </View>
//   }
// }
 if(user==dataUser){
    if(password==dataPassword){
        console.log('Login Successfully');
    }
    else{
        console.log('Login Fail');
    }
  }else{
    console.log('Login Fail');
  }
}
   return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center',width:'auto'}}>
        <Text>UserName</Text>
        <TextInput value={user} onChange={setUser} placeholder='Enter UserName'></TextInput>
        <Text>Password</Text>
        <TextInput value={password} onChange={setPassword} placeholder='Enter Password'></TextInput>
        <Button user={user} password={password} onPress={onPress} title='Submit'></Button>
    </View>
   )
}