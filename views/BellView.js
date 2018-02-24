import React from "react";
import QRCodeScanner from 'react-native-qrcode-scanner';
import SendView from './SendView';
import { StackNavigator } from 'react-navigation';
import { Image, ToastAndroid, StyleSheet, View } from 'react-native';
import { RkText } from 'react-native-ui-kitten';
import SendImage from '../static/img/send.png';

export default class BellView extends React.Component {
  constructor(props) {
    super(props);
    this.onRead = this.onRead.bind(this);
    this.state = {
      isDelivered: false,
    };
  }

  onRead(event) {
    this.setState({
      isDelivered: true,
    });
  }

  renderScanner() {
    return (
      <QRCodeScanner onRead={this.onRead} />
    );
  }

  renderDelivered() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={SendImage} />
        <RkText rkType='xxlarge'>Delivered</RkText>
      </View>
    );
  }

  render() {
    return this.state.isDelivered ? this.renderDelivered() : this.renderScanner();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#eeeeee',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10
  }
});
