import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../pages/Welcome';
import SignIn from '../pages/SignIn';
import Produtos from '../pages/Produtos';
import Detalhes from '../pages/Detalhes';
import CarShopping from '../pages/CarShopping';
import UltPedidos from '../pages/UltPedidos';
import LocEntrega from '../pages/LocEntrega';
import FrmPagto from '../pages/FrmPagto';
import CarCredit from '../pages/CarCredit';
import Tracking from '../pages/Tracking';
import NewClient from '../pages/NewClient';

type navigationProps = {
    Welcome: undefined;
    SignIn: undefined;
    Produtos: undefined;
    Detalhes: {proId: number} | undefined;
    CarShopping: {carId: number} | undefined;
    UltPedidos: undefined;
    LocEntrega: undefined;
    FrmPagto: undefined;
    CarCredit: {cmpVlrTotal: number} | undefined;
    Tracking: undefined;
    NewClient: undefined;
}

const Stack = createNativeStackNavigator<navigationProps>();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}}/>
            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}}/>                      
            <Stack.Screen name="Produtos" component={Produtos} options={{headerShown:false}}/>
            <Stack.Screen name="Detalhes" component={Detalhes} options={{headerShown:false}} />
            <Stack.Screen name="CarShopping" component={CarShopping} options={{headerShown:false}} />
            <Stack.Screen name="UltPedidos" component={UltPedidos} options={{headerShown:false}} />
            <Stack.Screen name="LocEntrega" component={LocEntrega} options={{headerShown:false}} />
            <Stack.Screen name="FrmPagto" component={FrmPagto} options={{headerShown:false}} />
            <Stack.Screen name="CarCredit" component={CarCredit} options={{headerShown:false}} />
            <Stack.Screen name="Tracking" component={Tracking} options={{headerShown:false}} />
            <Stack.Screen name="NewClient" component={NewClient} options={{headerShown:false}} />
        </Stack.Navigator>
    )
}
