// @flow

import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import DingView from "./views/DingView";
import DongView from "./views/DongView";
import { getUserOrganisation, getToken, authToken, setAuthCallback, anonLogin } from './utils/auth';

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
      <React.Fragment>
        <Text>CHOOSE YOUR PAIN</Text>
        <Button
          onPress={() => this.setState({ modeSet: true, isDing: true })}
          title="Ding"
        />
        <Button
          onPress={() => this.setState({ modeSet: true, isDing: false })}
          title="Dong"
        />
      </React.Fragment>
    );
  }

  renderDingDong() {
    return this.state.isDing ? <DingView /> : <DongView />;
  }

  render() {
    // setAuthCallback();
    // getUserOrganisation("xzb1aX5PtUPTn1CS4da3").then((data) => console.log(data));
    // anonLogin();
    // getToken().then(tok => console.log(tok));

    return (
      <View style={styles.container}>
        {this.state.modeSet ? this.renderDingDong() : this.renderNotSet()}
      </View>
    );
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
