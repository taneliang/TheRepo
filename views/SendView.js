// @flow

import React, { Component } from "react";
import { StyleSheet, View, Text, Button, Alert } from "react-native";

export default class SendView extends Component {
  static navigationOptions = {
    title: "Send"
  };

  send() {
    console.log("Sending stuff");
    Alert.alert("Sending your suff", "Eeeeee", [], { cancelable: true });
  }

  render() {
    return (
      <View className={styles.container}>
        <Text>SendView</Text>
        <Button title="Send your filthy shit" onPress={this.send} />
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
