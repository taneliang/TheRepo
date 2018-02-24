import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RkTextInput, RkButton } from "react-native-ui-kitten";
import ActionButton from 'react-native-action-button';

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
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});