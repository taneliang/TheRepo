// @flow

import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
// import { StyleSheet, View, Text } from "react-native";
import SendView from "./SendView";
import ReceiptView from "./ReceiptView";

export default StackNavigator(
  {
    Send: { screen: SendView },
    Receipt: { screen: ReceiptView }
  },
  {
    initialRouteName: "Send"
  }
);
