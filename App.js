// @flow

import React from "react";
import { StyleSheet, Text, View } from "react-native";

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

  renderNotSet() {
    return (
      <View style={styles.container}>
        <Text>Not set</Text>
      </View>
    );
  }

  renderDingDong() {
    return (
      <View style={styles.container}>
        <Text>Ha set</Text>
      </View>
    );
  }

  render() {
    if (this.state.modeSet) {
      return this.renderDingDong();
    }
    return this.renderNotSet();
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
