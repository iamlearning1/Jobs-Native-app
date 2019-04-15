import React, { Component } from "react";
import { Text, ScrollView, View } from "react-native";
import { connect } from "react-redux";
import { Card } from "react-native-elements";

class Review extends Component {
  renderLikedJobs = () => {
    this.props.likedJobs.map(job => (
      <Card>
        <View style={{ height: 200 }}>
          <View
            style={{
              marginBottom: 10,
              flexDirection: "row",
              justifyContent: "space-around"
            }}
          >
            <Text style={{ fontStyle: "italic" }}>Company</Text>
            <Text>10 Days Ago</Text>
          </View>
        </View>
      </Card>
    ));
  };
  render() {
    return <ScrollView>{this.renderLikedJobs()}</ScrollView>;
  }
}

const mapStateToProps = state => ({
  likedJobs: state.jobs.results.data.slice(0, 10)
});

export default connect(mapStateToProps)(Review);
