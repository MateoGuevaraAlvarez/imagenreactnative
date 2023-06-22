  import { StatusBar } from 'expo-status-bar';
  import { StyleSheet, Text, View, Image } from 'react-native';
  import { Card } from './components/card'

  export default function App() {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/Image2.jpeg')} style={{ width: "50%", height: "30%" }} />
        <Card></Card>
        <StatusBar style="auto" />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
