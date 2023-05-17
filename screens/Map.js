import * as React from "react";
import { Dimensions, StyleSheet, Text, View, Image,FlatList,TouchableOpacity } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView, { Callout, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { Card } from 'react-native-elements';

export default function App({ navigation,route }) {
  const [pin, setPin] = React.useState(null);
  const [region, setRegion] = React.useState(null);
  const { userType } = route.params;
  const {stage}=route.params;
  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setPin({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  const handlePlaceSelect = (data, details) => {
    const location = details.geometry.location;
    setRegion({
      latitude: location.lat,
      longitude: location.lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    setPin({
      latitude: location.lat,
      longitude: location.lng,
    });
    console.log("Selected location: ", data.description); 
  };



  return (
    <View style={{ marginTop: 50, flex: 1 }}>
      <TouchableOpacity onPress={() => navigation.navigate(userType === 'provider' ? 'Upload' : stage==1? 'HomeClient':'Select' , { cnic, phoneNumber })}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </View>
      </TouchableOpacity>
      


    <View style={{marginBottom:100}}><GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        GooglePlacesSearchQuery={{
          rankby: "distance",
        }}
        onPress={handlePlaceSelect}
        query={{
          key: "AIzaSyA4ZjlkptkU9Z-hkh3nLLwcO-OqIpmsU_w",
          language: "en",
          components: "country:pk",
          types: "establishment",
          radius: 30000,
          location: `${region ? region.latitude : ""}, ${
            region ? region.longitude : ""
          }`,
        }}
        styles={{
          container: { 
            flex: 0, 
            position: "absolute", 
            width: "90%",
            backgroundColor: "#6D7487", 
            zIndex: 1,
            borderRadius: 10,
            marginHorizontal: "5%",
            marginTop: 20
          },
          listView: { backgroundColor: "white" },
        }}
      />
      
      {region && (
        <MapView
          style={styles.map}
          region={{
            latitude: region.latitude,
            longitude: region.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          provider="google"
          showsUserLocation={true}
          initialRegion={region}
        >
          {pin && <Marker coordinate={pin} />}
          
        </MapView>)}
    </View>
    
    </View>
    
  );
        }

const styles = StyleSheet.create({
 

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  button: {
    width: "30%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#5f60ba",
    marginBottom: 15,
    alignSelf: "center",
  },
  
    buttonText: {
      textAlign: "center",
      color: "white",
      fontWeight:'bold'
    },
    name: {
      fontSize: 15,
      fontWeight: "bold",
    //  marginTop: 6,
      alignItems:"center",
      justifyContent:"center" 
    }
});
