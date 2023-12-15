import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Tela1 } from './Tela/Tela1';
import { Tela2 } from './Tela/Tela2';
import { Tela3 } from './Tela/Tela3';
import { Tela4 } from './Tela/Tela4';
import { Tela5 } from './Tela/Tela5';
import { Tela6 } from './Tela/Tela6';
import { Tela7 } from './Tela/Tela7';
import { Tela8 } from './Tela/Tela8';
import { Tela9 } from './Tela/Tela9';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Tela1'>
        <Stack.Screen name='Tela1' component={Tela1}/>

        <Stack.Screen 
         options={{
          headerShown: false //Removendo o header do Navigation
        }}
        name='Tela2' component={Tela2}/>

        <Stack.Screen 
          options={{
            headerShown: false //Removendo o header do Navigation
          }}
        name='Tela3' component={Tela3}/>

        <Stack.Screen 
          options={{
            headerShown: false //Removendo o header do Navigation
          }}
        name='Tela4' component={Tela4}/>

        <Stack.Screen 
          options={{
            headerShown: false //Removendo o header do Navigation
          }}
        name='Tela5' component={Tela5}/>

        <Stack.Screen 
        options={{
          headerShown: false //Removendo o header do Navigation
        }}
        name='Tela6' component={Tela6}/>

        <Stack.Screen 
         options={{
          headerShown: false //Removendo o header do Navigation
        }}
        name='Tela7' component={Tela7}/>

        <Stack.Screen  
         options={{
          headerShown: false //Removendo o header do Navigation
        }}
        name='Tela8' component={Tela8}/>

        <Stack.Screen 
          options={{
            headerShown: false //Removendo o header do Navigation
          }}
        name='Tela9' component={Tela9}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}