import React, { Component } from "react";
import { View, AsyncStorage } from "react-native";
import { connect } from "react-redux";

import { login } from "../store/actions";

class Auth extends Component {
  componentDidMount() {
    this.props.facebookLogin();
    this.onAuthComplete(this.props.token);
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps.token);
  }

  onAuthComplete = token => {
    if (token) {
      this.props.navigation.navigate("Map");
    }
  };

  render() {
    return <View />;
  }
}

const mapStateToProps = state => ({
  token: state.auth.token
});

const mapDispatchToProps = dispatch => ({
  facebookLogin: () => dispatch(login())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
