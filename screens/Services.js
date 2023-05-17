
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Dimensions, StyleSheet, View, Text, TextInput, TouchableOpacity,ScrollView,Image } from "react-native";
import React, { useEffect, useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


// Define the fetchCategories function

const Home = ({ navigation, route }) => {
  const { height } = Dimensions.get("window");
  const windowHeight = height + height * 0.05;
  const { categoryName, userType, categoryId } = route.params;
  console.log(route.params); // Log the route params object
  
  const [serviceData, setServiceData] = useState([]);
  
  console.log(categoryId);
  useEffect(() => {
    const fetchServicesData = async () => {
      try {
        console.log(categoryId);

        if (categoryId) {
          const url = `http://192.168.18.122:8000/services/${categoryId}`;
          const response = await axios.get(url);
          console.log(response.data);
          const data = response.data.map((service) => ({
            id: service.id,
            service: service.name,
            catID: service.category_id,
            icon: service.service_icon,
          }));
          setServiceData(data);
          console.log(serviceData);
        } else {
          setServiceData([]);
        }
      } catch (error) {
        console.log('Error:', error.message);
        setServiceData([]);
      }
    };

    fetchServicesData();
  }, [categoryId]);
 
 
  const CategoryBox = ({ service, icon, categoryId }) => (
    <TouchableOpacity onPress={() => {AsyncStorage.setItem("service",service);
     navigation.navigate(userType === 'provider' ? 'Upload' : 'ServiceDetails', { categoryName, service })}}>
      <View style={[styles.categoryBox, { backgroundColor: '#f6f7f9' }]}>
        <FontAwesome5 name={icon} size={30} color="#777e86" />
        <View style={{ backgroundColor: "white", height: 1 }} />
        <Text style={{ marginTop: 10, marginLeft: 10, color: "black", fontSize: 15 }}>
          {service}
        </Text>
      </View>
    </TouchableOpacity>
  );
  
  const CategoryList = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginLeft: 20 }}>
        {serviceData.map(service => (
          <CategoryBox
            key={service.id}
            service={service.service}
            categoryId={service.catID} // Pass the categoryId as a prop
            icon={service.icon}
          />
        ))}
      </View>
    </ScrollView>
  );
  
  


  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/undraw_Search_engines_ij7q.png")}
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height * 0.5,
          resizeMode:'cover'
        }}
      />
<TextInput
        style={{
          marginLeft: Dimensions.get('window').width * 0.07,
          marginTop: Dimensions.get('window').height * 0.01,
          borderRadius: 10,
          height: Dimensions.get('window').height * 0.06,
          paddingHorizontal: 20,
          width: Dimensions.get('window').width * 0.8,
          backgroundColor: "#f6f7f9",
          marginVertical: Dimensions.get('window').height * 0.01,
        }}
        placeholder="Search categories and services" 
      />


      <CategoryList  />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  
  greyBox: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: '75%',
    backgroundColor: '#5f60ba',
    opacity: 0.7,
    borderRadius: 20,
  },
  categoryBox: {
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').height * 0.2,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: Dimensions.get('window').width * 0.03,
    marginTop: Dimensions.get('window').height * 0.03,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  }, 

});

export default Home;
