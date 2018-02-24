import React from 'react';
import { View, StyleSheet } from 'react-native';
import MessageList from '../components/MessageList';

export default class ReplyView extends React.Component {
  static navigationOptions = {
    title: "Message"
  }

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {key: '15', sender: 'NinjaVan', message: 'Lorem ipsum'},
        {key: '16', sender: 'Anonymous', message: 'What is up nyan nyan, because What is up nyan nyan, because What is up nyan nyan'},
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <MessageList data={this.state.data} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    flex: 1,
  },
});