import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image,  Modal, FlatList} from 'react-native';

export default class Anime extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '', isVisible: false,animedata:[],dataSource:[]};
  }

  componentDidMount(){
    return fetch('http://192.168.1.112:3000/Animek')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
          animedata: [],
  
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  displayModal(show){
    this.setState({isVisible: show})
  }

  render() {
    return (
      <View style = { styles.container }>

        <Modal
            animationType = {"slide"}
            transparent={false}
            visible={this.state.isVisible}
            onRequestClose={() => {
              Alert.alert('Modal has now been closed.');
            }}>
          <View style = {styles.modal} /* Modal Törzse */>

          

          <Text style = {styles.cim} /*Cím */ >{this.state.animedata.anime_cim}</Text>


          <Text style = {styles.cim} /*Cím */ >{this.state.animedata.anime_leiras}</Text>
          </View>
          <View style = {styles.container2}>
              <Text //Bezáró Gomb
                style={styles.closeText}
                onPress={() => {
                  this.displayModal(!this.state.isVisible);}}>Bezárás
              </Text>
            </View>
          </Modal>

          <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 
          <View>
          <Image source={{uri:'http://192.168.1.112:3000/'+item.anime_kep}} style={{width:300,height:300,marginLeft:"auto",marginRight:"auto"}} />
          <TouchableOpacity
              style={styles.button}
              onPress={() => {
              this.displayModal(true); this.setState({animedata:item})}}>
              <Text style={styles.buttonText}>{item.anime_cim}</Text>
          </TouchableOpacity>
          </View>          
           }
          keyExtractor={({anime_id}, index) => anime_id}
          />
 
        </View>
      );
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    display: 'flex',
    height: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#0fb0fb',
    shadowColor: '#fff',
    shadowOpacity: 0.5,
    padding:20,
    marginBottom:10,
    shadowOffset: { 
      height: 10, 
      width: 0 
    },
    shadowRadius: 25,
  },
  closeButton: {
    display: 'flex',
    height: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF3974',
    shadowColor: '#2AC062',
    shadowOpacity: 0.5,
    shadowOffset: { 
      height: 10, 
      width: 0 
    },
    shadowRadius: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 22,
  },
  image: {
    marginTop: 150,
    marginBottom: 10,
    width: '100%',
    height: 350,
  },
  text: {
    fontSize: 24,
    marginBottom: 30,
    padding: 40,
  },
  closeText: {
    fontSize: 24,
    color: '#00479e',
    marginTop:'auto',
  },
  container2: {
    fontSize: 24,
    color: '#00479e',
    marginTop:'auto',
    alignSelf:'center',
    marginBottom:50,
  },
  cim: {
    fontWeight:"bold",
    textAlign:"center",
    fontSize:25
  },
  modal: {
    fontSize: 24,
    color: '#00479e',
    marginTop:100,
    textAlign: 'center',
  }
});