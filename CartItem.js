import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <View style={styles.container}>
      <Text>{item.name} (x{item.quantity}) - ₹{item.price * item.quantity}</Text>
      <Button title="+" onPress={() => onUpdateQuantity(item, item.quantity + 1)} />
      <Button title="-" onPress={() => onUpdateQuantity(item, item.quantity - 1)} />
      <Button title="Remove" onPress={() => onRemove(item)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10, borderBottomWidth: 1 }
});
