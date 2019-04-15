import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { MapView } from "expo";
import { Card, Button } from "react-native-elements";

import Swipe from "../components/Swipe";
import { likeJob } from "../store/actions/";

class Deck extends Component {
  renderCard = job => (
    <Card title={job.title} style={{ height: 800 }}>
      <View style={{ height: 300 }}>
        <MapView
          scrollEnabled={true}
          style={{ flex: 1 }}
          cacheEnabled={true}
          region={{
            latitude: 187,
            longitude: 31,
            latitudeDelta: 0.045,
            longitudeDelta: 0.02
          }}
        />
      </View>
      <View style={styles.details}>
        <Text>Company</Text>
        <Text>10 Days Ago</Text>
      </View>
      <Text>{job.body}</Text>
    </Card>
  );

  renderNoMoreCards = () => <Card title="No more Jobs" />;

  render() {
    return (
      <View>
        <Swipe
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          onSwipeRight={job => this.props.likeJob(job)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10
  }
});

const mapStateToProps = state => ({
  jobs: state.jobs.results.data.slice(0, 10)
});

const mapDispatchToProps = dispatch => ({
  likeJob: job => dispatch(likeJob(job))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Deck);
