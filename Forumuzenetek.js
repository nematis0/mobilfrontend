import React, { Component } from 'react';
import {Text, View, FlatList} from 'react-native';
const IP = require('./ipcim.js');

export default class Forumuzenet extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nev: '',
        komment:"",

        dataSource:[]

    };
  }
  
  componentDidMount(){
    return fetch('http://'+IP.ipcim+'/forumuzik')
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

        <View>

        <Text style={{fontSize:30, textAlign:'center', marginTop:25}}>Megjegyzések</Text>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 

          <View style={{borderWidth:5, borderColor:"#0fb0fb", borderRadius:10, margin:20, backgroundColor:"lightgray"}}>

          <Text style={{color:"black", fontWeight:"bold", fontSize:18, marginTop:5, marginLeft:10, textAlign:'center'}}>
          {item.forum_nev} </Text>
          <Text style={{color:"black", fontSize:20, marginLeft:10, textAlign:'center'}}>
          {item.forum_szoveg} </Text>          
   
          </View>
        
        }
    
          keyExtractor={({forum_id}, index) => forum_id}
        />
    </View>
    );
  }
}