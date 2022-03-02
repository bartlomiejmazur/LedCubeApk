/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import BluetoothList from './app/containers/bluetoothList';
 import { NavigationContainer, } from '@react-navigation/native';
 import {createStackNavigator} from '@react-navigation/stack';
 import Menu from './app/Menu/menu';
 import Home from './app/containers/home';

const Stack = createStackNavigator();

 
 
 const App: () => Node = () => {
 
 
   return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName='Bluetooth lista'>
      <Stack.Screen name ='Bluetooth lista' component={BluetoothList}/>
      <Stack.Screen name ='Menu' component={Menu}/>
      
     </Stack.Navigator>
   </NavigationContainer>
   
   );
 };
 
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default App;
 