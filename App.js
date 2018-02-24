// @flow

import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import DingView from "./views/DingView";
import DongView from "./views/DongView";
import nfc, { addNDEFMessageReceivedListener } from "./utils/nfc";

const str = (() => {
  let derp = "";
  for (let i = 0; i < 50000; i++) {
    derp +=
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan scelerisque nulla in suscipit. Donec ut justo id dui tempus elementum vel sed velit. Proin mattis et ex non feugiat. Duis dapibus justo eget vehicula faucibus. Sed sed ornare quam. Cras ornare mi dolor, pulvinar";
  }
  return derp;
})();

console.log(
  nfc.broadcastText(
    str,
    msg => {
      console.log("ERROR = " + msg);
    },
    result => {
      // console.log("RESULT = " + result);
    }
  )
);

console.log("soneuh", str.length);

type State = {
  modeSet: boolean,
  isDing: ?boolean
};

export default class App extends React.Component<State> {
  constructor(props: Object) {
    super(props);
    this.state = {
      modeSet: false
    };
  }

  componentWillMount() {
    addNDEFMessageReceivedListener(event => {
      console.log("HA received!", event);
    });
  }

  renderNotSet() {
    return (
      <View className={styles.container}>
        <Text>CHOOSE YOUR PAIN</Text>
        <Button
          onPress={() => this.setState({ modeSet: true, isDing: true })}
          title="Ding"
        />
        <Button
          onPress={() => this.setState({ modeSet: true, isDing: false })}
          title="Dong"
        />
      </View>
    );
  }

  renderDingDong() {
    return this.state.isDing ? <DingView /> : <DongView />;
  }

  render() {
    return this.state.modeSet ? this.renderDingDong() : this.renderNotSet();
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
