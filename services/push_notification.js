import { AsyncStorage } from "react-native";
import { Permissions, Notifications } from "expo";
import axios from "axios";

export default async () => {
  let previousToken = await AsyncStorage.getItem("pushtoken");
  if (previousToken) return;
  else {
    let { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (status !== "granted") return;
    let token = await Notifications.getExpoPushTokenAsync();
    await axios.post("http://rallycoding.herokuapp.com/api/tokens", {
      token: { token }
    });
    AsyncStorage.setItem("pushtoken", token);
  }
};
