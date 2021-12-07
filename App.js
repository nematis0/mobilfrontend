import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Anime from './Anime';
import Kereses from './Kereses';
import Fooldal from './Fooldal';
//import SearchField from "react-search-field";


function Fooldallap({ navigation }) {
  return (
    <Fooldal/>
  );
}

function Animelap({ navigation }) {
  return (
    <Anime/>
  );
}

function Kereseslap({ navigation }) {
  return (
    <Kereses/>
  );
}


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Főoldal" component={Fooldallap} />
        <Drawer.Screen name="Anime" component={Animelap} />
        <Drawer.Screen name="Kereses" component={Kereseslap} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}