import React, { useState, useEffect } from 'react';
import { NativeAppEventEmitter, StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import RootStack from './routes/homeStack';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';

//const Drawer = createDrawerNavigator();

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  if(isLoading) {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <RootStack/>

    </NavigationContainer>
  );
}

export default App;