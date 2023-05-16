//Start
//Mode
//Signup
//Welcome
//Otp
//Create
//Maps
//HomeP
//Services
//Upload
//Summary
//Process
//Booking
//Map
//Chat
//profile
//terms
//privacy

import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,Image
} from "react-native";

const ChatScreen = () => {
    const profilePic = require("../assets/undraw_Profile_pic_re_iwgo.png");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: "1", sender: "me", message: "Hi there!" },
    { id: "2", sender: "other", message: "Hey, how's it going?" },
    { id: "3", sender: "me", message: "Pretty good, thanks. How about you?" },
    { id: "4", sender: "other", message: "I'm doing well, thanks for asking!" },
  ]);

  const handleMessage = () => {
    if (message !== "") {
      setMessages([
        ...messages,
        { id: messages.length + 1, sender: "me", message: message },
      ]);
      setMessage("");
    }
  };

  return (
     <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={profilePic} style={styles.profilePic} />
        <Text style={styles.personName}>Midhat</Text>
      </View>
      <View style={styles.chatContainer}>
       <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={90}
    >
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {messages.map((msg) => (
          <View
            key={msg.id}
            style={[
              styles.messageContainer,
              msg.sender === "me" ? styles.rightMessageContainer : null,
            ]}
          >
            <Text
              style={[
                styles.message,
                msg.sender === "me" ? styles.rightMessage : null,
              ]}
            >
              {msg.message}
            </Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={(text) => setMessage(text)}
          placeholder="Type a message..."
        />
        <TouchableOpacity style={styles.button} onPress={handleMessage}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  topContainer: {
    marginTop:10,
    marginRight:10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25,
    borderBottomWidth: 2,
    borderBottomColor: '#EEE',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  personName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  chatContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
  },
  messageContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
    maxWidth: "80%",
  },
  rightMessageContainer: {
    alignSelf: "flex-end",
    backgroundColor: "#5f60ba",
    opacity:0.5
  },
  message: {
    fontSize: 16,
    color: "#444",
  },
  rightMessage: {
    color: "black",
    fontWeight:'bold'
  },
  inputContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  input: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#5f60ba",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ChatScreen;
