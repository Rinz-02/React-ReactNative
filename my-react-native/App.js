import { StyleSheet } from "react-native";
import { Text, View, FlatList } from "react-native";
import HomeScreen from "./chapter-18/NavigateProgress";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStaticNavigation } from "@react-navigation/native";
import { FirstPage,SecondPage,ThirdPage } from "./chapter-18/NavigateProgress";
import CartContextProvider from "./chapter-19/fakeStoreAPI/CartContextProvider";
import { Store } from "./chapter-19/fakeStoreAPI/StoreApp";
import { Form } from "./chapter-20/Form";
const RootStack = createNativeStackNavigator({
  screens : {
    Home : HomeScreen,
    FirstPage : FirstPage,
    SecondPage : SecondPage,
    ThirdPage : ThirdPage
  }
});

const Navigation = createStaticNavigation(RootStack);


export default function App() {
  return (
    <>
      <Form/>
    </>
  );
}

const styles = StyleSheet.create({
  item: {
    margin: 5,

    padding: 5,

    color: "slategrey",
    backgroundColor: "ghostwhite",
    textAlign: "center",
  },
  container: {
    flex: 1,

    flexDirection: "column",
    paddingTop: 20,
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
