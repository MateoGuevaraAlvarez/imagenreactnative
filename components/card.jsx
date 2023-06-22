import React from 'react';
import { View, Text,Image} from 'react-native';


export const Cardcomp = () => {
        return (
            <View style={{ backgroundColor: '#fff',borderRadius: 10,padding: 16,margin: 8,shadowColor: '#000',shadowOpacity: 0.2,shadowOffset: { width: 0, height: 2 },elevation: 2,}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                    <Image source={require('./assets/coffe1.jpeg')} style={{ width: 32, height: 32, borderRadius: 16, marginRight: 8 }}/>
                    <Text style={{ fontSize: 20 }}>Card Title</Text>
                </View>
                <Text style={{ marginBottom: 8 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse imperdiet consectetur risus.</Text>
            </View>
        );
}

export default Cardcomp;