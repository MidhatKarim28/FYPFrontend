import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ProfileScreen = ({ navigation, route }) => {
  const userType = route.params?.userType;
  const cnic = route.params?.cnic;
  const [userDetails, setUserDetails] = useState(null);
  const profileImageUrl = require("../../assets/undraw_Profile_pic_re_iwgo.png");

  
  

  const [categoryData, setCategoryData] = useState([]);
  
    useEffect(() => {
      console.log('Component rendered');
      const fetchCategoriesData = async () => {
        try {
          console.log('reached here');
          const response = await axios.get('http://192.168.18.122:8000/provider');
          console.log(response.data);
          const data = response.data.map((category) => ({
            id: category.id,
            category: category.name,
            icon: category.category_icon,
          }));
          data.forEach((category) => {
            console.log(category.id); // Log the category ID here
          });
          setCategoryData(data);
        } catch (error) {
          console.log('Error:', error.message);
          setCategoryData([]);
        }
      };
  
      fetchCategoriesData();
    }, []);

  const { name, mobile, email } = userDetails;

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
            <Text style={styles.mobile}>Mobile:</Text>
            <Text style={{ fontSize: 15, marginBottom: 20 }}>{mobile}</Text>
            <Text style={styles.email}>Email</Text>
            <Text style={{ fontSize: 15, marginBottom: 20 }}>{email}</Text>
            <Text style={styles.cnic}>CNIC</Text>
            <Text style={{ fontSize: 15, marginBottom: 20 }}>{cnic}</Text>
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
            <AntDesign name="poweroff" size={24} color="black" marginBottom={10} />
            <Text style={styles.name}>Logout</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 20
  },
  profilePicContainer: {
    width: 150,
    height: 150,
    borderRadius: 50,
    overflow: 'hidden',
    marginLeft: 40,
    marginTop: 30
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  headerInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 10
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  mobile: {
    fontSize: 16,
    marginBottom: 2,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    marginBottom: 2,
    fontWeight: 'bold',
  },
  cnic: {
    fontSize: 16,
    marginBottom: 2,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
