import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { StackNavigator } from 'react-navigation';
import MessageView from "./MessageView";
import ReplyView from "./ReplyView";

export default class DongView extends Component {
  render() {
    return (
      <RootStack />
    );
  }
}

const RootStack = StackNavigator(
  {
    Message: { screen: MessageView },
    Reply: { screen: ReplyView },
  },
  {
    initialRouteName: 'Message',
  }
);