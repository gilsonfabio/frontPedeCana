import React, { useState } from "react";
import { View, Text, StyleSheet,TextInput, SafeAreaView, TouchableOpacity } from "react-native";
import { TextInputMask } from 'react-native-masked-text';
import { useRoute, useNavigation } from '@react-navigation/native';

const CarCredit = () => {
    const [nroCartao, setNroCartao] = useState('');
    const [nomCartao, setNomCartao] = useState('');
    const [email, setEmail] = useState('');
    const [nroCpf, setNroCpf] = useState('');
    const [valCartao, setValCartao] = useState('');
    const [cvvCartao, setCvvCartao] = useState('');
    
    const navigation = useNavigation();
    const route = useRoute();

    function handleLocEntrega(){
        navigation.navigate("LocEntrega");
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.txtTitle} >Credit Card</Text>
            </View> 
            <View style={styles.containerCard}>
                <View style={styles.contentCard}>
                    <View style={styles.containerNroCard}>
                        <Text style={styles.nroCartao}>
                            {nroCartao}
                        </Text>
                        <Text style={styles.valCartao}>
                            {valCartao}
                        </Text>
                    </View>    
                    <View style={styles.containerNomCard}>
                        <Text style={styles.nomCartao}>
                            {nomCartao}
                        </Text>
                        <Text style={styles.cvvCartao}>
                            {cvvCartao}
                        </Text>
                    </View>    
                </View>
            </View>
            <View style={styles.containerForm}>                
                <View style={styles.containerInput}>
                    <TextInputMask
                        style={styles.input } 
                        placeholder="Informe nro do cartão" 
                        type={'credit-card'}
                        options={{
                            obfuscated: false,
                            issuer: 'visa-or-mastercard'
                        }}
                        value={nroCartao}
                        onChangeText={text => {
                            setNroCartao(text)
                        }}
                    />
                </View> 
                <View style={styles.qdrInterno}>
                    <View style={styles.containerInput}>
                        <TextInputMask
                            style={styles.input } 
                            placeholder="Validade" 
                            type={'custom'}
                            options={{
                                mask: '99/99'
                            }}
                            value={valCartao}
                            onChangeText={text => {
                                setValCartao(text)
                            }}
                        /> 
                    </View>
                    <View style={styles.containerInput}>
                        <TextInputMask
                            style={styles.input } 
                            placeholder="Cvv" 
                            type={'custom'}
                            options={{
                                mask: '999'
                            }}
                            value={cvvCartao}
                            onChangeText={text => {
                                setCvvCartao(text)
                            }}
                        /> 
                    </View>
                </View>
                <View style={styles.containerInput}>
                    <TextInput 
                        placeholder="Nome no cartão" 
                        style={styles.input } 
                        value={nomCartao}
                        onChangeText={setNomCartao}
                    />
                </View>
                <View style={styles.containerInput}>
                    <TextInput 
                        placeholder="Informe nro do cpf" 
                        style={styles.input } 
                        value={nroCpf}
                        onChangeText={setNroCpf}
                    />
                </View>    
                <View style={styles.containerInput}>
                    <TextInput 
                        placeholder="Informe seu email" 
                        style={styles.input} 
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>                
            </View> 
            <View style={styles.totaliza}>
                <TouchableOpacity style={styles.button} onPress={handleLocEntrega}>
                    <Text style={styles.buttonText}>Próxima Etapa</Text>
                </TouchableOpacity>
            </View>  
        </SafeAreaView>        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee7e3',
    },     
    header: {
        flexDirection: 'row',
        height: 120,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FF7826',
        color: '#FFF',
    },              
    txtTitle: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },

    containerNomCard: {
        marginTop: 5,
        flexDirection: 'row',
        height: 30,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    nomCartao: {
        marginLeft: 15,
        marginTop: 2,
        fontSize: 18,
        fontWeight: 'normal',
        color: '#FFFFFF',
    },

    cvvCartao: {
        marginLeft: 90,
        marginTop: 5,
        fontSize: 12,
        fontWeight: 'normal',
        color: '#FFFFFF',
    },

    containerNroCard: {
        marginTop: 90,
        flexDirection: 'row',
        height: 60,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },    
    nroCartao: {
        marginLeft: 15,
        marginTop: 5,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },

    valCartao: {
        marginLeft: 20,
        marginTop: 12,
        fontSize: 16,
        fontWeight: 'normal',
        color: '#FFFFFF',
    },

    containerCard: {
        alignItems: "center",
        marginBottom: 30,
        padding: 10,
    },
    contentCard: {
        width: '100%',
        height: 220,
        backgroundColor: '#6A1B9A',
        borderRadius: 20,
    },
    containerForm: {
        color: '#FFF',
        marginRight: 15,
    },
    containerInput: {
        width: '100%',
        height: 50,
        marginTop: 10,
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: '#db8952',
        color: '#000',
        borderRadius: 10,
        padding: 5,  
        justifyContent: 'center',
    },
    input: {
        marginLeft: 10,
        fontSize: 18,
    },
    inputCrt: {
        marginLeft: 10,
        fontSize: 22,
    },
    qdrInterno: {
        borderColor: '#807979',
        flexDirection: 'row',
        marginTop: 10,
        width: '40%',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
    }, 
    totaliza: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      button: {
        backgroundColor: '#FF7826',
        borderRadius: 4,
        padding: 8,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center'
      },
      buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
      },
});

  
export default CarCredit