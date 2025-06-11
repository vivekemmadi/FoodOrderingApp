import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './screens/MenuScreen';
import CartScreen from './screens/CartScreen';
import OrderSummaryScreen from './screens/OrderSummaryScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Order Summary" component={OrderSummaryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
