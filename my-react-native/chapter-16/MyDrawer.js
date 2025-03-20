import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "./Home"
import Setting from './Setting';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home}/>
      <Drawer.Screen name="Setting" component={Setting}/>
    </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default MyDrawer
