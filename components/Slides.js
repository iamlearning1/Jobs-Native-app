import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity
} from "react-native";
import { Button } from "react-native-elements";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default class Slides extends Component {
  state = {
    position: new Animated.Value(0)
  };

  buttonAnimation = () => {
    Animated.timing(this.state.position, {
      toValue: 2,
      duration: 5000,
      iterations: -1,
      useNativeDriver: true
    }).start();
  };

  getAnimation = () => {
    const { position } = this.state;
    const scale = position.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [1, 1.5, 1]
    });
    return {
      transform: [{ scale }]
    };
  };

  render() {
    const screens = this.props.data.map((slide, index) => {
      return (
        <View
          key={slide.title}
          style={[styles.slideStyle, { backgroundColor: slide.color }]}
        >
          {}
          <Text style={styles.slideText}>{slide.title}</Text>
          {index == this.props.data.length - 1 ? (
            <Animated.View style={this.getAnimation()}>
              {/* <TouchableOpacity onPress={this.buttonAnimation}>
                <Text>Hello</Text>
              </TouchableOpacity> */}
              <Button title="Onwards!" onPress={this.buttonAnimation()} />
            </Animated.View>
          ) : null}
        </View>
      );
    });
    return (
      <ScrollView
        horizontal={true}
        style={{ flex: 1 }}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {screens}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  slideStyle: {
    flex: 1,
    justifyContent: "center",
    width: SCREEN_WIDTH,
    alignItems: "center"
  },
  slideText: {
    fontSize: 30,
    color: "white",
    padding: 30,
    textAlign: "center"
  }
});
