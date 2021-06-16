// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";

// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Preload from "../screens/Preload";
import StartedStack from "./StartedStack";

const MainStack = createStackNavigator(
  {
    Preload,
    StartedStack
    // AppTab
  },
  {
    //usuario não poderá navegar entre as stacks acima
    initialRouteName: "Preload",
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default createAppContainer(MainStack);
