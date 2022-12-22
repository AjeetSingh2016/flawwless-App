import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import {
  HomeHeader,
  OptionsCard,
  BottomMenu,
  HeadBarButton,
  FocusedStatusBar,
} from './src/components';
import auth from '@react-native-firebase/auth';
import {COLORS, SHADOWS, SIZES, ASSETS} from './src/constants';
import React, {useState, useEffect} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import { getCurrentUser } from './src/constants';


const optionCardData = {
  first: {
    title: 'Rule Book',
    subTitle: 'Important provisions and conducts',
    icon: ASSETS.rule,
  },
  second: {
    title: 'Constitutional Amendments',
    subTitle: 'Addition subtraction of constitutional provisions',
    icon: ASSETS.amendment,
  },
  third: {
    title: 'Controversies',
    subTitle: 'Controversy relating to bill and pre constitutional law',
    icon: ASSETS.controversial,
  },
  fourth: {
    title: 'Generic Release',
    subTitle: 'International issues and legal angle, Economy and ETC',
    icon: ASSETS.article,
  },
  fifth: {
    title: 'Legal digest',
    subTitle:
      'Legal concepts like arrest under crpc  and  doctrines related to basic structure',
    icon: ASSETS.digest,
  },
  sixth: {
    title: 'Constitutional provisions',
    subTitle: 'Detailed & simplified discussion of constitutional provisions',
    icon: ASSETS.simplified,
  },
};

const Home = ({navigation}) => {
  // User Info
  const [currentUser, setCurrentUser] = useState('Learner');

  useEffect(() => {
    (async function () {
      const data = await getCurrentUser();
      setCurrentUser(data);
    })();
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: '#f3f3f3', height: '100%'}}>
      <FocusedStatusBar
        barStyle="dark-content"
        translucent={false}
        backgroundColor="#F0F2F5"
      />

      <View style={{height: '20%'}}>
        <HomeHeader navigation={navigation} userInfo={currentUser.user} />
        <HeadBarButton navigation={navigation} />
      </View>

      <View style={{width: '100%', flex: 6}}>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            paddingLeft: 15,
            height: '10%',
          }}>
          <Text
            style={{
              fontSize: SIZES.extraLarge,
              fontWeight: '600',
              color: '#272727',
            }}>
            {' '}
            Resources
          </Text>
        </View>

        {/* Options card  */}
        <View style={{flex: 6}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                // backgroundColor: 'red',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                paddingHorizontal: 10,

                height: '80%',
              }}>
              <OptionsCard
                data={optionCardData.first}
                handlePress={() =>
                  navigation.navigate('RuleBook', {
                    name: 'Rule Book',
                  })
                }
              />
              <OptionsCard
                data={optionCardData.second}
                handlePress={() =>
                  navigation.navigate('AllOptions', {
                    name: 'Constitutional Amendments',
                    path: 'ICA',
                    subTitle: 'Chapter',
                  })
                }
              />
              <OptionsCard
                data={optionCardData.third}
                handlePress={() =>
                  navigation.navigate('AllOptions', {
                    name: 'Controversies',
                    path: 'Controversies',
                    subTitle: 'Chapter',
                  })
                }
              />
            </View>
          </ScrollView>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                // backgroundColor: 'green',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                paddingHorizontal: 10,
                height: '80%',
              }}>
              <OptionsCard
                data={optionCardData.fourth}
                handlePress={() =>
                  navigation.navigate('AllOptions', {
                    name: 'Genric Article',
                    path: 'GenricRelease',
                    subTitle: 'Chapter',
                  })
                }
              />
              <OptionsCard
                data={optionCardData.fifth}
                handlePress={() =>
                  navigation.navigate('LegalDigest', {
                    name: 'Legal Digest',
                  })
                }
              />
              <OptionsCard
                data={optionCardData.sixth}
                handlePress={() =>
                  navigation.navigate('AllOptions', {
                    name: 'Constitutional Prvision',
                    path: 'SCP',
                    subTitle: 'Chapter',
                  })
                }
              />
            </View>
          </ScrollView>
        </View>

        {/* Bottom menu */}
        <View style={styles.bottomMenuContainer}>
          <BottomMenu/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 10,
  },
  bottomMenuContainer: {
    width: '100%',
    flex: 0.8,
  },
});
