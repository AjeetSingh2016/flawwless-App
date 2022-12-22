
import React,{useState, useEffect}  from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
    SafeAreaView,
  } from 'react-native';
import {COLORS, SHADOWS, SIZES} from '../../constants';
import { useNavigation } from '@react-navigation/native';
import { getCurrentUser } from '../../constants';



const iconService = {
    home:{
        icon: "https://img.icons8.com/material/24/null/home--v5.png",
        title: "Home"
    },
    news:{
        icon: "https://img.icons8.com/material/24/null/new-document.png",
        title: "Bare Act"
    },
    profile:{
        icon: "https://img.icons8.com/material/24/null/person-male.png",
        title: "Profile"
    }

}



const Icons = ({icon, title, navigation, page,userInfo}) => (

    <View style={styles.iconContainer}>
      <TouchableOpacity
         onPress={() => navigation.navigate(page, userInfo)}
        style={{
          display: 'flex',
          width: '49.5%',
          height: '100%',
          alignItems: 'center',
          justifyContent: "center",
        }}>
        <Image
          style={styles.iconStyle}
          source={{
            uri: icon,
          }}
        />
        <Text style={{color: 'black'}}>{title}</Text>
      </TouchableOpacity>
    </View>
)

const BottomMenu = () => {

   const [currentUser, setCurrentUser] = useState('Learner');

  useEffect(() => {
    (async function () {
      const data = await getCurrentUser();
      setCurrentUser(data);
    })();
    
  }, []);

  const navigation = useNavigation();
  return (
    <View style={styles.bottomMenu}>
      <Icons icon={iconService.news.icon} title={iconService.news.title} navigation={navigation} page={"BareAct"}/>
      <Icons icon={iconService.home.icon} title={iconService.home.title} navigation={navigation} page={"HomeScreen"}/>
      <Icons icon={iconService.profile.icon} title={iconService.profile.title} navigation={navigation} page={"Profile"} userInfo={currentUser.user}/>
    </View>
  )
}

export default BottomMenu

const styles = StyleSheet.create({
    bottomMenu:{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#F0F2F5",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderTopWidth: 0.5,
        borderRightWidth: 0.5,
        borderLeftWidth: 0.5,
        borderColor: COLORS.whiteSmoke,
        display: "flex",
        flexDirection: "row",
    },
    iconStyle: {
        // width: '80%',
        height: 20,
        aspectRatio: 1,
        // marginRight: 8,
      },
      iconContainer: {
        height: '100%',
        width: '33.3%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: "yellow"
      },
})
