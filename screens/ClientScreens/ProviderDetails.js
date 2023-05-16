import { View, Text, Image, StyleSheet,TouchableOpacity,ScrollView,Dimensions } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Card } from 'react-native-elements';
import React, { useState } from 'react';


const ProfileScreen =  ({ navigation }) => {
  const profilePic = require("../../assets/undraw_Profile_pic_re_iwgo.png"); 
 const     id= 1;
 const    service= "Office Cleaning"
 const     price= 200;
 const     date= "2023-05-03";
 const { width,height } = Dimensions.get("window");
 const distance = height <= 604 ? 90:140;
 const     rating=4;
 const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Midhat Karim',
      profilePic: require("../../assets/undraw_Profile_pic_re_iwgo.png"),
      review: 'Great service! Highly recommended.',
      date: 'May 1, 2023',
      
    },
    {
      id: 2,
      name: 'Midhat Karim',
      profilePic:  require("../../assets/undraw_Profile_pic_re_iwgo.png") ,
      review: 'The service was amazing! Will definitely use again.',
      date: 'May 2, 2023',
    },
    {
      id: 3,
      name: 'Midhat Karim',
      profilePic:  require("../../assets/undraw_Profile_pic_re_iwgo.png") ,
      review: 'Very professional and efficient. Will use again.',
      date: 'May 3, 2023',
    },
    {
      id: 4,
      name: 'Midhat Karim',
      profilePic: require("../../assets/undraw_Profile_pic_re_iwgo.png"),
      review: 'Great service! Highly recommended.',
      date: 'May 1, 2023',
      
    },
  ]);

  return (
    <View style={styles.container}>
      <Card containerStyle={styles.card}>
        <View style={styles.profileContainer}>
          <Image source={profilePic} style={styles.profilePic} />
          <View
            style={{
              marginLeft: -20,
              marginTop: 36,
              borderRadius: 10,
              height: 45,
              paddingHorizontal: 30,
              width: "80%",
              marginVertical: 10,
              backgroundColor: "white",
            }}
          >
            <Text style={styles.name}>Midhat</Text>
          </View>
        </View>
        <View style={{marginLeft:60,marginTop:-10}}>
        <Text>{service}</Text>
        <Text>Street, Area</Text>
        <View style={{flexDirection:'row'}}>
        <FontAwesome name="star" color="#F5A623" size={18}  />
        <Text style={{marginLeft:5}}>{rating}</Text></View></View>
        <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
         <TouchableOpacity onPress={() => {
            navigation.navigate("Select");
          }}>
        <View style={{width: 90, borderRadius: 10,backgroundColor: "#5f60ba",padding:10,marginLeft:distance}}>
          <Text style={styles.buttonText}>Book Me</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={{width: 90, borderRadius: 10,backgroundColor: "#5f60ba",padding:10}}>
          <Text style={styles.buttonText}>Call Me</Text>
        </View>
      </TouchableOpacity>
      </View>
      </Card>
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
        <Text style={{ ...styles.detailTitle, fontSize: 20, fontWeight:'bold' }}>Reviews</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      {reviews.map((review) => (
        <View key={review.id} style={styles.reviewContainer}>
          <Image source={review.profilePic} style={styles.profilePic} />
          <View style={styles.reviewContent}>
            <Text style={styles.name}>{review.name}</Text>
            <Text style={styles.service}>Home Cleaning</Text>
            <Text style={styles.date}>{review.date}</Text>
            <Text style={styles.review}>{review.review}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
      <TouchableOpacity onPress={()=> navigation.goBack()}>

      <View
      style={{ 
        height: 50,
        borderRadius: 10,
        padding: 2,
        width:60,
        marginLeft:20,
        marginTop:480,
      }}
    >        
      <AntDesign name="arrowleft" size={40} color="black" />
      </View>
      </TouchableOpacity>
      </View>
        )};
        const styles = StyleSheet.create({
          container: {
            flex: 1,
            backgroundColor: "#fff",
            paddingHorizontal: 20,
            paddingTop: 20,
            marginBottom:-500
          },
          profileContainer: {
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
            marginTop:-30,
          },
          profilePic: {
            width: 60,
            height: 60,
            borderRadius: 30,
            marginRight: 5,
            marginTop:30
          },
        name: {
          fontSize: 20,
          fontWeight: "bold",
          marginTop: 6
        },
           detailsContainer: {
            marginTop: 25,
            flexDirection: "row",
          },
          detailItem: {
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
            flex: 1,
          },
          detailTitle: {
            marginLeft: 10,
            flex: 1,
          },
          card: {
            borderRadius: 10,
            margin: 10,
            padding: 10,
            backgroundColor: '#f6f7f9',
            opacity:0.9,
            marginTop:40
          },
        
            reviewContainer: {
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 10,
              paddingHorizontal: 20,
              backgroundColor: "#f6f7f9",
              marginVertical: 5,
              borderRadius: 10,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.23,
              shadowRadius: 2.62,
              elevation: 4,
            },
            reviewContent: {
              marginLeft: 10,
              flex: 1,
            },
            service: {
              fontSize: 14,
              color: "#777",
              marginVertical: 2,
            },
            date: {
              fontSize: 14,
              color: "#777",
              marginVertical: 2,
            },
            buttonText: {
              textAlign: "center",
              color: "white",
              fontWeight:'bold'
            },
            review: {
              fontSize: 16,
              color: "#555",
              marginVertical: 5,
            },
          });
            
      
      
      export default ProfileScreen;
      