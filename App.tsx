import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routing from './pages/Index';
import React from 'react'
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { setupStore } from './app/redux/store';
import { fetchToken } from './app/redux/ActionCreator';
import AsyncStorage from '@react-native-async-storage/async-storage';

const store = setupStore()



export default function App() {


  async function tok(){
    fetchToken(await AsyncStorage.getItem('TASKS') || "")
  }

  return (
    <Provider store={store}>
        <NavigationContainer>
          <Routing/>
        </NavigationContainer>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
