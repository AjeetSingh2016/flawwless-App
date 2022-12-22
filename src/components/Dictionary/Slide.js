import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { COLORS } from '../../constants';

const Slide = () => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.textContainer}>
        <Text style={[styles.text, {color: COLORS.second}]}>Definition</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  wrapper: {
    // backgroundColor: 'black',
    width: '100%',
    height: '15%',
    flexDirection: 'row',
    // justifyContent: 'space-between',
 
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 24,
  },
  text: {
    color: COLORS.whiteSmoke,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
