import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { TabNavigator } from 'react-navigation';
import MessageView from "./MessageView";
import ReplyView from "./ReplyView";
import ReplyComposeView from "./ReplyComposeView";

export default class DongView extends Component {
  render() {
    return (
      <RootStack />
    );
  }
}

const RootStack = TabNavigator(
  {
    Message: { screen: MessageView },
    Reply: { screen: ReplyView },
    ReplyCompose: { screen: ReplyComposeView }
  },
  {
    initialRouteName: 'Message',
  }
);