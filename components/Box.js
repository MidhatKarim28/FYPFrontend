import React from "react";
import { View, Text, TextInput } from "react-native";

const Box = ({ plch }) => {
  return (
    <View
      style={{
        backgroundColor: "#f6f7f9",
        height: 45,
        borderRadius: 10,
        padding: 13,
        marginLeft:15,
        marginTop:20,
      }}
    >
      <TextInput
        placeholder={plch}
        style={{
          alignSelf: "center",
          textAlign: "center",
        }}
      ></TextInput>
    </View>
  );
};
export default Box;
