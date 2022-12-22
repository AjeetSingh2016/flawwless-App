import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, SHADOWS, SIZES} from '../../constants';


const HomeHeader = ({navigation, userInfo}) => {


  return (
    <View style={styles.Container}>
      <View style={{width: '85%'}}>
        <Text style={styles.headerText}>Hi, {userInfo?.name.split(' ')[0]}  👋</Text>
        <Text style={styles.headerSubText}>Find out the helpful resources!</Text>
        {/* <Text style={styles.headerSubText}>Good Morning</Text> */}
      </View>

      <View style={styles.iconContainer}>
        {/* Profile Button */}
        <TouchableOpacity
         onPress={() => navigation.navigate('Profile', userInfo)}>
          <Image
            style={styles.iconStyle}
            source={{
              uri: 'https://img.icons8.com/fluency-systems-filled/48/272727/user-menu-male.png',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 35,
    // backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 90,
  },
  titleContainer: {
    height: '100%',
    // backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'Roboto',
  },
  subTitle: {
    color: 'gray',
    fontStyle: 'bold',
  },
  iconStyle: {
    width: '100%',
    height: 28,
    aspectRatio: 1,
  },
  iconContainer: {
    //   backgroundColor: "white"
  },
  headerText: {
    color: 'black',
    fontSize: SIZES.extraLarge,
    fontWeight: '600',
  },
  headerSubText: {
    color: COLORS.gray,
    fontSize: SIZES.small,
    fontWeight: '500',
  },
});
