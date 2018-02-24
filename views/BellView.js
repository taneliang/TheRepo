import React from "react";
import { StackNavigator } from 'react-navigation';
import SendView from "./SendView";
import ReceiptView from "./ReceiptView";

export default class DongView extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}

const RootStack = StackNavigator(
  {
    Send: { screen: SendView },
    Receipt: { screen: ReceiptView }
  },
  {
    initialRouteName: "Receipt"
  }
);