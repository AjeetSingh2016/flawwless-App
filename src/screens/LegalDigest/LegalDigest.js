import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {TitleCards} from '../../components';
import { FocusedStatusBar } from '../../components';

const LegalDigest = ({route, navigation}) => {
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
        title={'Doctrines'}
        subTitle={'Digest'}
        handlePress={() =>
          navigation.navigate('AllOptions', {
            name: 'Doctrines',
            path: 'LegalDigest/Doctrines',
            subTitle: "Chapter"
          })
        }
      />
      <TitleCards
        title={'Legal Concept'}
        subTitle={'Digest'}
        handlePress={() =>
          navigation.navigate('AllOptions', {
            name: 'Legal Concept',
            path: 'LegalDigest/LegalConcept',
            subTitle: "Part"
          })
        }
      />
    </View>
  );
};

export default LegalDigest;
