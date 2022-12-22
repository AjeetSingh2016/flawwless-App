import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {TitleCards} from '../../components';
import { FocusedStatusBar } from '../../components';

const RuleBook = ({route, navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      title: route.params.name,
    });
  }, []);

  return (
    <View
      style={{
        paddingHorizontal: 5,
      }}>
              <FocusedStatusBar
        barStyle="dark-content"
        translucent={false}
        backgroundColor="#F0F2F5"
      />

      <TitleCards
        title={'Lok Sabha'}
        subTitle={'Rules'}
        handlePress={() =>
          navigation.navigate('AllOptions', {
            name: 'Lok Sabha',
            path: 'RuleBook/LokSabha',
            subTitle: "Chapter"
          })
        }
      />
      <TitleCards
        title={'Supreme Court'}
        subTitle={'Rules'}
        handlePress={() =>
          navigation.navigate('AllOptions', {
            name: 'Supreme Court',
            path: 'RuleBook/SupremeCourt',
            subTitle: "Part"
          })
        }
      />
    </View>
  );
};

export default RuleBook;
