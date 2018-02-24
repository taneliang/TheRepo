// @flow

import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default class SendView extends Component {
  render() {
    return (
      <View style=styles.container>
        <Image
            source={require('../static/img/send.jpeg')}
          />
        <Text>SendView</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
