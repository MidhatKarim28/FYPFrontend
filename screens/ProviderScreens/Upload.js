import Counter from '../../components/counter';
import { Dimensions, StyleSheet, View,Text, TextInput, TouchableOpacity,Image } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Create = ({ navigation,route }) => {
  const { height } = Dimensions.get("window");
  const windowHeight = height + height * 0.05;
  const { categoryName, service, test, selectedLocation, selectedAddress } = route.params;


  const userType="provider";
console.log(test);
  
  // if(!categoryName)
  // {
  //   categoryName= AsyncStorage.getItem("category");
  // }
  // else{
  //   AsyncStorage.setItem("category", categoryName);
  // }
  // if(!service)
  // {
  //   service= AsyncStorage.getItem("service");
  // }
  // else{
  //   AsyncStorage.setItem("service", service);
  // }
  return (
   
    <View style={styles.container}>
      <Image
        source={require("../../assets/undraw_Collection_re_4h7d.png")}
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height * 0.45,
          resizeMode:'cover'       
        }}
      />

        <View style={{ marginTop: -4, alignItems: "center" }}>
          <Text style={{ color: "black", fontSize: 35, fontWeight: "bold",marginVertical:-5,marginBottom:5 }}>
            Upload Request
          </Text>
          </View>
          <ScrollView>
          <Text
            style={styles.textLabel}
          >
            Service Category
          </Text>

      <View style={styles.textInput}>
      <Text style={{marginTop: 10, 
    color: "black",opacity:0.6}}>{categoryName}</Text>
</View>

<Text
            style={styles.textLabel}
          >
            Service Name
          </Text>

      <View style={styles.textInput}>
    <Text style={{marginTop: 10, 
    color: "black",opacity:0.6}}>{service}</Text>
</View>

<Text
            style={[styles.textLabel,{marginLeft:1}]}
          >         Location   
          </Text>

          <View style={styles.textInput}>
  <TouchableOpacity onPress={() => navigation.navigate("Map", { userType, categoryName, service })}>
    <Text style={{ marginTop: 0, color: "black", opacity: 0.6 }}>{selectedLocation ? selectedLocation.description : "Street"}</Text>
    {selectedAddress && (
      <Text style={{ marginTop: 0, color: "black", opacity: 0.6 }}>{selectedAddress}</Text>
    )}
  </TouchableOpacity>
</View>

<Text
            style={[styles.textLabel,{marginBottom:28}]}
          >
            Price Per Hour
          </Text>
         
        <Counter initialCount={100}/>  
          
        <TouchableOpacity onPress={() => navigation.navigate("Summary", { categoryName, service, selectedLocation,selectedAddress })}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>View Summary</Text>
          </View>
        </TouchableOpacity>
        </ScrollView>
 <TouchableOpacity onPress={()=> navigation.goBack()}>

      <View
      style={styles.backButton}
    >        
      <AntDesign name="arrowleft" size={40} color="black" />
      </View>
      </TouchableOpacity>
      </View>
     
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },  
  textLabel: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    width: Dimensions.get('window').width * 0.6,
    marginBottom: -12,
    marginLeft: Dimensions.get('window').width * 0.08,
  },
  button: {
    width: Dimensions.get('window').width * 0.6,
    height:Dimensions.get("window").height *0.06,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "#5f60ba",
    marginTop: Dimensions.get('window').height * 0.04,
    marginLeft: Dimensions.get('window').width * 0.2,
  }, 
  textInput: {
    marginLeft: Dimensions.get('window').width * 0.1,
    marginTop: 30,
    borderRadius: 10,
    height: Dimensions.get('window').height * 0.06,
    paddingHorizontal: 20,
    width: Dimensions.get('window').width * 0.8,
    marginVertical: 10,
    backgroundColor: '#f6f7f9',
  },
  
  backButton: {
    height: Dimensions.get('window').height * 0.05,
    borderRadius: 10,
    padding: -3,
    width: Dimensions.get('window').width * 0.15,
    marginLeft: Dimensions.get('window').width * 0.05,
    marginTop: -Dimensions.get('window').height * 0.94,
  },
  buttonText: {
    textAlign: "center",
    padding: 10,
    color: "white",
    fontWeight:'bold'
  },
});
export default Create;
