import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';

const TermsScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={[styles.title, {alignItems: 'center'}]}>Terms and Conditions</Text>
      <View style={styles.line} />
      <Text style={styles.subtitle}>Introduction</Text>
      <Text style={styles.text}>
        These terms and conditions govern your use of our mobile application. By using our application, you accept these terms and conditions in full. If you disagree with these terms and conditions or any part of these terms and conditions, you must not use our application.
      </Text>
      <Text style={styles.subtitle}>Restrictions</Text>
      <Text style={styles.text}>
        You must not use our application in any way that causes, or may cause, damage to the application or impairment of the availability or accessibility of the application.
      </Text>
      <Text style={styles.subtitle}>Indemnity</Text>
      <Text style={styles.text}>
        You agree to indemnify us against any losses, damages, costs, liabilities and expenses (including without limitation legal expenses and any amounts paid by us to a third party in settlement of a claim or dispute on the advice of our legal advisers) incurred or suffered by us arising out of any breach by you of any provision of these terms and conditions, or arising out of any claim that you have breached any provision of these terms and conditions.
      </Text>
      <Text style={styles.subtitle}>Variation</Text>
      <Text style={styles.text}>
        We may revise these terms and conditions from time-to-time. The revised terms and conditions shall apply to the use of our application from the date of publication of the revised terms and conditions on our application.
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
