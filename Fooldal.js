import React, { Component } from 'react';
import { ImageBackground, Text } from 'react-native';

export default class Fooldal extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <ImageBackground source={require("./bg.jpg")}
      style={{
      flex: 1,
      width: null,
      height: null,}}>
      
    </ImageBackground>
    );
  }
}