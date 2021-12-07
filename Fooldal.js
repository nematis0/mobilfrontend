import React, { Component } from 'react';
import { Text, TextInput, View, div, FlatList  } from 'react-native';

export default class Fooldal extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <Text>Főoldal</Text>
    );
  }
}