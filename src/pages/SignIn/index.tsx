import React, { useState, useContext} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import axios from 'axios';

import api from '../Services/api';
import { AuthContext } from '../../contexts/auth';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn }: any = useContext(AuthContext);
    
    const navigation = useNavigation();
    const route = useRoute();
    
    async function handleSignIn(){
        signIn(email, password)
  
    }

    function handleNewClient(){
        navigation.navigate('NewClient');
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image animation="flipInY"
                    source={require('../../assets/icone1.png')} style={{width: '30%', height: '300%'}} 
                />                
                <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                    <Text style={styles.message}>Bem-vindo(a)</Text>
                </Animatable.View>                   
            </View>
            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput 
                    placeholder="Digite seu email..." 
                    keyboardType='email-address'
                    style={styles.input } 
                    value={email}
                    onChangeText={setEmail}
        
                />
                <Text style={styles.title}>Senha</Text>
                <TextInput 
                    secureTextEntry={true} 
                    keyboardType="numeric"
                    placeholder="Digite sua senha..." 
                    style={styles.input }
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRegister} onPress={handleNewClient}>
                    <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>
            </Animatable.View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF7826',
    },
    containerLogo: {
        backgroundColor: '#FF7826',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 40,
    },
    containerHeader: {

    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',
        marginLeft: 15,
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 16,
        marginTop: 20,
    },
    input: {
        borderBottomWidth: 1,
        height: 25,
        marginBottom: 5,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#FF7826',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center',
    },
    registerText: {
        color: '#2884da',
    },
    
})