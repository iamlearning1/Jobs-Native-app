import React from "react";
import { Button } from "react-native-elements";
import { Provider } from "react-redux";

import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import Auth from "./screens/Auth";
import Welcome from "./screens/Welcome";
import Maps from "./screens/Map";
import Deck from "./screens/Deck";
import Review from "./screens/Review";
import Settings from "./screens/Settings";
import store from "./store";

const StackNavigator = createStackNavigator({
  Review: {
    screen: Review,
    navigationOptions: ({ navigation }) => ({
      title: "Review Jobs",
      headerRight: (
        <Button
          title="Settings"
          type="clear"
          onPress={() => navigation.navigate("Settings")}
        />
      )
    })
  },
  Settings: {
    screen: Settings
  }
});

const TabNavigator = createBottomTabNavigator({
  Map: {
    screen: Maps
  },
  Deck: {
    screen: Deck
  },
  Stack: {
    screen: StackNavigator,
    navigationOptions: {
      title: "Review Jobs"
    }
  }
});

const MainNavigator = createBottomTabNavigator(
  {
    Welcome: {
      screen: Welcome
    },
    Auth: {
      screen: Auth
    },
    Main: {
      screen: TabNavigator
    }
  },
  {
    defaultNavigationOptions: {
      tabBarVisible: false
    }
  }
);

const Navigator = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
