import React, { Component } from "react";
import { AsyncStorage, ActivityIndicator, View } from "react-native";
import Slides from "../components/Slides";

const Data = [
  { title: "Welcome to Jobs", color: "#03a9f4" },
  { title: "Set your location, then tap the button", color: "#03a9f4" }
];

export default class Welcome extends Component {
  state = {
    loading: null
  };

  async componentDidMount() {
    // AsyncStorage.removeItem("token");
    const token = await AsyncStorage.getItem("token");
    if (token) {
      this.props.navigation.navigate("Map");
      this.setState({ loading: true });
    } else {
      this.setState({ loading: true });
    }
  }

  onSlidesComplete() {
    this.props.navigation.navigate("Auth");
  }

  render() {
    let slides;
    if (!this.state.loading) {
      slides = (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator />
        </View>
      );
    } else {
      slides = (
        <Slides data={Data} onComplete={this.onSlidesComplete.bind(this)} />
      );
    }
    return slides;
  }
}
