import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RkTextInput, RkButton } from "react-native-ui-kitten";

export default class ReplyView extends React.Component {
  static navigationOptions = {
    title: "Reply"
  }

  render() {
    return (
      <View style={styles.container}>
        <RkTextInput rkType='' placeholder="Sender" />
        <RkTextInput rkType='' placeholder="Message" />
        <RkButton
          style={styles.button}
          rkType="stretch success">
          Dong
        </RkButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#eeeeee',
  },
  button: {
    margin: 20,
  },
});