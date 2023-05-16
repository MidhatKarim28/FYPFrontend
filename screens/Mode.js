import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { useState } from "react";

const Signup = ({ navigation }) => {
  const [userType, setUserType] = useState(null);

  const { width, height } = Dimensions.get("window");
  const imageWidth = Math.min(width * 0.9, 410); 
  const imageHeight = imageWidth * (410 / 410); 

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/undraw_Begin_chat_re_v0lw.png")}
        style={{
          width: imageWidth,
          height: imageHeight,
          marginTop: height * 0.2,
          resizeMode: "cover",
        }}
      />
 <Text style={styles.signInText}>Sign In As A Service</Text>
      <View style={styles.buttonContainer}>
       
        <TouchableOpacity
          onPress={() => {
            setUserType("provider");
            navigation.navigate("Signup", { userType: "provider" });
          }}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Provider</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setUserType("seeker");
            navigation.navigate("Signup", { userType: "seeker" });
          }}
        >
          <View style={[styles.button, styles.buttonSeeker]}>
            <Text style={styles.buttonText}>Seeker</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection:'row'
  },
  signInText: {
    textAlign: "center",
    padding: 20,
    color: "black",
    fontWeight: "bold",
   // marginBottom: "10%",
  },
  button: {
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#5f60ba",
    marginBottom: "5%",
    marginLeft: "1.7%",
  },
  // buttonSeeker: {
  //   marginLeft: "5%",
  // },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white",
    fontWeight: "bold",
  },
});

export default Signup;
