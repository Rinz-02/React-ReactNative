import Home from "./chapter-16/Home";
import Setting from "./chapter-16/Setting";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const RootStack = createNativeStackNavigator({
    screens : {
      Home : Home,
      Setting : Setting,
    }
  })

  const Navigation = createStaticNavigation(RootStack);

export default function Navigate(){
  
  return(
    <Navigation/>
  )
}


const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}6  