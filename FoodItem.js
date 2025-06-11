import React, { useState } from 'react';
import { View, Text, Image, Button, TextInput, StyleSheet } from 'react-native';
import { useCart } from '../contexts/CartContext';

export default function FoodItem({ item }) {
  const [quantity, setQuantity] = useState('1');
  const { addToCart } = useCart();

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>₹{item.price}</Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        value={quantity}
        onChangeText={setQuantity}
      />
      <Button title="Add to Cart" onPress={() => addToCart(item, parseInt(quantity))} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  image: { width: 100, height: 100 },
  name: { fontSize: 18, fontWeight: 'bold' },
  price: { fontSize: 16 },
  input: { borderWidth: 1, marginVertical: 5, padding: 5, width: 50 }
});
