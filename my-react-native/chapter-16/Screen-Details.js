import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const RootStack = createNativeStackNavigator({
    screens : {
      Screen : Screen,
      Details : Details,
    }
  })

  const Navigation = createStaticNavigation(RootStack);

export default function App(){
  
  return(

   <Navigation/>
    
  )
}