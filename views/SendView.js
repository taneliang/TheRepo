import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import SendImage from "../static/img/send.jpeg";

export default class SendView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={SendImage}/>
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
