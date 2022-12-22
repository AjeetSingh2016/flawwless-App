import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {WebView} from 'react-native-webview';
import {FocusedStatusBar} from '../components';

const Web = ({route, navigation}) => {
  console.log(route.params.path);

  useEffect(() => {
    navigation.setOptions({
      title: route.params.name,
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        paddingBottom: 10,
        paddingHorizontal: 2,
        backgroundColor: 'white',
      }}>
      <FocusedStatusBar
        barStyle="dark-content"
        translucent={false}
        backgroundColor="#F0F2F5"
      />

      <WebView
        source={{uri: `https://flawless-page.vercel.app/${route.params.path}`}}
      />
    </View>
  );
};

export default Web;
