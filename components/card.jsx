import React from 'react';
import { View, Text,Image} from 'react-native';


export const Cardcomp = () => {
        return (
            <View style={{ backgroundColor: '#fff',borderRadius: 10,padding: 16,margin: 8,shadowColor: '#000',shadowOpacity: 0.2,shadowOffset: { width: 0, height: 2 },elevation: 2,}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                    <Image source={require('../assets/coffee1.jpeg')} style={{width:300, height:300}}/>

                </View>
                <View style={{alignItems: 'center', marginBottom: 8 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>Mocha</Text>
                </View>
            </View>
        );
}

export default Cardcomp;