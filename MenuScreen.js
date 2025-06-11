import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, Button } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebase';
import FoodItem from '../components/FoodItem';

export default function MenuScreen({ navigation }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMenu() {
      const snapshot = await getDocs(collection(db, 'menu'));
      const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItems(list);
      setLoading(false);
    }
    fetchMenu();
  }, []);

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <FoodItem item={item} />}
        keyExtractor={item => item.id}
      />
      <Button title="Go to Cart" onPress={() => navigation.navigate('Cart')} />
    </View>
  );
}
