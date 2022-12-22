import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TitleCards, Loading} from '../components';
import {getData} from '../constants';
import {useNavigation} from '@react-navigation/native';
import {FocusedStatusBar} from '../components';

const SecondPattern = ({route, navigation}) => {
  console.log(route.params.path);
  const baseURL = 'https://ajeetsingh2016.github.io/flawless-api/';

  const API = `${baseURL}${route.params.path}`;

  const [result, setResult] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      title: route.params.name,
    });

    (async function () {
      const data = await getData(API);
      // console.log(data);
      setResult(data);
    })();
  }, []);

  return (
    <View
      style={{
        // backgroundColor: 'red',
        paddingHorizontal: 5,
        MarginBottom: 15,
        flex: 1,
      }}>
      <FocusedStatusBar
        barStyle="dark-content"
        translucent={false}
        backgroundColor="#F0F2F5"
      />

      {result ? (
        <FlatList
          data={result.data}
          renderItem={({item, index}) => (
            <TitleCards
              title={item.title}
              subTitle={item.subTitle ? item.subTitle : `No.${index + 1}`}
              handlePress={() =>
                navigation.navigate('FirstPattern', {
                  name: `${item.title}`,
                  path: item.path,
                  subTitle: 'Chapter',
                })
              }
            />
          )}
          keyExtractor={(item, index) => index}
        />
      ) : (
        <Loading />
      )}
    </View>
  );
};

export default SecondPattern;
