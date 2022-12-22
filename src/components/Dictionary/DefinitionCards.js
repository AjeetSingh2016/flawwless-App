import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';

const DefinitionCards = ({data}) => {
  return (
    <View style={styles.wrapper}>
      <View
        style={{width: '100%', backgroundColor: 'transparent', paddingBottom: 5}}>
        <Text
          style={{color: COLORS.whiteSmoke, fontSize: 15, fontWeight: 'bold', textTransform: "capitalize"}}>
          {data?.partOfSpeech}
        </Text>
      </View>
      {data?.definitions.map((def, index) => {
        return (
          <React.Fragment key={index}>
            <Text style={{color: 'black'}}>{def.definition}</Text>
            <Text style={{color: COLORS.whiteSmoke}}>
              {def.example ? def.example : ''}
            </Text>
          </React.Fragment>
        );
      })}
    </View>
  );
};

export default DefinitionCards;

const styles = StyleSheet.create({
  wrapper: {
    width: '90%',
    // height: ,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginBottom: 20,
    padding: 15,
  },
});
