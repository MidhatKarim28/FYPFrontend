import React, { useState } from "react";
import { Dimensions, StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const Create = ({ navigation, route }) => {
  const windowDimensions = Dimensions.get("window");
  const width = windowDimensions.width;
  const height = windowDimensions.height;
  const windowHeight = height + height * 0.05;
  const { userType } = route.params;
  const backButtonMarginTop = height <= 604 ? -height * 0.95 : -height * 0.90;

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cnic, setCNIC] = useState("");

  const handleSignUp = () => {
    if (fullName.match(/\d/) !== null) {
      createTwoButtonAlert("Invalid Full Name", "Please enter a valid full name without numbers.");
    } else if (phoneNumber.match(/\D/) !== null) {
      createTwoButtonAlert("Invalid Phone Number", "Please enter a valid phone number (only digits allowed).");
    } else if (cnic.length !== 13) {
      createTwoButtonAlert("Invalid CNIC", "Please enter a valid 13-digit CNIC number.");
    } else if (fullName === "" || phoneNumber === "" || cnic === "") {
      createTwoButtonAlert("Incomplete Fields", "Please fill in all the required fields.");
    } else {
      // Perform sign-up logic here
      if (userType === 'provider') {
        registerProvider();
      } else {
        registerClient();
      }
    }
  };

  const registerProvider = () => {
    const reqBody = { name: fullName, phone: phoneNumber, cnic: cnic };
    fetch('http://192.168.18.122:8000/provider', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqBody),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 400) {
          throw new Error('Phone number or CNIC already exists');
        } else {
          throw new Error('Failed to register as a provider');
        }
      })
      .then(data => {
        console.log(data);
        navigation.navigate("OTP", { userType });
      })
      .catch(error => {
        console.error(error);
        createTwoButtonAlert("Registration Failed", error.message);
      });
  };

  const registerClient = () => {
    const reqBody = { name: fullName, phone: phoneNumber, cnic: cnic };
    fetch('http://192.168.18.122:8000/client', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqBody),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 400) {
          throw new Error('Phone number or CNIC already exists');
        } else {
          throw new Error('Failed to register as a client');
        }
      })
      .then(data => {
        console.log(data);
        navigation.navigate("OTP", { userType });
      })
      .catch(error => {
        console.error(error);
        createTwoButtonAlert("Registration Failed", error.message);
      });
  };

  const createTwoButtonAlert = (title, message) =>
    Alert.alert(
      title,
      message,
      [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
      ],
      { cancelable: false }
    );

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/undraw_details_8k13.png")}
        style={[
          styles.image,
          {
            width: width * 0.99,
            height: width * 0.9 * 0.8,
          },
        ]}
      />

      <View style={[styles.contentContainer, { marginTop: -height * 0.023 }]}>
        <View style={[styles.welcomeTextContainer, { marginTop: -height * 0.009 }]}>
          <Text style={[styles.welcomeText, { fontSize: height * 0.044 }]}>Create Account</Text>
          <Text style={styles.descriptionText}>Enter your details to Sign In for Dastras</Text>
        </View>
        <TextInput
          style={[
            styles.textInput,
            {
              marginLeft: width * 0.01,
              marginTop: height * 0.0167,
              height: height * 0.0625,
              paddingHorizontal: width * 0.0556,
              width: width * 0.8,
              marginVertical: height * 0.0107,
            },
          ]}
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={[
            styles.textInput,
            {
              marginLeft: width * 0.01,
              marginTop: height * 0.0167,
              height: height * 0.0625,
              paddingHorizontal: width * 0.0556,
              width: width * 0.8,
              marginVertical: height * 0.0107,
            },
          ]}
          placeholder="+92 3XXXXXXXXX"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <TextInput
          style={[
            styles.textInput,
            {
              marginLeft: width * 0.01,
              marginTop: height * 0.0167,
              height: height * 0.0625,
              paddingHorizontal: width * 0.0556,
              width: width * 0.8,
              marginVertical: height * 0.0107,
            },
          ]}
          placeholder="CNIC"
          value={cnic}
          onChangeText={setCNIC}
          keyboardType="numeric"
          maxLength={13}
        />
        <TouchableOpacity onPress={handleSignUp}>
          <View style={[styles.button, { width: width * 0.6389, marginLeft: width * 0.02 }]}>
            <Text style={[styles.buttonText, { padding: height * 0.0267 }]}>Sign Up</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(userType==='provider' ? 'PWelcome': 'CWelcome', { userType})}>
          <Text style={[styles.signupText, { paddingVertical: height * 0.0267 }]}>
            Already a Member? Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUserType("provider");
            navigation.navigate(userType === 'provider' ? 'PSignup' : 'CSignup', { userType,categoryName, service })
          }}
        >
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
    backgroundColor: 'white',
  },
  image: {
    resizeMode: "cover",
  },
  contentContainer: {
    alignItems: "center",
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
    fontSize: 15,
    width: 250,
    marginTop: 2,
  },
  textInput: {
    borderRadius: 10,
    backgroundColor: "#f6f7f9",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#5f60ba",
    marginTop: 5,
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
    marginLeft: -170,
  },
});

export default Create;
