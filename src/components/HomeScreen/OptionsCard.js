import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS, SHADOWS, SIZES, ASSETS} from '../../constants';
import React from 'react';
// import Second from "../screens/Proceedings/Proceedings";

const OptionsCard = ({data, handlePress}) => {
  
  const navigation = useNavigation();

  return (
    <View
      style={{
        width: 180,
        height: '98%',
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'transparent',
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          // ...SHADOWS.dark,
          borderRadius: 15,
          borderWidth: 0.3,
          borderColor: COLORS.whiteSmoke,
          backgroundColor: '#F0F2F5',
        }}>
        <View
          style={{
            width: '100%',
            height: '40%',
            padding: 10,
            display: 'flex',
            flexDirection: 'row',
            // backgroundColor: "red"
          }}>
          <View style={styles.iconContainer}>
            <Image style={styles.image} source={data.icon} />
          </View>

          <View
            style={{
              width: '70%',
              height: '70%',
              padding: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              // paddingLeft: 10,
            }}>
            <Text
              style={{
                color: COLORS.second,
                fontSize: 14,
                fontWeight: '500',
                textAlign: 'center',
              }}>
              {data.title}
            </Text>
          </View>
        </View>

        <View style={{width: '100%', height: '30%', paddingHorizontal: 10}}>
          <Text style={{color: COLORS.gray, fontSize: 12}}>
            {data.subTitle}
          </Text>
        </View>

        <View
          style={{
            height: '30%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
          onPress={handlePress}
            style={{
              backgroundColor: COLORS.second,
              borderRadius: 8,
              width: '80%',
              height: '55%',
              display: "flex",
              flexDirection :"row",
              alignItems: "center",
              justifyContent: "space-around"
            }}>
            <Text style={{color: 'white'}}>View</Text>
            <Image  source={ASSETS.arrow} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OptionsCard;

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    height: '60%',
  },
  iconContainer: {
    backgroundColor: COLORS.first,
    height: '80%',
    width: '30%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.3,
    borderColor: COLORS.whiteSmoke,
    borderRadius: 3,
  },
});
