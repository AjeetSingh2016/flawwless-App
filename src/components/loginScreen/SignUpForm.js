import {View, Text, StyleSheet, TouchableOpacity, Image, Alert} from 'react-native';
import welcomeIcon from '../../constants/image/welcome.png';
import React, {useState, useEffect} from 'react';
import {COLORS, SHADOWS, SIZES} from '../../constants';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const socialService = {
  google: {
    title: 'Continue with Google',
    icon: 'https://img.icons8.com/color/48/null/google-logo.png',
  },
  facebook: {
    title: 'Continue with Facebook',
    icon: 'https://img.icons8.com/color/48/null/facebook-new.png',
  },
};

const SocialButton = ({data, func}) => (
  <TouchableOpacity
    style={{
      display: 'flex',
      flexDirection: 'row',
      width: '85%',
      height: 50,
      alignItems: 'center',
      backgroundColor: '#272727',
      borderRadius: 8,
      marginTop: 20,
    }}
    onPress={() => {
      func();
    }}>
    <Image
      style={styles.iconStyle}
      source={{
        uri: data.icon,
      }}
    />
    <Text style={{color: 'white'}}>{data.title}</Text>
  </TouchableOpacity>
);

const SignUpForm = ({navigation}) => {
  GoogleSignin.configure({
    webClientId:
      '2972207620-vtgvi0khet4vja7ii6ss95sjo8kqps82.apps.googleusercontent.com',
  });
  
  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    await GoogleSignin.signOut();
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const userSiginIn = auth().signInWithCredential(googleCredential);
    userSiginIn
      .then(user => {
        console.log(user);
      })
      .catch(error => {
        console.log(error);
      });
  }

  // let LoginFormSchema = yup.object().shape({
  //   email: yup.string().email().required('An email is required'),
  //   username: yup
  //     .string()
  //     .required()
  //     .min(2, 'Username should be at least 2 characters'),
  //   password: yup
  //     .string()
  //     .required()
  //     .min(8, 'Password is too short - should be 8 chars minimum.'),
  // });

  // const onSignUp = (email, password, username) => {
  //   auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(data => {
  //       console.log('User account created & signed in!');

  //       firestore()
  //         .collection('Users')
  //         .add({
  //           user_id: data.user.uid,
  //           username: username,
  //           email: data.user.email,
  //         })
  //         .then(() => {
  //           console.log('User added!');
  //         });
  //     })
  //     .catch(error => {
  //       if (error.code === 'auth/email-already-in-use') {
  //         console.log('That email address is already in use!');
  //       }

  //       if (error.code === 'auth/invalid-email') {
  //         console.log('That email address is invalid!');
  //       }

  //       console.error(error);
  //     });
  // };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={welcomeIcon} />
        <Text style={styles.title}>Hey! Welcome</Text>
        <Text style={styles.subTitle}>
          We are committed to provide accurate and unbiased reaserches &
          resources to our users
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <SocialButton data={socialService.google} func={onGoogleButtonPress} />
        <SocialButton data={socialService.facebook} func={()=>{
          Alert.alert("Please try with Google, Facebook service is not available!")
        }}/>
      </View>

      <View style={{height: '10%', paddingBottom: 15}}>
        <Text
          style={{
            fontSize: SIZES.small,
            color: COLORS.gray,
            textAlign: 'center',
          }}>
          On continuing you are accepting our T&C and Privacy Policy.
        </Text>
        <Text
          onPress={() =>
            navigation.navigate('Web', {
              name: 'Terms & Conditions',
              path: 'App/T&C.html',
            })
          }
          style={styles.terms_text}>
          Read T&C and Privacy Policy.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    flex: 7,
  },
  image: {
    aspectRatio: 1,
    height: '70%',
  },
  imageContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '65%',
    // backgroundColor: "red",
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
    height: '29%',
    alignItems: 'center',
  },
  terms_text: {
    color: 'blue',
    fontSize: SIZES.font - 1,
    textAlign: 'center',
  },
});

export default SignUpForm;
