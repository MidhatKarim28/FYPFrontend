import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Signup = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");
  console.log(width);
  console.log(height);
  const logoWidth = width -100;
  const logoHeight = logoWidth * (280 / 300);

  return (
    <LinearGradient
      colors={["#192648", "#0A1634", "black"]}
      style={styles.container}
    >
      <View>
        <Image
          source={require("../assets/Logo.png")}
          style={{
            width: logoWidth,
            height: logoHeight,
            resizeMode: "contain",
            alignSelf: "center",
            marginTop: height * 0.01,
          }}
        />
        <Image
          source={require("../assets/background.png")}
          style={{
            width: width,
            height: height / 2,
            marginTop: -height * 0.10,
            resizeMode: "cover",
          }}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Mode')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Join Now</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
  },
  button: {
    width: 260,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#5f60ba",
    marginTop: "2%",
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white",
    fontWeight: "bold",
  },
});

export default Signup;
