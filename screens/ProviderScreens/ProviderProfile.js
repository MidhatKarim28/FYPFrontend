import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ProviderProfile = ({ navigation, route }) => {
  const { phoneNumber, cnic } = route.params;
  const [userDetails, setUserDetails] = useState(null);
  const profileImageUrl = require("../../assets/undraw_Profile_pic_re_iwgo.png");

  useEffect(() => {
    // Fetch the CNIC based on the phone number
    fetchUserDetails();
  }, [cnic]);

//   const fetchCNICByPhoneNumber = async () => {
//     try {
//       const url = `http://192.168.18.122:8000/provider/check-cnic/${phoneNumber}`;
//       const response = await fetch(url);
//       console.log(phoneNumber);
//       if (!response.ok) {
//         throw new Error('Failed to fetch CNIC');
//       }
//       const data = await response.json();
//       const cnic = data.cnic;
//       // Fetch user details based on the retrieved CNIC
//       fetchUserDetails(cnic);
//     } catch (error) {
//       console.error('Error fetching CNIC:', error);
//     }
//   };

  const fetchUserDetails = async (cnic) => {
    try {
      if (cnic) {
        const url = `http://192.168.18.122:8000/provider/${cnic}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch user details');
        }
        const data = await response.json();
        if (!data) {
          throw new Error('Empty response data');
        }
        setUserDetails(data);
      } else {
        setUserDetails(null);
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };
  
  
  
  const { name, phone, warning_count, status } = userDetails || {};

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 20, alignItems: 'center' }}>
        <Text style={{ color: "black", fontSize: 30, fontWeight: "bold" }}>Profile</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerInfo}>
            <Text style={styles.name}>Name:</Text>
            <Text style={{ fontSize: 15, marginBottom: 20 }}>{name}</Text>
            <Text style={styles.phone}>Phone:</Text>
            <Text style={{ fontSize: 15, marginBottom: 20 }}>{phone}</Text>
            <Text style={styles.warningCount}>Warning Count:</Text>
            <Text style={{ fontSize: 15, marginBottom: 20 }}>{warning_count}</Text>
            <Text style={styles.status}>Status:</Text>
            <Text style={{ fontSize: 15, marginBottom: 20 }}>{status}</Text>
          </View>
          <View style={styles.profilePicContainer}>
            <Image style={styles.profileImage} source={profileImageUrl} />
          </View>
        </View>
        <View style={{ backgroundColor: "black", height: 1 }} />
        <TouchableOpacity onPress={() => navigation.navigate("Bookings")}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 20, marginLeft: 20 }}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Terms")}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 20, marginTop: 20, marginLeft: 20 }}>Terms And Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Privacy")}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10, marginLeft: 20 }}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Mode")}>
          <View style={{ marginTop: 40, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column' }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Switch to Seeker Mode</Text>
            <AntDesign name="switcher" size={24} color="black" style={{ marginTop: 10 }} />
          </View>
        </TouchableOpacity>
        <View style={{ marginBottom: 20 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  headerInfo: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  phone: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  warningCount: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  status: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  profilePicContainer: {
    marginLeft: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default ProviderProfile;
