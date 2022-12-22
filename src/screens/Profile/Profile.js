import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  Linking,
  Button
} from 'react-native';
import {FocusedStatusBar} from '../../components';
import {COLORS, SIZES, SHADOWS} from '../../constants';
import React, {useState, useEffect, useCallback} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const optionsData = {
  first: {
    title: 'Legal Information',
    subTitle: 'Terms and Conditions',
    icon: 'https://img.icons8.com/material-outlined/24/null/policy-document.png',
  },
  second: {
    title: 'Share App',
    subTitle: 'Refer us to your friends',
    icon: 'https://img.icons8.com/material-outlined/24/null/share.png',
  },
  third: {
    title: 'Rate App',
    subTitle: 'Rate us on Google Play',
    icon: 'https://img.icons8.com/material-outlined/24/null/facebook-like--v1.png',
  },
  fourth: {
    title: 'Logout',
    subTitle: 'Exit the App',
    icon: 'https://img.icons8.com/metro/26/null/exit.png',
  },
  fifth: {
    title: 'About us',
    subTitle: 'Know about us',
    icon: 'https://img.icons8.com/material-outlined/24/null/info--v1.png',
  },
};
const logOut = () => {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
};

const supportedURL = "https://google.com";

const unsupportedURL = "slack://open?team=123456";




const warningAlert = () =>
  Alert.alert('Warning', 'Are you sure you want to leave?', [
    {
      text: 'Cancel',
      style: 'cancel',
    },
    {text: 'Yes', onPress: () => logOut()},
  ]);




const OptionsCard = ({st, data, handlePress}) => (
  <View style={[styles.OptionsCard, st]}>
    <TouchableOpacity
      onPress={handlePress}
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 15,
      }}>
      <View
        style={[
          styles.iconContainer,
          {
            borderWidth: 0.3,
            borderColor: COLORS.whiteSmoke,
            borderRadius: 3,
          },
        ]}>
        <Image
          style={styles.iconStyle}
          source={{
            uri: data.icon,
          }}
        />
      </View>

      <View
        style={{
          width: '76%',
          //   backgroundColor: 'green',
          height: '50%',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          paddingLeft: 8,
        }}>
        <Text style={{color: COLORS.second, fontSize: 15, fontWeight: '500'}}>
          {data.title}
        </Text>
        <Text style={{color: COLORS.gray, fontSize: 13}}>{data.subTitle}</Text>
      </View>

      <View style={styles.iconContainer}>
        <Image
          style={styles.iconStyle}
          source={{
            uri: 'https://img.icons8.com/material-outlined/24/null/more-than.png',
          }}
        />
      </View>
    </TouchableOpacity>
  </View>
);

const Profile = ({navigation, route}) => {
  //   console.log(route.params.photo);


  const rateUs = useCallback(async () => {
    // Open the custom settings if the app has one
    await Linking.openURL("https://play.google.com/store/apps/details?id=com.flawwless.app");
  }, []);
  
  return (
    <View style={styles.wraper}>
      <FocusedStatusBar
        barStyle="dark-content"
        translucent={false}
        backgroundColor="#f3f3f3"
      />

      <View style={styles.profile}>
        <Image
          style={styles.image}
          source={{
            uri: route.params.photo,
          }}
        />
        <Text style={styles.profileTitle}>{route.params.name}</Text>
      </View>

      <View style={styles.options}>
        <View style={{width: '85%', height: '80%'}}>

          <OptionsCard
            st={styles.firstOptions}
            data={optionsData.first}
            handlePress={() =>
              navigation.navigate('Web', {
                name: 'Terms & Conditions',
                path: 'App/T&C.html',
              })
            }
          />
{/* 
          <OptionsCard st={styles.genralOption} data={optionsData.second} handlePress={() =>
                navigation.navigate('Web', {
                    name: `${item.title}`,
                    path: item.web,
                    subTitle: 'Chapter',
                })
              }/> */}
          <OptionsCard st={styles.genralOption} data={optionsData.third}handlePress={()=>rateUs()}/>
          <OptionsCard st={styles.genralOption} data={optionsData.fifth} handlePress={() =>
                navigation.navigate('Web', {
                    name: `About us`,
                    path: "App/About.html",
                })
              }/>
          <OptionsCard st={styles.lastOptions} data={optionsData.fourth} handlePress={() =>warningAlert()}/>
        </View>
        <View>
          <Text style={{color: COLORS.gray}}>App version 1.2</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  wraper: {
    backgroundColor: COLORS.first,
    flex: 1,
  },
  profile: {
    // backgroundColor: "red",
    flex: 2.8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileTitle: {
    color: COLORS.second,
    fontSize: SIZES.medium + 5,
    fontWeight: '500',
  },
  options: {
    // backgroundColor: "yellow",
    flex: 7,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    height: 120,
    aspectRatio: 1,
    borderRadius: 15,
    marginBottom: 20,
  },
  OptionsCard: {
    width: '100%',
    height: '25%',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: COLORS.whiteSmoke,
    backgroundColor: COLORS.third,
  },
  firstOptions: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  lastOptions: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    ...SHADOWS.light,
  },
  genralOptions: {
    borderRadius: 0,
  },
  iconStyle: {
    // width: '80%',
    height: 20,
    aspectRatio: 1,
    // marginRight: 8,
  },
  iconContainer: {
    // backgroundColor: COLORS.third,
    height: '35%',
    width: '12%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
