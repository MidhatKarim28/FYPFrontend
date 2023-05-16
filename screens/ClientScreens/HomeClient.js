import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Dimensions, StyleSheet, View, Text, TextInput, TouchableOpacity,ScrollView  } from "react-native";
import Box from '../../components/Box';
import { LinearGradient } from "expo-linear-gradient";
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Card } from 'react-native-elements';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Home = ({ navigation }) => {
  const { width,height } = Dimensions.get("window");
  const person='Midhat';
  const  userType = "seeker";
  const stage = 1;
  const [categoryData, setCategoryData] = useState([]);
  
    useEffect(() => {
      console.log('Component rendered');
      const fetchCategoriesData = async () => {
        try {
          console.log('reached here')
          const response = await axios.get('http://192.168.18.122:8000/category');
          const data = response.data.map((category) => ({
            id: category.id,
            category: category.name,
            icon: category.category_icon,
          }));
          setCategoryData(data);
        } catch (error) {
          console.log('Error:', error.message);
          setCategoryData([]);
        }
      };
  
      fetchCategoriesData();
    }, []);
  
  const bookings = [
    {
      id: 1,
      name:"Tatheer",
      service: "Office Cleaning",
      price: 200,
      rating: 4,
    },
    {
      id: 2,
      name:"Midhat",
      service: "Home Cleaning",
      price: 300,
      rating:5,
    },
    {
      id: 3,
      name:"Rutba",
      service: "Carpet Cleaning",
      price: 100,
      rating:4.5,
    },
    {
      id: 4,
      name:"Maryam",
      service: 'Kitchen Cleaning',
      price: 200,
      rating:3.5
    }
  ];
    

  const CategoryBox = ({ category, icon }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Services', { userType, categoryName: category })}>
    <View style={[styles.categoryBox, { backgroundColor: '#f6f7f9', width: width * 0.4 }]}>
        <FontAwesome5 name={icon} size={width * 0.1} color="#777e86" />
        <View style={{ backgroundColor: "white", height: 1 }} />
        <Text style={{ marginTop: 10, marginLeft: 10, color: "black", fontSize: width * 0.04 }}>
          {category}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const CategoryList = ({ categoryData }) => {
    console.log(categoryData);
  
    if (!categoryData) {
      return null; // or render a loading indicator
    }
  
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginLeft: width * 0.05 }}>
          {categoryData.map(category => (
            <CategoryBox
              key={category.id}
              category={category.category}
              icon={category.icon}
            />
          ))}
        </View>
      </ScrollView>
    );
  };
  
  
  
  return (
    <View style={styles.container}>    
    <View style={styles.greyBox} />
        <TouchableOpacity onPress={() => navigation.navigate("Map",{userType, stage})}>
        <View style={{ marginTop: 60,marginLeft:25 }}>
         <EvilIcons name="location" size={24} color="white" />
         </View>
            </TouchableOpacity>
            
            <View style={{ marginTop: -20,marginLeft:60 }}>
            <Text style={{ color: "#fff", fontSize: 20 }}>
              Street 37, Block 5, ABC
            </Text>
            </View>
          <View style={{ marginTop: 10,marginLeft:40 }}>
            <Text style={{ color: "#fff", fontSize: 25, fontWeight: "bold" }}>
              Hi {person}
            </Text>
          </View>
          <TextInput
        style={{
          marginLeft: Dimensions.get('window').width * 0.07,
          marginTop: Dimensions.get('window').height * 0.10,
          borderRadius: 10,
          height: Dimensions.get('window').height * 0.06,
          paddingHorizontal: 20,
          width: Dimensions.get('window').width * 0.8,
          backgroundColor: "#f6f7f9",
          marginVertical: Dimensions.get('window').height * 0.01,
        }}
        placeholder="Search categories.." 
      />
<ScrollView>
        <Text style={{ marginTop:15, marginLeft:30,color: "black", fontSize: 20,fontWeight:'bold' }}>
              Categories
            </Text>
            <CategoryList categoryData={categoryData} /> 
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: -6,marginLeft:30,marginTop:10 }}>Popular Today</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
           
             {bookings.map((booking) => (
             <Card key={booking.id} containerStyle={styles.card}>
               <Text style={{ fontSize: 14, marginBottom: 10,fontWeight:'bold',marginLeft:20,marginTop:10 }}>{booking.name}</Text>
               <Text style={{ fontSize: 12, marginBottom: 10,marginLeft:20 }}>{booking.service}</Text>
             <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginLeft:20, }}>
               <FontAwesome name="star" color="#F5A623" size={18}  />
               <Text style={{ marginLeft: 5, fontSize: 12  }}>{booking.rating}</Text>
               <Text style={{ fontSize: 12 ,marginLeft:75}}>Rs. {booking.price}</Text>
             </View>
             
            
             
           </Card>
           
      ))}
      </ScrollView>
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  card: {
    borderRadius: 10,
    marginBottom: 110,
    padding: -10,
    height:110,
    width:200,
    marginLeft:30,
    backgroundColor: '#f6f7f9',
    opacity:0.7,
  },
  greyBox: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: '70%',
    backgroundColor: '#5f60ba',
    opacity: 0.7,
    borderRadius: 20,
  },
  
  categoryBox: {
    width: 170,
    height: 160,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginTop: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },  
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white",
  },
  
});

export default Home;