import { useState, useEffect, useContext } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import ListPedidos from '../../components/ListPedidos';
import { useRoute, useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';

import api from '../../pages/Services/api';
import { AuthContext } from '../../contexts/auth';

export interface PedidosProps {
    prdId: string;
    prdDescricao: string;
    prdReferencia: string;
    prdUrlPhoto: number;
    prdVdaUnitario: number;
}

type CarProps = {
  carId: number;
}

const UltPedidos = () => {
  const [pedidos, setPedidos] = useState<Array<PedidosProps>>([]); 
  const [searchText, setSearchText] = useState('');
  const [nroCar, setNroCar] = useState();
  const [count, setCount] = useState(0);

  const navigation = useNavigation();
  const route = useRoute();

  const {user}: any = useContext(AuthContext);

  useEffect(() => {
    api.get(`products`).then(response => { 
        setPedidos(response.data);
    }) 
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.cntProducts}>
            <Text style={styles.txtProducts} >{user.nome}, </Text>
        </View>
        <View style={styles.cntProducts}>
            <Text style={styles.txtTitulo} >Esse são seus últmos pedidos:</Text>
        </View>          
      </View>               
      <View style={styles.content}>
        <FlatList
            data={pedidos}
            style={styles.list}
            numColumns={2}
            renderItem={({ item }) => <ListPedidos data={item} />}
            keyExtractor={(item) => item.prdId}
        />
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8f0',
  },

  content: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  header: {
    flexDirection: 'column',
    height: 120,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#FF7826',
    color: '#FFF',
  },

  icone: {
    width: 50,
    height: 50,
    color: '#000',
    fontSize: 30,
    padding: 10,
    marginTop: 35,
  },

  input: {
    flex: 1,
    width: '80%',
    height: 40,
    backgroundColor: '#d2dbdb',
    margin: 30,
    borderRadius: 25,
    fontSize: 19,
    paddingLeft: 15,
    paddingRight: 15,
    color: '#0a0a0a',
  },
  searchArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderButton: {
    width: 32,
    marginRight: 30,
  },
  list: {
    flex: 1,
  },

  cntProducts: {
    flex: 1,
    width: '80%',
    height: 40,
  },

  txtProducts: {
    marginTop: 20,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },

  txtTitulo: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },

  btnCar: {

  },

  carShop: {
    marginRight: 10,
  },

  backQtde: {
    marginLeft: 10,
    alignItems: 'center',
    width: 20,
    height: 20,
    backgroundColor: '#fff',
    borderRadius: 25,
  },

  qtde: {
    color: '#a30c0c',
    fontSize: 12,
    fontWeight: 'bold',
  },

  iconCar: {
    marginTop: -10,
  },

});

export default UltPedidos;