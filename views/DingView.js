// @flow

import { StackNavigator } from "react-navigation";
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
