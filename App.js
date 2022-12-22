import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import AuthNavigaion from './AuthNavigaion';
import SplashScreen from 'react-native-splash-screen';
import NetInfo from '@react-native-community/netinfo';
import { Network } from './src/screens';

export default App = () => {


  const [isConnected, setIsConnected] = useState(true)
  
  useEffect(() => {
    SplashScreen.hide();

    const unsubscribe = NetInfo.addEventListener(state => {
      // console.log('Connection type', state.type);
      // console.log('Is connected?', state.isConnected);
      setIsConnected(state.isConnected)
    });

    return () => {
      unsubscribe();
    }

  }, []);

  if(isConnected){
    return <AuthNavigaion/>
  }
  return <Network />
};
