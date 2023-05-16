import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity,Dimensions } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const ProfileScreen = ({ navigation ,route}) => {
  const profilePic = require("../../assets/undraw_Profile_pic_re_iwgo.png");
  const { width, height } = Dimensions.get("window");
  const backgroundImage=require("../../assets/undraw_Receipt_re_fre3.png");

  const backButtonMarginTop = height <= 604 ?-height*0.97:-height*0.83;
  const { categoryName, service } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={backgroundImage}
        style={styles.backgroundImage}
      />
      <View style={styles.contentContainer}>
        <View style={styles.greyBox}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Request Summary</Text>
          </View>
          <View style={styles.profileContainer}>
            <Image source={profilePic} style={styles.profilePic} />
            <View style={styles.nameContainer}>
              <Text style={styles.name}>Midhat</Text>
            </View>
          </View>
          <View style={styles.separator} />
          <View style={styles.detailsContainer}>
            <View style={styles.detailItem}>
              <Text style={styles.detailTitle}>{categoryName}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailTitle}>{service}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailTitle}>Location</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailTitle}>Price per hour</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("OnWay")}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Upload Request</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={[styles.backButton,{marginTop:backButtonMarginTop}]}>
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
    backgroundColor: "#fff",
  },
  backgroundImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.45,
    resizeMode:'cover'        
  },
  contentContainer: {
    flex: 1,
  },
  greyBox: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 20,
    padding: 20,
    margin: 20,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    color: "black",
    marginTop:-40,
    fontSize: 20,
    fontWeight: "bold",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: -10,
    marginTop:-15
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 5,
  },
  nameContainer: {
    borderRadius: 10,
    height: 45,
    paddingHorizontal: 30,
    width: "80%",
    marginVertical: 10,
    backgroundColor: "white",
    justifyContent: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    backgroundColor: "white",
    height: 1,
    marginBottom: 20,
  },
  detailsContainer: {},
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  detailTitle: {
    fontWeight: "bold",
    marginLeft: 10,
  },
  button: {
    width: 260,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#5f60ba",
    marginTop: 20,
    alignSelf: "center",
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white",
    fontWeight: "bold",
  },
  backButton: {
    height: 50,
    borderRadius: 20,
    padding: 2,
    width:60,
    marginLeft:20,
  },
});
export default ProfileScreen;