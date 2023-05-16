import { View, Dimensions, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import Box from '../components/Box';
import { AntDesign } from '@expo/vector-icons';

const OTP = ({ navigation, route }) => {
  const { height, width } = Dimensions.get("window");
  const windowHeight = height + height * 0.05;
  const { userType } = route.params;
  const backButtonMarginTop = height <= 604 ?-height*0.78:-height*0.75;

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
          <Text style={{ color: "black", fontSize:15, width: 250, textAlign: "center", marginTop: height * 0.02 }}>
            Please Enter the 6-digit OTP sent to your mobile number
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: height * 0.02, marginLeft: -5, marginRight:5}}>
          <Box width={"50"} />
          <Box width={"50"} />
          <Box width={"50"} />
          <Box width={"50"} />
          <Box width={"50"} />
          <Box width={"50"} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate(userType === 'provider' ? 'HomeTabs' : 'ClientTabs')}>
          <View style={[styles.button,{ width: width * 0.7222,
   marginTop: height * 0.04,}]}>
            <Text style={[styles.buttonText,{  padding: height * 0.0267,}]}>Verify</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register', { userType })}>
          <Text style={[styles.signupText,{paddingVertical: height * 0.0267,}]}>Don't Have An Account? Sign Up</Text>
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
  button: {
   
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#5f60ba",
    marginLeft:55
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: 'bold',
  },
  signupText: {
    textAlign: "center",
    marginTop:-10,
    color: 'black',
    fontWeight: 'bold',
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
