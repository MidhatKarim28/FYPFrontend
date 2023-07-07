import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

import { AntDesign } from '@expo/vector-icons';

const Signup = ({ navigation, route }) => {
  const { userType } = route.params;

  const { width, height } = Dimensions.get("window");
  const imageWidth = Math.min(width * 0.9, 410); 
  const imageHeight = imageWidth * (410 / 410); 
  const buttonWidth = width * 0.7;  
  const backButtonMarginTop = height <= 604 ?-height*0.85:-height*0.75;
 

  return (
    <View style={styles.container}>
      <View style={styles.greyBox} />
      <Image
        source={require("../../assets/singup.png")}
        style={{
          width: imageWidth,
          height: imageHeight,
          marginTop: height * 0.2,
          resizeMode: "cover",
        }}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('CWelcome', { userType })}>
          <View style={[styles.button, { width: buttonWidth }]}>
            <Text style={styles.buttonText}>Sign In</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Register', { userType })}>
          <Text style={styles.signUpText}>Don't Have An Account? Sign Up</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={[styles.backButton, { marginTop: backButtonMarginTop }]}>
          <AntDesign name="arrowleft" size={40} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  greyBox: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: '60%',
    backgroundColor: 'white',
    opacity: 0.5,
    borderRadius: 20,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#5f60ba',
    marginBottom: '5%',
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  signUpText: {
    textAlign: 'center',
    padding: 20,
    color: 'black',
    fontWeight: 'bold',
    marginTop: -30,
  },
  backButton: {
    height: 50,
    borderRadius: 10,
    padding: 2,
    width: 60,
    marginLeft: -160,
  },
});

export default Signup;
