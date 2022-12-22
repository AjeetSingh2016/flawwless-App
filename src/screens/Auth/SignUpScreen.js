import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {SignUpForm} from '../../components';
import {FocusedStatusBar} from '../../components';

const SignUpScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FocusedStatusBar
        barStyle="dark-content"
        translucent={false}
        backgroundColor="#F0F2F5"
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Get Started 🚀</Text>
      </View>

      <SignUpForm navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
  },
  titleContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 20,
  },
});

export default SignUpScreen;
