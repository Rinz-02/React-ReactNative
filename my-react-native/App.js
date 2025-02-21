import { StatusBar } from "expo-status-bar";
import { StyleSheet} from "react-native";
import Home from "./chapter-16/Home";
import Setting from "./chapter-16/Setting";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-navigation-stack";

const RootStack = createNativeStackNavigator({
    screens : {
      Home : Home,
      Setting : Setting,
    }
  })

  const Navigation = createStaticNavigation(RootStack);

export default function App(){
  
  return(
    <Navigation/>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection : "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "ghostwhite",
    gap: 20,
    marginTop: 300,
  },
  box: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "darkslategray",
  },
  boxText: {
    color: "darkslategray",
    fontWeight: "bold",
  },
});

