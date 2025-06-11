import React from 'react';
import { View, Text, Button } from 'react-native';
import { useCart } from '../contexts/CartContext';
import { db } from '../services/firebase';
import { addDoc, collection, Timestamp } from 'firebase/firestore';

export default function OrderSummaryScreen({ navigation }) {
  const { cart, getTotal, clearCart } = useCart();

  const handleSubmit = async () => {
    await addDoc(collection(db, 'orders'), {
      items: cart,
      total: getTotal(),
      timestamp: Timestamp.now()
    });
    clearCart();
    navigation.navigate('Menu');
  };

  return (
    <View>
      {cart.map(item => (
        <Text key={item.id}>{item.name} x{item.quantity}</Text>
      ))}
      <Text>Total: ₹{getTotal()}</Text>
      <Button title="Submit Order" onPress={handleSubmit} />
    </View>
  );
}
