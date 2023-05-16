import { useState } from 'react';
import Counter from '../../components/counter';
import { Dimensions, StyleSheet, View,Text, TextInput, TouchableOpacity,Image,Modal } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Card } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';


const DateTimePickerScreen = ({navigation}) => {
  const { width,height } = Dimensions.get("window");
  const left = height <= 604 ? 30:50;
  const windowHeight = height + height * 0.05;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const userType='seeker';
  const backButtonMarginTop = height <= 604 ?-height*0.92:-height*0.97;
 
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (time) => {
    setSelectedTime(time);
    hideTimePicker();
  };
  return (
    <View style={styles.container}>

        <View style={{ marginTop: 50, alignItems: "center" }}>
          <Text style={{ color: "black", fontSize: 40, fontWeight: "bold",marginVertical:-5 }}>
            Booking
          </Text>
          </View>
          <ScrollView>
          <View style={{ marginTop: -10, alignItems: "center" }}>
          <Text
            style={{
              color: "black",
              fontSize: 15,
              fontWeight:"bold",
              width: 250,
              marginTop: 35,
              marginRight:67
            }}
          >
            Select Date
          </Text>
          </View>
        

      <View style={{ marginLeft:40,
          marginTop:10,
          borderRadius: 10,height:45, paddingHorizontal: 20, width: '80%',  marginVertical: 10, backgroundColor:'#f6f7f9' }}>
   <TouchableOpacity onPress={showDatePicker}>
  <Text style={{ marginTop: 10, color: "black" }}>
  {selectedDate !== "" && (
  <Text>{selectedDate.toDateString()}</Text>
)}
  </Text>
</TouchableOpacity>

</View>

<View style={{ marginBottom: 40, alignItems: "center" }}>
<Text
            style={{
              color: "black",
              fontSize: 15,
              fontWeight:"bold",
              width: 250,
              marginTop:10,
              marginRight:67
            }}
          >
            Select Time
          </Text>
        </View>

      <View style={{ marginLeft:40,
          marginTop:-30,
          borderRadius: 10,height:45, paddingHorizontal: 20, width: '80%',  marginVertical: 10, backgroundColor:'#f6f7f9' }}>
    <TouchableOpacity onPress={showTimePicker}>
    <Text style={{ marginTop: 10, color: "black" }}>
  {selectedTime !== "" && (
  <Text>{selectedTime.toLocaleTimeString()}</Text>
)}
  </Text>
</TouchableOpacity>
</View>

<Modal visible={isDatePickerVisible}>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={hideDatePicker}
        />
      </Modal>

      <Modal visible={isTimePickerVisible}>
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleTimeConfirm}
          onCancel={hideTimePicker}
        />
      </Modal>

    

<View style={{ marginBottom: 40, alignItems: "center" }}>
<Text
            style={{
              color: "black",
              fontSize: 15,
              fontWeight:"bold",
              width: 250,
              marginTop: 10,
              marginRight:67
            }}
          >
            Location
          </Text>
        </View>

      <View style={{ marginLeft:40,
          marginTop:-30,
          borderRadius: 10,height:45, paddingHorizontal: 20, width: '80%',  marginVertical: 10, backgroundColor:'#f6f7f9' }}>
    <TouchableOpacity onPress={() => navigation.navigate("Map",{userType})}>
    <Text style={{marginTop: 10, 
    color: "black"}}>Street, Area</Text>
    </TouchableOpacity>
</View>
<View style={{ marginBottom: 40, alignItems: "center" }}>
<Text
            style={{
              color: "black",
              fontSize: 15,
              fontWeight:"bold",
              width: 250,
              marginTop: 15,
              marginRight:67,
              marginBottom:-1
            }}
          >
            Working Hours
          </Text>
        </View>
        <Counter initialCount={1}/>      
        <View style={{ marginBottom: -13, alignItems: "center" }}>
<Text
            style={{
              color: "black",
              fontSize: 15,
              fontWeight:"bold",
              width: 250,
              marginTop: 40,
              marginRight:67,
            }}
          >
            Total Charges
          </Text>
        </View>
        <Card containerStyle={[styles.card,{marginLeft:left}]}>
        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Per Hour</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Rs 250</Text>
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Working Hours</Text>
          </View>
          <View style={styles.detailItem}>
          <Text style={styles.detailTitle}>2</Text>

          </View>
          </View>
          <View style={{ marginBottom:5,marginTop:7, backgroundColor: "white", height: 1 }} />

          <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Total Charges</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Rs 500</Text>
          </View>
          </View>
        
      </Card>
  
<TouchableOpacity onPress={() => navigation.navigate("BookingDetails")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Confirm Booking</Text>
          </View>
        </TouchableOpacity>
        </ScrollView>
 <TouchableOpacity onPress={()=> navigation.goBack()}>

      <View
      style={[styles.backButton,{marginTop:backButtonMarginTop}]}
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
  button: {
    width: 250,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#5f60ba",
    marginTop: 30,
    marginLeft: 67,
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white",
    fontWeight:'bold'
  },
  detailsContainer: {
    marginTop: 7,
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
  card: {
    borderRadius: 10,
    margin: 10,
    marginTop:30,
    padding: 10,
    width:300,
    backgroundColor: '#f6f7f9',
    opacity:0.7
  },
  backButton: {
    height: 50,
    borderRadius: 10,
    padding: 2,
    width: 60,
    marginLeft: 20,
  },
});



    
export default DateTimePickerScreen;
