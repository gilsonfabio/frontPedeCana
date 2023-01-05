import React, { useState, useRef} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { TextInputMask } from 'react-native-masked-text';
import axios from 'axios';

import api from '../Services/api';

interface cpfProps {
    cpfRef?: number;
}


export default function NewClient() {
    const [nome, setNome] = useState('');
    const [celular, setCelular] = useState('');
    const [cpf, setCpf] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const cpfRef = useRef(null);
    const nascRef = useRef(null);
    const celRef = useRef(null);

    const handleCadastra = () => {
        
        const usrCpf = cpfRef?.current.getRawValue();
        const usrNasc = nascRef?.current.getRawValue();
        const usrCelular = celRef?.current.getRawValue();
        
        api.post('newuser', {
            nome,
            cpf: usrCpf,
            nascimento: usrNasc,
            celular: usrCelular,
            email,
            password 
        }).then(() => {
            alert('Cadastro efetuado com sucesso!')
        }).catch(() => {
            alert('Erro no cadastro!');
        })
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image animation="flipInY"
                    source={require('../../assets/icone1.png')} style={{width: '30%', height: '300%'}} 
                />                
                <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                    <Text style={styles.message}>Informe seus dados</Text>
                </Animatable.View>                   
            </View>
            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Nome</Text>
                <TextInput 
                    placeholder="Digite seu nome" 
                    keyboardType='ascii-capable'
                    style={styles.input } 
                    value={nome}
                    onChangeText={setNome}        
                />
                <Text style={styles.title}>CPF</Text>
                <TextInputMask
                    style={styles.input } 
                    placeholder="Informe seu cpf" 
                    type={'cpf'}
                    value={cpf}
                    onChangeText={text => {
                        setCpf(text)
                    }}
                    ref={cpfRef}
                />
                <Text style={styles.title}>Nascimento</Text>
                <TextInputMask
                    style={styles.input } 
                    placeholder="Informe seu nascimento"
                    type={'datetime'}
                    options={{
                        format: 'DD/MM/YYYY'
                    }}
                    value={nascimento}
                    onChangeText={setNascimento}
                    ref={nascRef}
                />
                <Text style={styles.title}>Telefone</Text>
                <TextInputMask
                    style={styles.input } 
                    placeholder="Informe seu celular"
                    type={'cel-phone'}
                    options={{
                        maskType: 'BRL',
                        withDDD: true,
                        dddMask: '(99) '
                    }}
                    value={celular}
                    onChangeText={setCelular}
                    ref={celRef}
                />
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
                <TouchableOpacity style={styles.button} onPress={handleCadastra}>
                    <Text style={styles.buttonText}>Salvar</Text>
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
        fontSize: 25,
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
        color: '#a1a1a1',
    },
})