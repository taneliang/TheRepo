import React  from 'react';
import { FlatList } from 'react-native';
import MessageListItem from './MessageListItem';

export default class MessageList extends React.Component {
  renderItem(item) {
    return (
      <MessageListItem
        sender={item.sender}
        message={item.message}
        onPress={() => this.props.navigation.navigate('Reply')}
      />
    );
  }

  render() {
    return (
      <FlatList
        data={this.props.data}
        renderItem={({item}) => this.renderItem(item)}
      />
    );
  }
}