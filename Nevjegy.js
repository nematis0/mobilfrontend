import React, { Component } from 'react';
import {View, Image, FlatList, TouchableOpacity, Text  } from 'react-native';

export default class Nevjegy extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <View style={{ padding:20}}>
        <Text style={{fontSize:20, marginBottom:10, textAlign:"center"}}>
              Kapcsolat
        </Text>
        <Text style={{fontSize:20, marginBottom:5}}>
          Telefonszám: 06/30 350-1797
        </Text>
        <Text style={{fontSize:20, marginBottom:5}}>
          Email: fixnematiis@gmail.com
        </Text>
    </View>
    );
  }
}