import React from "react";
import { View, Text, Image, StyleSheet,TouchableOpacity,ScrollView,TextInput } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Card } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

const ProfileScreen =  ({ navigation }) => {
  const profilePic = require("../../assets/undraw_Profile_pic_re_iwgo.png");   
  const userType="seeker";
  const bookings = [
    {
      id: 1,
      name:"Tatheer",
      service: "Office Cleaning",
      price: 200,
      rating: 4,
      distance:2,
    },
    {
      id: 2,
      name:"Midhat",
      service: "Home Cleaning",
      price: 300,
      rating:5,
      distance:3
    },
    {
      id: 3,
      name:"Rutba",
      service: "Carpet Cleaning",
      price: 100,
      rating:4.5,
      distance:1
    },
    {
      id: 4,
      name:"Maryam",
      service: 'Kitchen Cleaning',
      price: 200,
      rating:3.5,
      distance:1.5
    }
  ];
  
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <ScrollView> 
       <View style={styles.greyBox}> 
       </View>
       

       <TouchableOpacity onPress={() => navigation.navigate("Map",{userType})}>
    <View style={styles.locationContainer}>   
      <Ionicons name="locate-outline" size={24} color="black" />
      <Text style={styles.locationText}>Street, Area</Text>
    </View>
  </TouchableOpacity>

      {/* <View style={{ backgroundColor: "white", height: 1 }} /> */}

      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Text style={styles.detailTitle}>Home Cleaning</Text>
        </View>
      </View>
       

      <Text style={{marginLeft:30,marginTop:10,fontWeight:'bold'}}>Providers Nearby</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {bookings.map((booking) => (
        <TouchableOpacity onPress={() => {
            navigation.navigate("ProviderDetails");
          }}>
             <Card containerStyle={styles.card}>
               <Text style={{ fontSize: 14, marginBottom: 10,fontWeight:'bold',marginLeft:20,marginTop:10 }}>{booking.name}</Text>
               <Text style={{ fontSize: 12, marginBottom: 10,marginLeft:20 }}>{booking.service}</Text>
             <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginLeft:20, }}>
               {/* <FontAwesome name="star" color="#F5A623" size={18}  /> */}
               <Text style={{ marginLeft: 5, fontSize: 12  }}>{booking.distance} km</Text>
               <Text style={{ fontSize: 12 ,marginLeft:65}}>Rs. {booking.price}/hr</Text>
             </View>
           </Card>
           </TouchableOpacity>
           
      ))}
      </ScrollView>
      <Text style={{marginLeft:30,marginTop:-300,fontWeight:'bold'}}>Top Recommended</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {bookings.map((booking) => (
        <TouchableOpacity onPress={() => {
            navigation.navigate("ProviderDetails");
          }}>
             <Card  containerStyle={{borderRadius: 10,marginBottom:150,
                padding: -10,
                height:110,
                width:200,
                marginLeft:30,
                backgroundColor: '#f6f7f9',
                opacity:0.7,}}>
              <Text style={{ fontSize: 14, marginBottom: 10,fontWeight:'bold',marginLeft:20,marginTop:10 }}>{booking.name}</Text>
               <Text style={{ fontSize: 12, marginBottom: 10,marginLeft:20 }}>{booking.service}</Text>
             <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginLeft:20, }}>
               <FontAwesome name="star" color="#F5A623" size={18}  />
               <Text style={{ marginLeft: 5, fontSize: 12  }}>{booking.rating}</Text>
               <Text style={{ fontSize: 12 ,marginLeft:70}}>Rs. {booking.price}/hr</Text>
             </View>
           </Card>
           </TouchableOpacity>
           
      ))}
      </ScrollView>
      <Text style={{marginLeft:30,marginTop:-150,fontWeight:'bold'}}>All Providers</Text>
      {/* <View style={styles.container2}> */}
  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    {bookings.map((booking) => (
      <TouchableOpacity
        key={booking.id}
        onPress={() => {
          navigation.navigate("ProviderDetails");
        }}
      >
        <Card
          containerStyle={styles.cardContainer}>
           <Text style={{ fontSize: 14, marginBottom: 10,fontWeight:'bold',marginLeft:20,marginTop:10 }}>{booking.name}</Text>
               <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginLeft:20, }}>
               <Text style={{ fontSize: 12}}>{booking.service}</Text>
               <Text style={{ marginLeft: 15, fontSize: 12  }}>{booking.distance} km</Text>
               </View>
             <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginLeft:20, }}>
               <FontAwesome name="star" color="#F5A623" size={18}  />
               <Text style={{ fontSize: 12,marginLeft:5  }}>{booking.rating}</Text>
               <Text style={{ fontSize: 12 ,marginLeft:70}}>Rs. {booking.price}/hr</Text>
             </View>
        </Card>
      </TouchableOpacity>
    ))}
  </ScrollView>
{/* </View> */}

      

      <TouchableOpacity onPress={handleGoBack}>
      <View
      style={{ 
        height: 50,
        borderRadius: 10,
        padding: 2,
        width:60,
        marginLeft:3,
        marginTop:-815,
      }}
    >        
      <AntDesign name="arrowleft" size={40} color="black" />
      </View>
      </TouchableOpacity>
</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  
  card: {
    borderRadius: 10,
    marginBottom: 280,
    padding: -10,
    height:110,
    width:200,
    marginLeft:30,
    backgroundColor: '#f6f7f9',
    opacity:0.7,
  },
  locationContainer: {
    marginTop: 40,
    marginLeft: 70,
    flexDirection: 'row',
  },
  locationText: {
    color: 'black',
    fontSize: 15,
    marginLeft: 10,
  },
  // container2: {
  //   flex: 1,
  //   backgroundColor: '#f6f7f9',
  //   borderRadius: 20,
  //   marginTop: '50%',
  //   marginBottom:'10%',
  //   paddingHorizontal: 10,
  //   paddingVertical:-20,
  // },
  cardContainer: {
    borderRadius: 10,
    marginBottom: -70,
    padding: -10,
    height: 110,
    width: 200,
    marginLeft: 30,
    backgroundColor: '#f6f7f9',
    opacity: 0.7,
  },
name: {
  fontSize: 20,
  fontWeight: "bold",
  marginTop: 6
},
  detailsContainer: {
    marginTop: 25,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  detailTitle: {
    fontWeight: "bold",
    marginLeft: 30,
    fontSize:20
  },
    
  greyBox: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: '50%',
    backgroundColor: '#FFF',
    opacity: 0.5,
    borderRadius:20
  },

});

export default ProfileScreen;