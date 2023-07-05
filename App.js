  import { StatusBar } from 'expo-status-bar';
  import { StyleSheet, Text, View, Image } from 'react-native';
  import { Cardcomp } from './components/card'

  export default function App() {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/central_perk_logo.jpeg')} style={{width:400, height:150}}/>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>proba nuestro cafe</Text>
        <Cardcomp/>
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
