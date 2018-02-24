import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import DingView from "./views/DingView";
import DongView from "./views/DongView";
import { RkText, RkButton } from "react-native-ui-kitten";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDing: false,
      modeSet: true,
    };
  }

  renderNotSet() {
    return (
      <View style={styles.container}>
        <RkText rkType='xxlarge'>CHOOSE YOUR PAIN</RkText>
        <RkButton
          style={styles.button}
          rkType="success"
          onPress={() => this.setState({ modeSet: true, isDing: true })}>
          Ding
        </RkButton>
        <RkButton
          style={styles.button}
          rkType="danger"
          onPress={() => this.setState({ modeSet: true, isDing: false })}>
          Dong
        </RkButton>
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#eeeeee',
  },
  button: {
    marginTop: 10,
  }
});
