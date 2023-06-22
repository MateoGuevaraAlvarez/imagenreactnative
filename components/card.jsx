import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Pressable} from 'react-native';
import {Card} from 'react-native-elements'

export const card = () => {
    return (
        <Card image= {require('../assets/image.jpeg')}>
            <Text style={{marginBottom:10}}> lolass</Text>
        </Card>
    );
}

export default card;