import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import NetworkImg from '../../constants/image/connection.png';
import {SignUpForm} from '../../components';
import {COLORS, SHADOWS, SIZES} from '../../constants';

const Network = ({navigation}) => {
  return (
    <View style={styles1.container}>
      <View style={styles1.titleContainer}>
        <Text style={styles1.title}>No internet connection</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={NetworkImg} />
          <Text style={styles.title}>Ooops!</Text>
          <Text style={styles.subTitle}>
            Please check your connection again,
          </Text>
          <Text style={styles.subTitle}>or connect to Wi-Fi</Text>
        </View>
      </View>
    </View>
  );
};

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  titleContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // marginLeft: 20,
    // backgroundColor: "red"
  },
});

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    flex: 7,
  },
  image: {
    aspectRatio: 1,
    height: '65%',
  },
  imageContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
    // backgroundColor: 'red',
    paddingVertical: 5,
  },
  title: {
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
  },
  subTitle: {
    alignItems: 'center',
    textAlign: 'center',
    // fontWeight: 'bold',
    fontSize: SIZES.font,
    color: COLORS.gray,
    marginTop: 5,
    paddingHorizontal: 20,
  },
  iconStyle: {
    // width: '80%',
    height: 25,
    aspectRatio: 1,
    marginRight: 8,
    marginLeft: 8,
  },
  buttonContainer: {
    display: 'flex',
    width: '100%',
    height: '30%',
    alignItems: 'center',
  },
});

export default Network;
