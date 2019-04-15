import React from "react";
import { Button, Icon } from "react-native-elements";
import { Provider } from "react-redux";
import { Notifications } from "expo";

import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import registerForNotifications from "./services/push_notification";
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

const TabNavigator = createBottomTabNavigator(
  {
    Map: {
      screen: Maps,
      navigationOptions: {
        title: "Map",
        tabBarIcon: <Icon name="my-location" size={30} color="#03a9f4" />
      }
    },
    Deck: {
      screen: Deck,
      navigationOptions: {
        title: "Jobs",
        tabBarIcon: <Icon name="description" size={30} color="#03a9f4" />
      }
    },
    Stack: {
      screen: StackNavigator,
      navigationOptions: {
        title: "Review Jobs",
        tabBarIcon: <Icon name="favorite" size={30} color="#03a9f4" />
      }
    }
  },
  {
    defaultNavigationOptions: {
      tabBarOptions: {
        labelStyle: { fontSize: 14 }
      }
    }
  }
);

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
  componentDidMount() {
    registerForNotifications();
    Notifications.addListener(notification => {
      if (notification.origin === "received" && notification.data.text) {
        alert(notification.data.text);
      }
    });
  }
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
