import * as React from "react";
import { Dimensions, StyleSheet, Text, View, Image,FlatList,TouchableOpacity } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView, { Callout, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { Card } from 'react-native-elements';


export default function App(navigation) {
  const [pin, setPin] = React.useState(null);
  const [region, setRegion] = React.useState(null);
  const [showCard, setShowCard] = React.useState(false);
  

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

  const bookings = [
    {
      id: 1,
      client: 'Rutba Asghari',
      service: "Office Cleaning",
      price: 500,
      date: "2023-05-03",
      house: "House no 34, abc, abc"
    }];

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
  const handleOnlinePress = () => {
    setShowCard(true);
  }; 

  const BookingList = () => {
    const renderItem = ({ item }) => (
      <View>
        <Text>{item.service}</Text>
        <Text>Rs. {item.price}</Text>
        <Text>{item.date}</Text>
        <Text>{item.house}</Text>
      </View>
    );

    return (
      <Card containerStyle={[styles.card,{height:Dimensions.get("window").height * 0.27,}]}>
        <Text style={styles.name}>Rutba Asghari</Text>
        <FlatList
          data={bookings}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
        <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
         <TouchableOpacity>
        <View style={{width: 90, borderRadius: 10,backgroundColor: "#5f60ba",padding:10,marginRight:10}}>
          <Text style={styles.buttonText}>Accept</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>


      <View style={{width: 90, borderRadius: 10,backgroundColor: 'rgba(63, 61, 86, 0.7)',padding:10}}>
          <Text style={styles.buttonText}>Reject</Text>
        </View>
      </TouchableOpacity>
      </View>
      </Card>
    );
  };

  return (
    <View style={{ marginTop: 50, flex: 1 }}>
      <TouchableOpacity onPress={handleOnlinePress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Online</Text>
        </View>
      </TouchableOpacity>
      {showCard && <BookingList />}
      


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
    fontWeight: "bold",
  },
  card: {
    borderRadius: 20,
    padding: 6,
    backgroundColor: "#f6f7f9",
    width: "65%",
    opacity: 0.8,
    alignSelf: "center",
    marginTop: 10,
    alignItems: "center",
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 6,
    alignItems: "center",
    justifyContent: "center",
  },
});