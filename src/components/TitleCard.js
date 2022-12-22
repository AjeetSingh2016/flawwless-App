import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SHADOWS, SIZES} from "../constants"

const TitleCards = ({ ...props }) => {
  return (
    <View style={{ width: "100%", display: "flex", alignItems: "center" }}>

      <TouchableOpacity
        onPress={props.handlePress}
        style={{
          backgroundColor: COLORS.white,
          marginTop: 10,
          height: 75,
          borderRadius: SIZES.base,
          width: "97%",
          display: "flex",
          justifyContent: "space-around",
          paddingHorizontal: SIZES.base,
          ...SHADOWS.light
        }}
      >

        <Text style={{color: "black"}}>{props.title}</Text>
        <Text style={{color: COLORS.ligtGray, textTransform: "capitalize"}} >{props.subTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TitleCards;
