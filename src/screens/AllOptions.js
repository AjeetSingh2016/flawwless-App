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
import { FocusedStatusBar } from '../components';

const baseURl = 'https://ajeetsingh2016.github.io/flawless-api/';

const AllOptions = ({route, navigation}) => {
  const API = `${baseURl}${route.params.path}/api.json`;

  const renderItem = ({item}) => <Item title={item.title} />;

  const getData = async () => {
    const response = await fetch(API);
    const data = await response.json();
    // console.log(data);
    setResult(data);
  };

  const [result, setResult] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      title: route.params.name,
    });
    getData();
  }, []);

  return (
    <View
      style={{
        // backgroundColor: 'red',
        paddingHorizontal: 5,
        paddingBottom: 15,
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
                navigation.navigate('Web', {
                  name: `${item.title}`,
                  path: `${route.params.path}/${index + 1}.html`,
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default AllOptions;

{
  /* <FlatList
          data={result}
          keyExtractor={item => item.part}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        /> */
}
