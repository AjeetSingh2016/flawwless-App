import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TitleCards, Loading} from '../../components';
import {getData} from '../../constants';
import {FocusedStatusBar} from '../../components';
// import {useNavigation} from '@react-navigation/native';

const BareAct = ({navigation}) => {
  const API = 'https://ajeetsingh2016.github.io/flawless-api/BareAct/api.json';

  // const navigation = useNavigation();

  const [result, setResult] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      title: 'Bare Acts',
    });

    (async function () {
      const data = await getData(API);
      // console.log(data.data[0]);
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
                navigation.navigate(`${item.pattern}Pattern`, {
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
      <View>
        <Text style={{color: 'black', textAlign: 'center', fontWeight: 'bold'}}>
          More are Coming Soon, Stay Tuned 🧑‍💻
        </Text>
      </View>
    </View>
  );
};

export default BareAct;
