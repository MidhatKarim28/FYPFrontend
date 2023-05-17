import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  Keyboard,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";

const OTP = ({ navigation, route }) => {
  const { height, width } = Dimensions.get("window");
  const windowHeight = height + height * 0.05;
  const { userType } = route.params;
  const backButtonMarginTop = height <= 604 ? -height * 0.78 : -height * 0.75;
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const otpInputRefs = useRef([]);
  const { phoneNumber,cnic } = route.params; // Get the phone number from the route params

  const [timer, setTimer] = useState(30); // Adjust the timer value here

  const handleOTPChange = (inputOTP, index) => {
    // Remove any non-numeric characters from the input
    const numericInput = inputOTP.replace(/\D/g, "");
    const newOTP = [...otp];
    newOTP[index] = numericInput.slice(-1);
    setOTP(newOTP);
  };
const handleVerifyOTP = async () => {
  try {
    const response = await axios.post("http://192.168.18.122:8000/provider/verifyOTP", {
      phone_number: phoneNumber,
      code: otp.join(""),
    });
    console.log(response);
      if (response.data.status === "success") {
        navigation.navigate(userType === "provider" ? "HomeTabs" : "ClientTabs", {phoneNumber,cnic});
      } else {
        Alert.alert("Incorrect OTP", response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  const handleResendOTP = async () => {
    try {
      const response = await axios.post("http://192.168.18.122:8000/provider/resendOTP", {
        phone_number: phoneNumber, // Use the phone number from the route params
      });
      if (response.data.status === "success") {
        setTimer(60); // Reset the timer to the initial value when OTP is resent
        startTimer(); // Start the timer countdown
        Alert.alert("OTP Resent", "A new OTP has been sent to your mobile number.");
      } else {
        Alert.alert("Error", response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const startTimer = () => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  };

  useEffect(() => {
    otpInputRefs.current[0]?.focus(); // Focus on the first input box when the component mounts
    startTimer(); // Start the timer countdown
  }, []);

  const focusNextInput = (index) => {
    if (index < otpInputRefs.current.length - 1) {
      otpInputRefs.current[index + 1]?.focus();
    } else {
      Keyboard.dismiss();
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/undraw_Forgot_password_re_hxwm.png")}
        style={{
          width: width * 0.8,
          height: height * 0.32,
          resizeMode: "cover",
        }}
      />
      <View>
        <View style={{ marginTop: height * 0.04, alignItems: "center" }}>
          <Text style={{ color: "black", fontSize: height * 0.044, fontWeight: "bold" }}>
            OTP
          </Text>
          <Text
            style={{
              color: "black",
              fontSize: 15,
              width: 250,
              textAlign: "center",
              marginTop: height * 0.02,
            }}
          >
            Please enter the 6-digit OTP sent to your mobile number
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: height * 0.02,
            marginLeft: -5,
            marginRight: 5,
          }}
        >
          {/* Render 6 TextInput components for OTP entry */}
          {Array.from({ length: 6 }, (_, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              value={otp[index]}
              onChangeText={(text) => {
                const newOTP = [...otp];
                newOTP[index] = text;
                setOTP(newOTP);
                focusNextInput(index);
              }}
              onSubmitEditing={() => focusNextInput(index)}
              returnKeyType={index === otpInputRefs.current.length - 1 ? "done" : "next"}
              ref={(ref) => (otpInputRefs.current[index] = ref)}
            />
          ))}
        </View>
        <TouchableOpacity onPress={handleVerifyOTP}>
          <View
            style={[
              styles.button,
              { width: width * 0.7222, marginTop: height * 0.04 },
            ]}
          >
            <Text style={[styles.buttonText, { padding: height * 0.0267 }]}>Verify</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleResendOTP} disabled={timer > 0}>
          <Text style={[styles.resendOTPText, { paddingVertical: height * 0.0267 }]}>
            {timer > 0 ? `Resend OTP (${timer})` : "Resend OTP"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Register", { userType })}
        >
          <Text style={[styles.signupText, { paddingVertical: height * 0.0267 }]}>
            Don't have an account? Sign Up
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
  otpInput: {
    borderBottomWidth: 2,
    borderColor: "black",
    fontSize: 24,
    textAlign: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: 40,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#5f60ba",
    marginLeft: 55,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  resendOTPText: {
    textAlign: "center",
    marginTop: 10,
    color: "blue",
    textDecorationLine: "underline",
  },
  signupText: {
    textAlign: "center",
    marginTop: -10,
    color: "black",
    fontWeight: "bold",
  },
  backButton: {
    height: 50,
    borderRadius: 10,
    padding: 2,
    width: 60,
    marginLeft: 20,
  },
});

export default OTP; 

