import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator, Dimensions } from "react-native";
import { MapView } from "expo";
import { connect } from "react-redux";
import { Button } from "react-native-elements";

import { fetchJobs } from "../store/actions";
class Map extends Component {
  state = {
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    },
    mapLoaded: false
  };

  componentDidUpdate() {
    if (this.props.results) {
      this.props.navigation.navigate("Deck");
    }
  }

  componentDidMount() {
    this.setState({ mapLoaded: true });
  }

  onRegionChangeComplete = region => {
    this.setState({ region });
  };

  onButtonPress = () => {
    this.props.fetchJobs();
  };

  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" color="purple" />
        </View>
      );
    }
    return (
      <View style={styles.view}>
        <MapView
          style={styles.mapview}
          region={this.state.region}
          onRegionChangeComplete={this.onRegionChangeComplete}
        />
        <View>
          <Button
            style={styles.button}
            title="Search this area"
            icon={{ name: "search" }}
            onPress={this.onButtonPress}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: { flex: 1 },
  mapview: { flex: 1 },
  button: {
    position: "absolute",
    bottom: 20,
    left: Dimensions.get("screen").width / 4
  }
});

const mapStateToProps = state => ({
  results: state.jobs.results.data
});

const mapDispatchToProps = dispatch => ({
  fetchJobs: () => dispatch(fetchJobs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
