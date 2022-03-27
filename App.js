import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Anime from './Anime';
import Kereses from './Kereses';
import Fooldal from './Fooldal';
import Forum from './Forumuzenetek';
import Nevjegy from './Nevjegy';


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

function Forumlap({ navigation }) {
  return (
    <Forum/>
  );
}

function Nevjegylap({ navigation }) {
  return (
    <Nevjegy/>
  );
}


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Főoldal" component={Fooldallap} />
        <Drawer.Screen name="Anime" component={Animelap} />
        <Drawer.Screen name="Anime keresés" component={Kereseslap} />
        <Drawer.Screen name="Forum üzenetek" component={Forumlap} />
        <Drawer.Screen name="Névjegy" component={Nevjegylap} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}