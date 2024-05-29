import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Linking, Alert } from 'react-native';

const makeCall = (phoneNumber) => {
  let phoneNumberUrl = `tel:${phoneNumber}`;
  Linking.canOpenURL(phoneNumberUrl)
    .then((supported) => {
      if (supported) {
        Linking.openURL(phoneNumberUrl);
      } else {
        Alert.alert("Error", "Unable to make a call. This device doesn't support phone calls.");
      }
    })
    .catch((err) => console.error("Error:", err));
};

const sendText = (phoneNumber) => {
  let smsUrl = `sms:${phoneNumber}`;
  Linking.canOpenURL(smsUrl)
    .then((supported) => {
      if (supported) {
        Linking.openURL(smsUrl);
      } else {
        Alert.alert("Error", "Unable to send a text message. This device doesn't support SMS.");
      }
    })
    .catch((err) => console.error("Error:", err));
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header}>
          My Contacts
        </Text>
        <StatusBar style="auto" />
      </View>
      <View>
        <Text>
          Name: John Doe
        </Text>
        <Text>
          Phone: 123-456-7890
        </Text>
        <Text>
          Email: jdoe@gmaily.com
        </Text>
      </View>
      <Button title="Call" onPress={() => makeCall('123-456-7890')} />
      <Button title="Text" onPress={() => sendText('123-456-7890')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'gray',
    margin: 24,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 10,
    width: 200,
  },
});
