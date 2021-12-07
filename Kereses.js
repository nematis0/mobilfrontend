import React, { Component } from 'react';
import { Text, TextInput, View, div, SearchBar } from 'react-native';

export default class Kereses extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
        /*<SearchField
            placeholder="Search..."
            onChange={onChange}
            searchText="This is initial search text"
            classNames="test-class"/>*/
            <Text style={{fontSize:20, textAlign:'center', paddingTop:15}}>Itt lenne egy search-bar.</Text>
            /*<SearchBar
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={search}
        />*/
        

    );
  }
}