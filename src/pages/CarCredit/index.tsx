import React, { useState, useEffect } from "react";
import { View, StyleSheet} from "react-native";
import { useRoute, useNavigation, useLinkProps } from '@react-navigation/native';
import api from "../Services/api";
import { WebView } from 'react-native-webview';

export interface filtros {
    "price" ?: number;
    "address" ?: string;
}

const CarCredit = () => {
    const [url, setUrl] = useState('');
    const navigation = useNavigation();
    const route = useRoute();

    const testeJson:filtros = {
        price: 100,
        address: 'Rua 02 qd.5 lt.5 ',
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

    async function stateChange(state) {
        console.log(state);
        let url = state.url;
        if(state.canGoBack == true && !url.includes('mercadopago')){
            if(url.includes("approved")){
                navigation.navigate("Produtos")                
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