import React, { Component } from 'react';
import { Text, TextInput, View, div, FlatList, Image  } from 'react-native';

export default class Anime extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  componentDidMount(){
    return fetch('http://192.168.2.118:3000/Animek')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {
    return (
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 

          <View >
          <Text style={{color:"brown",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >{item.anime_cim} </Text>
          <Image source={{uri: 'http://192.168.2.118:3000/'+item.anime_kep}} style={{width:300,height:300,marginLeft:"auto",marginRight:"auto"}} />  

          </View>
        
        }

        
          keyExtractor={({anime_id}, index) => anime_id}
        />
      </View>
    );
  }
}