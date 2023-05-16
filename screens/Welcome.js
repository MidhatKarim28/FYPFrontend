import React from "react";
import { Dimensions, StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const Welcome = ({ navigation, route }) => {
  const { width, height } = Dimensions.get("window");
  const { userType } = route.params;
  const backButtonMarginTop = height <= 604 ?-height*0.90:-height*0.80;

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/undraw_text_field_htlv.png")}
        style={[styles.image,{  width: width * 0.99,
          height: width * 0.9 * 0.8,}]}
      />
      <View>
        <View style={[styles.welcomeTextContainer,{ marginTop: 20,marginLeft:10}]}>
          <Text style={[styles.welcomeText,{fontSize:height * 0.044,}]}>Welcome Back!</Text>
          <Text style={[styles.descriptionText]}>
            Enter your registered Mobile Number to receive OTP.
          </Text>
        </View>
        <TextInput
          style={[styles.input, { width: width * 0.6, marginTop: height * 0.06, marginLeft: width * 0.1944,
            height: height * 0.0625,
            paddingHorizontal: width * 0.0556 }]}
          placeholder="+92 3XXXXXXXXX"
        />

        <TouchableOpacity onPress={() => navigation.navigate('OTP', { userType })}>
          <View style={[styles.button,{ width: width * 0.7222,marginTop: height * 0.04}]}>
            <Text style={[styles.buttonText,{padding: height * 0.0267,}]}>Send OTP</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register', { userType })}>
          <Text style={[styles.signupText,{ paddingVertical: height * 0.0267}]}>Don't Have An Account? Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={[styles.backButton,{ marginTop: backButtonMarginTop }]}>
            <AntDesign name="arrowleft" size={40} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    resizeMode: "cover",
  },
  welcomeTextContainer: {
    alignItems: "center",
  },
  welcomeText: {
    color: "black",
    fontWeight: "bold",
  },
  descriptionText: {
    color: "black",
    textAlign: "center",
    marginTop:30,
    width:250,
    fontSize:15
  },
  input: {
   
    borderRadius: 10,
    backgroundColor: "#f6f7f9",
    marginVertical: 3,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginLeft:55,
    backgroundColor: "#5f60ba",
   
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: 'bold',
  },
  signupText: {
    textAlign: "center",
    color: 'black',
    fontWeight: 'bold',
    marginTop: -10,
  },
  backButton: {
    height: 50,
    borderRadius: 10,
    padding: 2,
    width: 60,
    marginLeft: 20,
  },
});

export default Welcome;