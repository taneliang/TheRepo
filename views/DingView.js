// @flow

import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

type State = {
  modeSet: boolean,
  isDing: ?boolean
};

export default class DingView extends Component {
  render() {
    return (
      <View className={styles.container}>
        <Text>DINGVIEW</Text>
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
