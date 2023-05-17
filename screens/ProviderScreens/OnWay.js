import { View, Text,ImageBackground,Image, StyleSheet,TouchableOpacity,Dimensions,ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import React, { useState } from 'react';
const ProfileScreen =  ({ navigation,route }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isPressed1, setIsPressed1] = useState(false);
  const [isPressed2, setIsPressed2] = useState(false);
  const [isPressed3, setIsPressed3] = useState(false);
  const profilePic = require("../../assets/undraw_Profile_pic_re_iwgo.png"); 
  const backgroundImage=require("../../assets/bg2.jpg");
  const {cnic} = route.params;
  
  const handlePress1 = () => {
    setIsPressed1((prevState) => !prevState);
  
  };
  const handlePress2 = () => {
    setIsPressed2((prevState) => !prevState);
  
  };
  const handlePress3 = () => {
    setIsPressed3((prevState) => !prevState);
  
  };
  const handlePress = () => {
    setIsPressed((prevState) => !prevState);
  };

  const buttonStyle1 = {
    backgroundColor: isPressed ? "#5f60ba" : "#D9D9D9",
  };
  const iconColor1 = isPressed ? "#5f60ba" : "#D9D9D9";

  const buttonStyle2 = {
    backgroundColor: isPressed1 ? "#5f60ba" : "#D9D9D9",
  };
  const iconColor2 = isPressed1 ? "#5f60ba" : "#D9D9D9";

  const buttonStyle3 = {
    backgroundColor: isPressed2 ? "#5f60ba" : "#D9D9D9",
  };
  const iconColor3 = isPressed2 ? "#5f60ba" : "#D9D9D9";

  const buttonStyle4 = {
    backgroundColor: isPressed3 ? "#5f60ba" : "#D9D9D9",
  };
  const iconColor4 = isPressed3 ? "#5f60ba" : "#D9D9D9";

  const { height } = Dimensions.get("window");
  const windowHeight = height + height * 0.05;
  
  return (
    <View style={styles.container}> 
    <ScrollView>
       {/* <ImageBackground source={backgroundImage} style={[styles.backgroundImage, { height: windowHeight }]} > */}
       <View style={{ marginTop: 60, alignItems: "center" }}>
          <Text style={{ color: "black", fontSize: 25, fontWeight: "bold" }}>
            On Going Request
          </Text>
          </View>
      <View style={styles.profileContainer}>
        <Image source={profilePic} style={styles.profilePic} />
         <View style={{ marginLeft:-10,
          marginTop:36,
          borderRadius: 10,height:45, paddingHorizontal: 30, width: '80%',  marginVertical: 10, backgroundColor:'white' }}>
        <Text style={styles.name}>Midhat</Text>
        </View>
      </View>
      <View style={{ backgroundColor: "white", height: 1 }} />

      <View style={styles.detailsContainer}>
  <View style={styles.detailItem}>
    <FontAwesome name="building-o" size={20} color="black" />
    <Text style={styles.detailTitle}>Office Cleaning</Text>
  </View>
  
  <View style={styles.detailItem}>
   <FontAwesome name="money" size={24} color="black" />
    <Text style={styles.detailTitle}>Price</Text>  
  </View>
    
  </View>


<View style={styles.detailsContainer}>
 <View style={styles.detailItem}>
 <FontAwesome name="calendar" size={24} color="black" />
    <Text style={styles.detailTitle}>Date</Text>  
  </View>


  <View style={styles.detailItem}>
  <TouchableOpacity  onPress={() => navigation.navigate("Chat")}>
    <Entypo name="chat" size={24} color="black" />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
    <Text style={styles.detailTitle}>Chat</Text>  
    </TouchableOpacity>
  </View>
 </View>

<View style={styles.detailsContainer}>
 <View style={styles.detailItem}>
 <AntDesign name="clockcircle" size={24} color="black" /> 
    <View style={{  borderRadius: 10, marginLeft: 10, paddingHorizontal: 10, marginRight:10 }}>
            <Text style={{ color: "black", fontSize: 16 }}>9:00 A.M</Text></View>
             <Text>-</Text> 
               <View style={{  borderRadius: 10, marginLeft: 10 ,paddingHorizontal: 10 }}>
            <Text style={{ color: "black", fontSize: 16 }}>10:00 A.M</Text></View>

            
  </View>
</View>

<View style={{ marginTop: 50,marginLeft:30}}>
          <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
            Service Status
          </Text>
          </View>

        <TouchableOpacity onPress={handlePress}>
        <View style={{ 
  height: 50,
  borderRadius: 10,
  padding: 2,
  width:60,
  marginLeft:30,
  marginTop:30,
  flexDirection: 'row', 
}}>
  <AntDesign name="checkcircleo" size={33} color={iconColor1} />
  <View style={[styles.button,buttonStyle1]}>
    <Text style={{ color: "black", fontSize: 16,fontWeight:'bold' }}>On the way</Text>
  </View>
</View>
</TouchableOpacity>
 <TouchableOpacity onPress={handlePress1}>
        <View style={{ 
  height: 50,
  borderRadius: 10,
  padding: 2,
  width:60,
  marginLeft:30,
  marginTop:30,
  flexDirection: 'row', 
}}>
  <AntDesign name="checkcircleo" size={33} color={iconColor2} />
  <View style={[styles.button,buttonStyle2]}>
    <Text style={{ color: "black", fontSize: 16, fontWeight:'bold' }}>Started</Text>
  </View>
</View>
</TouchableOpacity>
 <TouchableOpacity onPress={handlePress2}>
        <View style={{ 
  height: 50,
  borderRadius: 10,
  padding: 2,
  width:60,
  marginLeft:30,
  marginTop:30,
  flexDirection: 'row', 
}}>
  <AntDesign name="checkcircleo" size={33} color={iconColor3} />
  <View style={[styles.button,buttonStyle3]}>
    <Text style={{ color: "black", fontSize: 16, fontWeight:'bold' }}>Completed</Text>
  </View>
</View>
</TouchableOpacity>
 <TouchableOpacity onPress={handlePress3}>
        <View style={{ 
  height: 50,
  borderRadius: 10,
  padding: 2,
  width:60,
  marginLeft:30,
  marginTop:30,
  flexDirection: 'row', 
}}>
  <AntDesign name="checkcircleo" size={33} color={iconColor4} />
  <View style={[styles.button,buttonStyle4]}>
    <Text style={{ color: "black", fontSize: 16, fontWeight:'bold' }}>Paid</Text>
  </View>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate("HomeTabs", { cnic })}>

      <View
      style={{ 
        height: 50,
        borderRadius: 10,
        padding: 2,
        width:60,
        marginLeft:20,
        marginTop:-730,
      }}
    >       
      <AntDesign name="home" size={35} color="#5f60ba" />
      </View>
      </TouchableOpacity>
     
      {/* < </ImageBackground> */}
      </ScrollView>
      </View>
 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  button:{ 
    borderRadius: 10, 
    marginLeft: 10, 
     opacity:0.6, 
    paddingHorizontal: 29,
    height:40,
    width:150,
    justifyContent: 'center', 
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
    marginLeft: 10,
    marginTop:30
  },
name: {
  fontSize: 20,
  fontWeight: "bold",
  marginTop: 6
},
   detailsContainer: {
    marginTop: 25,
    marginLeft:20,
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
    
  greyBox: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: '52%',
    backgroundColor: '#f6f7f9',
    opacity: 0.7,
    borderRadius:20
  },
 
});

export default ProfileScreen;