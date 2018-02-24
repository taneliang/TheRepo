import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import SendImage from "../static/img/send.jpeg";
import QRCode from 'react-native-qrcode';
import { RkTextInput, RkButton } from "react-native-ui-kitten";

export default class SendView extends React.Component {
  static navigationOptions = {
    title: "Send"
  }

  constructor(props) {
    super(props);
    this.state = {
      message: "hello world",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ message: event });
  }

  render() {
    return (
      <View style={styles.container}>
        <QRCode
          value={this.state.message}
          size={200}
          bgColor='black'
          fgColor='#ecf0f1'
        />
        <RkTextInput onChangeText={this.handleChange} value={this.state.message} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    alignItems: "center",
    justifyContent: "center",
  },
});
