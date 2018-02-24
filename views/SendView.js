// @flow

import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class SendView extends Component {
  render() {
    return (
      <View className={styles.container}>
        <Text>SendView</Text>
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
