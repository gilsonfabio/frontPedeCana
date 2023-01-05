import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet} from "react-native";
import { useRoute, useNavigation, useLinkProps } from '@react-navigation/native';
import api from "../Services/api";
import { WebView } from 'react-native-webview';
import { AuthContext } from '../../contexts/auth';

export interface filtros {
    "price" ?: number;
    "address" ?: string;
    "cliEmail"?: string;
    "cliNome"?: string;
}

export interface vlrcompraProps {
    "cmpVlrTotal" ?: number;
}

const CarCredit = () => {
    const [url, setUrl] = useState('');
    const navigation = useNavigation();
    const route = useRoute();
    const { cmpVlrTotal } = route.params as vlrcompraProps;
    const {user}: any = useContext(AuthContext);
    let idUsrCar = user.idUsr; 
    let usrName = user.nome;
    let usrEmail = user.email;
    
    const testeJson:filtros = {
        price: cmpVlrTotal,
        address: 'Compra Efetuada online',
        cliEmail: usrEmail,
        cliNome: usrName
     }  

    useEffect(() => {   
       
        api.post('/checkout', {
            testeJson 
        }).then(response => {
            let json=response.data
            console.log(json)
            setUrl(json)
        }).catch(() => {
            alert('Erro no cadastro!');
        })

    }, [])

    async function stateChange(state:any) {
        console.log(state);
        let url = state.url;
        if(state.canGoBack == true && !url.includes('mercadopago')){
            if(url.includes("approved")){
                navigation.navigate("Tracking")                
            }else{
                navigation.navigate("Produtos");
            }
        }
    }
   
    return (
        <View style={styles.container}>
            {url && 
                <WebView
                    originWhitelist={['*']} 
                    source={{ uri: url }}
                    style={styles.checkouttmp}
                    startInLoadingState={true}
                    onNavigationStateChange={state=>stateChange(state)}
                />
            }
            
        </View>    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#330981',
    },     
    checkouttmp: {
        flex: 1,
    },     
    
});

  
export default CarCredit