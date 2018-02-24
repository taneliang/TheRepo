import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class ReceiptView extends Component {
  render() {
    return (
      <View className={styles.container}>
        <Text>ReceiptView</Text>
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
