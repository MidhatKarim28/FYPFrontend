import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
const Battoon = ({ title,title2}) => {
  return (
    <View>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
       <Text style={styles.buttonText}>{title2}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 260,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#FF8901",
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white",
  },
});

export default Battoon;
