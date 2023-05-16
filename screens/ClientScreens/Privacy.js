import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';

const TermsScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={[styles.title, {alignItems: 'center'}]}>Privacy Policy</Text>
      <View style={styles.line} />
      <Text style={styles.text}>
      We are committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application. Please read this Privacy Policy carefully.</Text>
      <Text style={styles.subtitle}>Information We Collect</Text>
      <Text style={styles.text}>
      We collect information from you when you register on our Application or request for service provider. When requesting or registering on our Application, as appropriate, you may be asked to enter your name, email address, mailing address, phone number or other details to help you with your experience. 
      </Text>
      <Text style={styles.subtitle}>Use Of Information</Text>
      <Text style={styles.text}>
      We use the information we collect from you to personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested. We may also use your information to improve our Application, send periodic emails regarding your order or other products and services, respond to inquiries, support requests, or customer service requests, conduct research and analysis, comply with legal obligations.
      </Text>
      <Text style={styles.subtitle}>Security Of Information</Text>
      <Text style={styles.text}>
     We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.
      </Text>
      <Text style={styles.subtitle}>Changes To This Privacy Policy</Text>
      <Text style={styles.text}>
      We may update this Privacy Policy from time to time to reflect changes in our practices. We encourage you to review this Privacy Policy periodically.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#FFFFFF',
    },
    title: {
      fontSize: 24,
      marginTop:35,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    line: {
      height: 1,
      backgroundColor: '#CCCCCC',
      marginVertical: 20,
    },
    subtitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    text: {
      fontSize: 16,
      lineHeight: 24,
      marginBottom: 20,
    },
  });
  
export default TermsScreen;
