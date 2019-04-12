import React, { Component } from "react";

import Slides from "../components/Slides";

const Data = [
  { title: "Welcome to Jobs", color: "#03a9f4" },
  { title: "Set your location, then tap the button", color: "#03a9f4" }
];

export default class Welcome extends Component {
  onSlidesComplete() {
    this.props.navigation.navigate("Auth");
  }
  render() {
    return <Slides data={Data} onComplete={this.onSlidesComplete.bind(this)} />;
  }
}
