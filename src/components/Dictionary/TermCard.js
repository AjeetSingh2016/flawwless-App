import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, SHADOWS} from '../../constants';

const TermCard = ({data}) => {
  const press = () => {
    try {
      // play the file tone.mp3

      // or play from url
      SoundPlayer.playUrl(
        'https://api.dictionaryapi.dev/media/pronunciations/en/legal-us.mp3',
      );
    } catch (e) {
      console.log(`cannot play the sound file`, e);
    }
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>
        <View
          style={{
            width: '80%',
            height: '100%',
            display: 'flex',
            justifyContent: 'space-around',
            paddingLeft: 30,
          }}>
          <Text style={{color: 'white',textTransform: "capitalize"}}>
            {data ? data[0].word : 'Search Anything...'}
          </Text>
          <Text style={{color: COLORS.whiteSmoke, }}>
            {data ? data[0].phonetic : 'Search Anything...'}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            press();
          }}
          style={{
            width: '20%',
            height: '40%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>

        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TermCard;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '45%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: COLORS.second,
    height: '100%',
    width: '90%',
    borderRadius: 10,
    ...SHADOWS.dark,
    display: 'flex',
    flexDirection: 'row',
  },
  iconStyle: {
    height: 30,
    aspectRatio: 1,
  },
});
