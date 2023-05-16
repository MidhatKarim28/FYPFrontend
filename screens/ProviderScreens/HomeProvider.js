import { Feather } from '@expo/vector-icons';
import { Dimensions, StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { FontAwesome5 } from '@expo/vector-icons';


  const HomeProvider = ({ navigation,route }) => {
    const { height, width } = Dimensions.get("window");
    const windowHeight = height + height * 0.05;
    const person = 'Midhat';
    const userType = "provider";
    //console.log(userType);
  
    const [categoryData, setCategoryData] = useState([]);
  
    useEffect(() => {
      console.log('Component rendered');
      const fetchCategoriesData = async () => {
        try {
          console.log('reached here')
          const response = await axios.get('http://192.168.18.122:8000/category');
          console.log(response.data);
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
    console.log(categoryData); // Add this line to log categoryData
  
    return (
      <ScrollView Container={{ flexGrow: 1 }}>
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
      <View style={{ marginTop: height * 0.12, marginLeft: width * 0.3 }} />
      <Text style={{ color: "#fff", fontSize: 20, marginTop: -height * 0.03, marginLeft: width * 0.08, marginVertical: 5 }}>
        Hey {person},
      </Text>
      <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold", marginTop: -height * 0.01, marginLeft: width * 0.08 }}>
        Post your service request today!
      </Text>
      <Text style={{ marginTop: height * 0.12, marginLeft: width * 0.05, color: "black", fontSize: 20, fontWeight: "bold" }}>
        Categories
      </Text>
      <Text style={{ marginTop: 5, marginLeft: width * 0.05, color: "black", fontSize: 15, marginBottom: 20 }}>
        Select a category for your service request
      </Text>
      <CategoryList categoryData={categoryData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
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
});

export default HomeProvider;