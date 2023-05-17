import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Keyboard,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";

const PWelcome = ({ navigation, route }) => {
  const { width, height } = Dimensions.get("window");
  const { userType } = route.params;
  const backButtonMarginTop = height <= 604 ? -height * 0.90 : -height * 0.80;
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cnic, setCNIC] = useState("");

  const handlePhoneNumberChange = (inputNumber) => {
    const numericInput = inputNumber.replace(/\D/g, "");

    if (numericInput.startsWith("92")) {
      const formattedNumber = numericInput.slice(2, 12);
      setPhoneNumber(`92${formattedNumber}`);
    } else {
      setPhoneNumber(`92${numericInput}`);
    }
  };

  const handleCNICChange = (inputCNIC) => {
    const numericInput = inputCNIC.replace(/\D/g, "");
    setCNIC(numericInput);
  };

  const handleDoneButtonPress = () => {
    Keyboard.dismiss();
  };

  const handleSendOTP = () => {
    // Make the API call to check if the CNIC exists in the database
    axios
      .get(`http://192.168.18.122:8000/provider/check-cnic/${cnic}`)
      .then((response) => {
        // Handle the response from the API
        const { cnic } = response.data;
        // If a provider with the given CNIC exists, proceed with sending OTP
        // Make the API call to send the OTP
        axios
          .post("http://192.168.18.122:8000/provider/login", {
            phone_number: phoneNumber,
            channel: "call", // or 'call' based on your API requirements
          })
          .then((response) => {
            // Handle the response from the API
            if (response.data.status === "success") {
              // OTP sent successfully, navigate to OTP screen with the CNIC
              navigation.navigate("OTP", {
                userType,
                phoneNumber,
                cnic,
              });
              
            } else {
              // Error sending OTP, show an error message
              console.log(response.data.message);
            }
          })
          .catch((error) => {
            // Handle the error if the API call fails
            console.log(error);
          });
        
        
      })
      .catch((error) => {
        // Handle the error if the CNIC does not exist in the database
        console.log("CNIC does not exist");
      });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/undraw_text_field_htlv.png")}
        style={[
          styles.image,
          { width: width * 0.99, height: width * 0.9 * 0.8 },
        ]}
      />
      <View>
        <View
          style={[
            styles.welcomeTextContainer,
            { marginTop: 20, marginLeft: 10 },
          ]}
        >
          <Text style={[styles.welcomeText, { fontSize: height * 0.044 }]}>
            Welcome Back P!
          </Text>
          <Text style={[styles.descriptionText]}>
            Enter your registered Mobile Number and CNIC to receive OTP.
          </Text>
        </View>
        <TextInput
          style={[
            styles.input,
            {
              width: width * 0.6,
              marginTop: height * 0.06,
              marginLeft: width * 0.1944,
              height: height * 0.0625,
              paddingHorizontal: width * 0.0556,
            },
          ]}
          placeholder="+92 3XXXXXXXXX"
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
          onBlur={() => Keyboard.dismiss()}
          returnKeyType="done"
          onSubmitEditing={handleDoneButtonPress}
        />

        <TextInput
          style={[
            styles.input,
            {
              width: width * 0.6,
              marginTop: height * 0.02,
              marginLeft: width * 0.1944,
              height: height * 0.0625,
              paddingHorizontal: width * 0.0556,
            },
          ]}
          placeholder="CNIC"
          keyboardType="numeric"
          value={cnic}
          onChangeText={handleCNICChange}
          onBlur={() => Keyboard.dismiss()}
          returnKeyType="done"
          onSubmitEditing={handleDoneButtonPress}
        />

        <TouchableOpacity onPress={handleSendOTP}>
          <View
            style={[
              styles.button,
              { width: width * 0.7222, marginTop: height * 0.04 },
            ]}
          >
            <Text style={[styles.buttonText, { padding: height * 0.0267 }]}>
              Send OTP
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(userType === "provider" ? "HomeTabs" : "ClientTabs", {
              phoneNumber,
              cnic,
            });
          }}
        >
          <Text
            style={[styles.signupText, { paddingVertical: height * 0.0267 }]}
          >
            Don't Have An Account? Sign Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={[styles.backButton, { marginTop: backButtonMarginTop }]}>
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
    backgroundColor: "white",
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
    marginTop: 30,
    width: 250,
    fontSize: 15,
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
    marginLeft: 55,
    backgroundColor: "#5f60ba",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  signupText: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
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

export default PWelcome;
