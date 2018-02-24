// @flow

import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

type State = {
  modeSet: boolean,
  isDing: ?boolean
};

export default class DongView extends Component {
  render() {
    return (
      <View className={styles.container}>
        <Text>DONGVIEW</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
