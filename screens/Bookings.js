import { View, Text, Image, StyleSheet,TouchableOpacity,ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Card } from 'react-native-elements';
import React, { useState } from 'react';

const ProfileScreen =  ({ navigation }) => {
  const profilePic = require("../assets/undraw_Profile_pic_re_iwgo.png"); 

  const bookings = [
    {
      id: 1,
      service: "Office Cleaning",
      price: 200,
      date: "2023-05-03",
      completed: false,
    },
    {
      id: 2,
      service: "Home Cleaning",
      price: 300,
      date: "2023-05-05",
      completed: false,
    },
    {
      id: 3,
      service: "Carpet Cleaning",
      price: 100,
      date: "2023-05-06",
      completed: true,
    },
    {
      id: 4,
      service: 'Kitchen Cleaning',
      price: 200,
      date: '2023-05-09',
      completed:false,

    },
    {
      id: 5,
      service: 'Window Cleaning',
      price: 100,
      date: '2023-05-10',
      completed:true,

    },
  ];

  const [activeSection, setActiveSection] = useState("All");

 const getFilteredBookings = () => {
  if (activeSection === "All") {
    return bookings;
  } else if (activeSection === "Completed") {
    return bookings.filter((booking) => booking.completed);
  } else if (activeSection === "In Progress") {
    return bookings.filter((booking) => !booking.completed);
  }
};



  const renderBookingCards = () => {
    const filteredBookings = getFilteredBookings();
    return filteredBookings.map((booking) => (
      <Card key={booking.id} containerStyle={styles.card}>
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
        <View style={{ backgroundColor: "white", height: 1 }} />

        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <FontAwesome name="building-o" size={20} color="black" />
            <Text style={styles.detailTitle}>{booking.service}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Rs {booking.price}</Text>
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <FontAwesome name="calendar" size={24} color="black" />
            <Text style={styles.detailTitle}>{booking.date}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>
              {booking.completed ? "Completed" : "In Progress"}
            </Text>
          </View>
        </View>
      </Card>
    ));
  };

return (
  <View style={styles.container}>
    <View style={{ marginTop: 40, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
  <Text style={{ color: "black", fontSize: 25, fontWeight: "bold" }}>My Bookings</Text>
  <TouchableOpacity onPress={() => navigation.navigate("Mode")}>
    <View style={styles.button}>
      <Text style={styles.buttonText}>Logout</Text>
    </View>
  </TouchableOpacity>
</View>


    <View style={styles.sectionTabs}>
      <TouchableOpacity
        style={[
          styles.sectionTab,
          activeSection === "All" && styles.activeSectionTab,
        ]}
        onPress={() => setActiveSection("All")}
      >
        <Text
          style={[
            styles.sectionTabText,
            activeSection === "All" && styles.activeSectionTabText,
          ]}
        >
          All
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.sectionTab,
          activeSection === "Completed" && styles.activeSectionTab,
        ]}
        onPress={() => setActiveSection("Completed")}
      >
        <Text
          style={[
            styles.sectionTabText,
            activeSection === "Completed" && styles.activeSectionTabText,
          ]}
        >
          Completed
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.sectionTab,
          activeSection === "In Progress" && styles.activeSectionTab,
        ]}
        onPress={() => setActiveSection("In Progress")}
      >
        <Text
          style={[
            styles.sectionTabText,
            activeSection === "In Progress" && styles.activeSectionTabText,
          ]}
        >
          In Progress
        </Text>
      </TouchableOpacity>
    </View>

   

    <ScrollView contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 20 }}>
      {renderBookingCards()}
    </ScrollView>


  </View>
)};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
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
    fontWeight: "bold",
    marginLeft: 10,
    flex: 1,
  },
  card: {
    borderRadius: 10,
    margin: 10,
    padding: 10,
    backgroundColor: '#f6f7f9',
    opacity:0.7
  },

  sectionTabs: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
  sectionTab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeSectionTab: {
    borderBottomColor: "#007aff",
  },
  sectionTabText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#666",
  },
  activeSectionTabText: {
    color: "#007aff",
  },
  button: {
  width: 100,
  height: 40,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 10,
  backgroundColor: "#5f60ba",
},

  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight:'bold'
  },
});



export default ProfileScreen;


