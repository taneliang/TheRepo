import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import DingView from "./views/DingView";
import DongView from "./views/DongView";
import BellView from "./views/BellView";
import { RkText, RkButton } from "react-native-ui-kitten";

const MODE_NULL = 0;
const MODE_DING = 1;
const MODE_DONG = 2;
const MODE_BELL = 3;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: MODE_NULL,
    };
  }

  noSet() {
    return (
      <View style={styles.container}>
        <RkText rkType='xxlarge'>CHOOSE YOUR PAIN</RkText>
        <RkButton
          style={styles.button}
          rkType="success"
          onPress={() => this.setState({ mode: MODE_DING })}>
          Ding
        </RkButton>
        <RkButton
          style={styles.button}
          rkType="danger"
          onPress={() => this.setState({ mode: MODE_DONG })}>
          Dong
        </RkButton>
        <RkButton
          style={styles.button}
          onPress={() => this.setState({ mode: MODE_BELL })}>
          Bell
        </RkButton>
      </View>
    )
  }

  render() {
    switch (this.state.mode) {
      case MODE_NULL: {
        return this.noSet();
      }
      case MODE_DING: {
        return <DingView />;
      }
      case MODE_DONG: {
        return <DongView />;
      }
      case MODE_BELL: {
        return <BellView />;
      }
    }
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
