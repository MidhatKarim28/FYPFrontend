import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import {StyleSheet,TouchableOpacity,Dimensions,View} from 'react-native';
import HomeProvider from "./screens/ProviderScreens/HomeProvider";
import Start from './screens/Start';
import Mode from "./screens/Mode";
import PSignup from "./screens/ProviderScreens/PSignup";
import CSignup from "./screens/ClientScreens/CSignup";
import PWelcome from "./screens/ProviderScreens/PWelcome";
import CWelcome from "./screens/ClientScreens/CWelcome";
import OTP from "./screens/Otp";
import Register from "./screens/Create";
import Services from "./screens/Services";
import { useState } from "react";
import Upload from "./screens/ProviderScreens/Upload";
import Summary from "./screens/ProviderScreens/Summary";
import Chat from "./screens/Chat";
import OnWay from "./screens/ProviderScreens/OnWay";
import Bookings from './screens/Bookings';
import P_Maps from "./screens/ProviderScreens/P_Map";
import HomeClient from "./screens/ClientScreens/HomeClient";
import Profile from "./screens/ClientScreens/Profile";
import ProviderProfile from "./screens/ProviderScreens/ProviderProfile";
import Terms from "./screens/ClientScreens/Terms";
import Privacy from "./screens/ClientScreens/Privacy";
import Map from './screens/Map';
import Select from './screens/ClientScreens/Select';
import BookingDetails from './screens/ClientScreens/BookingDetails';
import ServiceDetails from './screens/ClientScreens/ServiceDetails';
import ProviderDetails from './screens/ClientScreens/ProviderDetails';
import ProfileScreen from "./screens/Bookings";
import ProviderProfileScreen from "./screens/ProviderScreens/ProviderProfile";
import { useRoute } from '@react-navigation/native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function HomeTabs() {
  const route = useRoute();
  const { cnic, phoneNumber } = route.params;
  
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: '#f6f7f9' },
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#fff",
      }}
    >
      <Tab.Screen
        name="Home"
        component={P_Maps}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Feather name="home" size={24} color={focused ? "#5f60ba" : "#8d8e93"} />
          ),

        }}
      />
    
      
        <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: "Chat",
          tabBarIcon: ({ focused, size }) => (
            <Ionicons name="notifications" size={24} color={focused ? "#5f60ba" : "#8d8e93"} />
          ),

        }}
      />
<Tab.Screen
  name="Upload"
  component={HomeProvider}
  options={({ focused }) => ({
    tabBarLabel: "Upload",
    tabBarButton: ({ onPress, accessibilityState }) => (
      <TouchableOpacity
        onPress={onPress}
        style={{
          position: 'absolute',
          top: -25,
          justifyContent: 'center',
          alignItems: 'center',
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: "#5f60ba",
          elevation: 5,
          left: Dimensions.get("window").width * 0.43,
        }}
      >
        <Ionicons name={focused ? "md-add" : "md-add-outline"} size={24} color="#fff" />
      </TouchableOpacity>
    ),
    tabBarStyle: {
      // backgroundColor: '#f6f7f9',
    },
  })}
/>

      <Tab.Screen
        name="OnWay"
        component={OnWay}
        options={{
          tabBarLabel: "Request",
          tabBarIcon: ({ focused, size }) => (
            <Entypo name="calendar" size={24} color={focused ? "#5f60ba" : "#8d8e93"} />
          ),

        }}
      />
    <Stack.Screen
  name="ProviderProfile"
  component={ProviderProfile}
  initialParams={{ userType: 'provider', phoneNumber,cnic }} // Pass the userType and phoneNumber parameters here
  options={({ route }) => ({
    tabBarLabel: "Request",
    tabBarIcon: ({ focused, size }) => (
      <Ionicons name="person" size={24} color={focused ? "#5f60ba" : "#8d8e93"} />
    ),
    // Pass the cnic parameter as a function that retrieves it from the route params
    headerTitle: () => <Text>{route.params?.cnic}</Text>,
  })}
/>


   </Tab.Navigator>
  );
}


function ClientTabs() {
  const route = useRoute();
  const { cnic, phoneNumber } = route.params;
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: '#f6f7f9' },
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#fff",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeClient}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Feather name="home" size={24} color={focused ? "#5f60ba" : "#8d8e93"} />
          ),

        }}
      />

        <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: "Chat",
          tabBarIcon: ({ focused, size }) => (
            <Ionicons name="notifications" size={24} color={focused ? "#5f60ba" : "#8d8e93"} />
          ),

        }}
      />





      <Tab.Screen
        name="BookingDetails"
        component={BookingDetails}
        options={{
          tabBarLabel: "Request",
          tabBarIcon: ({ focused, size }) => (
            <Entypo name="calendar" size={24} color={focused ? "#5f60ba" : "#8d8e93"} />
          ),

        }}
      />
      <Stack.Screen
  name="Profile"
  component={Profile}
  initialParams={{ userType: 'seeker', phoneNumber,cnic }} // Pass the userType and phoneNumber parameters here
  options={({ route }) => ({
    tabBarLabel: "Request",
    tabBarIcon: ({ focused, size }) => (
      <Ionicons name="person" size={24} color={focused ? "#5f60ba" : "#8d8e93"} />
    ),
    // Pass the cnic parameter as a function that retrieves it from the route params
    headerTitle: () => <Text>{route.params?.cnic}</Text>,
  })}
/>

   </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
        <Stack.Screen name="ClientTabs" component={ClientTabs}/>
        <Stack.Screen name="Mode" component={Mode} />
        <Stack.Screen name='PSignup' component={PSignup}/>
        <Stack.Screen name='CSignup' component={CSignup}/>
        <Stack.Screen name='OTP' component={OTP}/>
        <Stack.Screen name="PWelcome" component={PWelcome} />
        <Stack.Screen name="CWelcome" component={CWelcome} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="HomeProvider" component={HomeProvider} />
        <Stack.Screen name="HomeClient" component={HomeClient}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Terms" component={Terms}/>
        <Stack.Screen name="Select" component={Select}/>
        <Stack.Screen name="ServiceDetails" component={ServiceDetails}/>
        <Stack.Screen name="ProviderDetails" component={ProviderDetails}/>
        <Stack.Screen name="Privacy" component={Privacy}/>
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="BookingDetails" component={BookingDetails}/>
        <Stack.Screen name='Upload' component={Upload} />
        <Stack.Screen name='Summary' component={Summary} />
        <Stack.Screen name='Chat' component={Chat} />
        <Stack.Screen name='OnWay' component={OnWay} />
        <Stack.Screen name='Bookings' component={Bookings}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});