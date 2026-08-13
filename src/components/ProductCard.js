import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

export default function ProductCard({ product, onPress }) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>{product.title}</Text>
        <Text style={styles.price}>
  {Number(product.price).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })}
</Text>
        <Text style={styles.discount}>{product.discountPercentage?.toFixed(0)}% de desconto</Text>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  card: { flexDirection: 'row', backgroundColor: '#fff', borderRadius: 14, padding: 12, marginBottom: 12, elevation: 2 },
  image: { width: 90, height: 90, borderRadius: 10, backgroundColor: '#eee' },
  info: { flex: 1, paddingLeft: 12, justifyContent: 'center' },
  title: { fontSize: 16, fontWeight: '700', color: '#202124' },
  price: { marginTop: 7, fontSize: 16, fontWeight: '700' },
  discount: { marginTop: 3, color: '#0a7a42', fontSize: 12 }
});