import {View, Text} from 'react-native';
import React from 'react';
import Home from './Home';
import {
  SignUpScreen,
  ProfileScreen,
  RuleBook,
  Dictionary,
  BareAct,
  Rules,
  LegalDigest,
  AllOptions,
  Web,
  FirstPattern,
  SecondPattern,
} from './src/screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const screenOptions = {
  headerShown: false,
};

const Stack = createNativeStackNavigator();

export const SignedInStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={screenOptions}>
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="RuleBook"
          component={RuleBook}
          options={{headerShown: true}}
        />
        <Stack.Screen name="Dictionary" component={Dictionary} />
        <Stack.Screen
          name="BareAct"
          component={BareAct}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="LegalDigest"
          component={LegalDigest}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="AllOptions"
          component={AllOptions}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Web"
          component={Web}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="FirstPattern"
          component={FirstPattern}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="SecondPattern"
          component={SecondPattern}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const SignedOutStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="SignUpScreen"
      screenOptions={screenOptions}>
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen
          name="Web"
          component={Web}
          options={{headerShown: true}}
        />
    </Stack.Navigator>
  </NavigationContainer>
);
