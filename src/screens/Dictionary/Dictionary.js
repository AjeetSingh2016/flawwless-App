import {View, Text, ScrollView, Image, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {COLORS, SIZES, SHADOWS} from '../../constants';
import {
  FocusedStatusBar,
  BottomMenu,
  SearchBar,
  TermCard,
  Slide,
  DefinitionCards,
} from '../../components';


const showAlert = () =>
  Alert.alert(
    "Not Found",
    "Try again with another word or check your spelling!",
    [
      {
        text: "OK",
        style: "cancel",
      },
    ],
    {
      cancelable: true,
    }
);

const Dictionary = () => {

  
  const getData = async (text) =>{
    const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${text}`
    const response = await fetch(URL);
    const data = await response.json();
    if(data.length===1){
      setData(data);
    }
    else{
      showAlert();
    }
  
  }

  useEffect(() => {
    getData('flawless')
    
  }, [])
  
  
  const [data, setData] = useState(null)

  return (
    <View style={{backgroundColor: COLORS.first, flex: 1}}>
      <FocusedStatusBar
        barStyle="dark-content"
        translucent={false}
        backgroundColor="#F0F2F5"
      />

      <View
        style={{
          backgroundColor: 'transparent',
          flex: 5,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',

        }}>
        <SearchBar getData={getData} />
        <TermCard data={data}/>
        <Slide />
      </View>

      <View style={{backgroundColor: 'transparent', flex: 7}}>
        <ScrollView>
          
          <View style={{display: "flex", alignItems: "center"}}>
            {
              data ? <DefinitionCards  data={data[0]?.meanings[0]}/>  : ""
            }
            
            {data && data[0]?.meanings[1] ? <DefinitionCards data={data[0]?.meanings[1]}/> : ""}
          </View>
        </ScrollView>
      </View>

      <View style={{backgroundColor: 'transparent', flex: 1}}>
        <BottomMenu />
      </View>
    </View>
  );
};

export default Dictionary;
