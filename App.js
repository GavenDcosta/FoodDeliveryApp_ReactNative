import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import RestaurentScreen from './screens/RestaurentScreen';
import BasketScreen from './screens/BasketScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';

import { Provider } from 'react-redux'
import { store } from './store';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitleAlign: 'center' }} />
          <Stack.Screen name="Restaurent" component={RestaurentScreen} options={{ headerTitleAlign: 'center' }} />
          <Stack.Screen name="Basket" component={BasketScreen} options={{ headerTitleAlign: 'center', presentation: 'modal', animation:"slide_from_bottom", headerShown: false }} />
          <Stack.Screen name="PreparingOrderScreen" component={PreparingOrderScreen} options={{ headerTitleAlign: 'center', presentation: 'fullScreenModal', animation:"slide_from_bottom", headerShown: false }} />
          <Stack.Screen name="Delivery" component={DeliveryScreen} options={{ headerTitleAlign: 'center', presentation: 'fullScreenModal', animation:"slide_from_bottom", headerShown: false }} />
        </Stack.Navigator>
      </Provider> 
    </NavigationContainer>  
  );
}

