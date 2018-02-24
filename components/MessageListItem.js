import React from 'react';
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native';

export default class MessageListItem extends React.Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress} underlayColor="#bbb" activeOpacity={0.8}>
        <View style={styles.item}>
          <Text style={styles.sender}>{this.props.sender}</Text>
          <Text>{this.props.message}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  sender: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#bbb',
  },
})