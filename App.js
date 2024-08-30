import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import RestaurentScreen from './screens/RestaurentScreen';

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
        </Stack.Navigator>
      </Provider> 
    </NavigationContainer>  
  );
}

