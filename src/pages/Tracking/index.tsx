import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


import { useNavigation } from '@react-navigation/native';

const Tracking = () => {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <Text>Compra aprovada com sucesso!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF7826',
    },
    
})

export default Tracking;