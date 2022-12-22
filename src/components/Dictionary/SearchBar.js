import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';

import {COLORS, SHADOWS, SIZES} from '../../constants';

const SearchBar = ({getData}) => {
  const [text, onChangeText] = useState(null);

  return (
    <View style={styles.wrapper} >
      <View style={styles.barContainer}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.iconStyle}
            source={{
              uri: 'https://img.icons8.com/material-outlined/48/adadad/search--v1.png',
            }}
          />
        </View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Search..."
        />
        <TouchableOpacity
          onPress={() => {
            getData(text);
            Keyboard.dismiss()
          }}
          style={styles.button}>
          <Text style={{color: COLORS.whiteSmoke}}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  wrapper: {
    height: '22%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  barContainer: {
    width: '90%',
    height: 55,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 10,
    // height: "100%"
  },
  iconContainer: {
    width: '15%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    height: 30,
    aspectRatio: 1,
  },
  input: {
    height: '100%',
    width: '65%',
    color: 'black',
  },
  button: {
    width: '20%',
    backgroundColor: COLORS.second,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: "white",
  },
});
