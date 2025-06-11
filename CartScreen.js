import React from 'react';
import { View, FlatList, Text, Button } from 'react-native';
import { useCart } from '../contexts/CartContext';
import CartItem from '../components/CartItem';

export default function CartScreen({ navigation }) {
  const { cart, updateQuantity, removeFromCart, getTotal } = useCart();

  return (
    <View>
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <CartItem item={item} onUpdateQuantity={updateQuantity} onRemove={removeFromCart} />
        )}
        keyExtractor={item => item.id}
      />
      <Text>Total: ₹{getTotal()}</Text>
      <Button title="Proceed to Summary" onPress={() => navigation.navigate('Order Summary')} />
    </View>
  );
}
