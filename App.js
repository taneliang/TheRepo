// @flow

import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import DingView from "./views/DingView";
import DongView from "./views/DongView";

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
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }
});
