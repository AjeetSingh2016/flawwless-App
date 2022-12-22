import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';

const HeadBarButton = ({navigation}) => {
  return (
    <View style={headStyles.container}>
      <View style={headStyles.iconContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('BareAct', {name: 'News'})}
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '49.5%',
            height: '100%',
            alignItems: 'center',
          }}>
          <Image
            style={headStyles.iconStyle}
            source={{
              uri: 'https://img.icons8.com/material-outlined/24/FFFFFF/news.png',
            }}
          />
          <Text style={{color: 'white'}}>Bare Act</Text>
        </TouchableOpacity>
      </View>

      <View style={{height: '70%', width: 1, backgroundColor: '#ffff'}}></View>

      <View style={headStyles.iconContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Dictionary', {name: 'Dictionary'})
          }
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '49.5%',
            height: '100%',
            alignItems: 'center',
          }}>
          <Image
            style={headStyles.iconStyle}
            source={{
              uri: 'https://img.icons8.com/material-outlined/24/FFFFFF/book.png',
            }}
          />
          <Text style={{color: 'white'}}>Dictionary</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeadBarButton;

const headStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#272727',
    // backgroundColor: "black",
    height: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  iconStyle: {
    // width: '80%',
    height: 20,
    aspectRatio: 1,
    marginRight: 8,
  },
  iconContainer: {
    height: '100%',
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
