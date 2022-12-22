import React, { useState, useEffect} from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';

type ProductsProps = {
  prdId: string;
  prdDescricao: string;
  prdReferencia: string;
  prdUrlPhoto: number;
  prdVdaUnitario: number;
}

const width = Dimensions.get('window').width - 5; 

const ListPedidos = ({ data }:any) => {

  const codProd = 4;
  const imageUrl = require("../../assets/images/1.jpg");
  const navigation = useNavigation();

  const [countItens, setCountItens] = useState(0);

  function handleDetalhes(){
    navigation.navigate('Detalhes', {proId: data.prdId});
  }

  return (
    <TouchableOpacity style={styles.item} onPress={handleDetalhes}>
      <View style={[styles.containerProd, styles.shadowProp]}>
        <View style={styles.itemInfo}>
          <View style={styles.containerTitulo}>
            <Text style={styles.itemP1}>{data.prdDescricao}</Text>
          </View>
          <View style={styles.containerSubtitulo}>
            <Text style={styles.itemP2}>{data.prdReferencia}</Text>
          </View>
          <View style={styles.containerPreco}>
            <Text style={styles.itemP3}>R$ {data.prdVdaUnitario}</Text>
          </View>  
        </View>        
      </View>  
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({  
  containerProd: { 
    width: width / 2 - 10, 
    height: 250,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  item: {
    flexDirection: 'row',
    marginLeft: 5,
    paddingTop: 15,
    paddingBottom: 15,
  },
  
  itemPhoto: {
    width: '100%',
    height: 120,
    borderRadius: 5,
  },
  itemInfo: {
    marginLeft: 5,
  },

  containerTitulo: {
    width: '90%',
    height: 30,
  },

  itemP1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5
  },

  containerSubtitulo: {
    width: '90%',
    height: 50,
  },

  itemP2: {
    fontSize: 14,
    color: '#1b18b3',
    fontWeight: 'bold',
  },

  containerPreco: {
    width: '90%',
    height: 40,    
  },

  itemP3: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#185512',
  },
  itemP4: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#14aa7d',
    color: '#511257',
  },
  button: {
    width: '100%',    
    alignItems: 'center',
    backgroundColor: '#14aa7d',
    padding: 10
  },
});

export default ListPedidos;
