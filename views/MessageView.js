import React from 'react';
import { View, StyleSheet } from 'react-native';
import MessageList from '../components/MessageList';

export default class MessageView extends React.Component {
  static navigationOptions = {
    title: "Message"
  }

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {key: '1', sender: 'SingPost', message: 'Lorem ipsum'},
        {key: '2', sender: 'SingPost', message: 'Chocolate nyan nyan'},
        {key: '3', sender: 'Anonymous', message: 'Lorem ipsum'},
        {key: '4', sender: 'NinjaVan', message: 'Strawberry nyan nyan'},
        {key: '5', sender: 'Anonymous', message: 'Lorem ipsum'},
        {key: '6', sender: 'SingPost', message: 'Message nyan nyan'},
        {key: '7', sender: 'SingPost', message: 'Lorem ipsum'},
        {key: '8', sender: 'NinjaVan', message: 'What is up nyan nyan'},
        {key: '9', sender: 'NinjaVan', message: 'Lorem ipsum'},
        {key: '10', sender: 'NinjaVan', message: 'Chocolate nyan nyan'},
        {key: '11', sender: 'SingPost', message: 'Lorem ipsum'},
        {key: '12', sender: 'Anonymous', message: 'Strawberry nyan nyan'},
        {key: '13', sender: 'Anonymous', message: 'Lorem ipsum'},
        {key: '14', sender: 'SingPost', message: 'Message nyan nyan'},
        {key: '15', sender: 'NinjaVan', message: 'Lorem ipsum'},
        {key: '16', sender: 'Anonymous', message: 'What is up nyan nyan, because What is up nyan nyan, because What is up nyan nyan'},
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <MessageList data={this.state.data} navigation={this.props.navigation} />
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