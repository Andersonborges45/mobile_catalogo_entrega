import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { getProductById } from '../services/api';

export default function ProductDetailsScreen({ route }) {
  const { id } = route.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then(setProduct).catch(() => Alert.alert('Erro', 'Não foi possível carregar os detalhes.'));
  }, [id]);

  if (!product) return <View style={styles.center}><ActivityIndicator size="large" /></View>;

  return (
  <ScrollView contentContainerStyle={styles.container}>
    <Image
      source={{ uri: product.images?.[0] || product.thumbnail }}
      style={styles.image}
    />

    <Text style={styles.title}>{product.title}</Text>

    <Text style={styles.description}>{product.description}</Text>

    <View style={styles.priceBox}>
      <Text style={styles.price}>
        {Number(product.price).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </Text>

      <Text style={styles.discount}>
        {product.discountPercentage?.toFixed(0)}% de desconto
      </Text>
    </View>

    <Text style={styles.meta}>Categoria: {product.category}</Text>

    <Text style={styles.meta}>Avaliação: {product.rating}</Text>
  </ScrollView>
);
}
const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  container: { padding: 18, backgroundColor: '#fff' },
  image: { width: '100%', height: 290, borderRadius: 16, resizeMode: 'contain', backgroundColor: '#f4f4f4' },
  title: { fontSize: 25, fontWeight: '800', marginTop: 20 },
  description: { fontSize: 15, color: '#555', lineHeight: 22, marginTop: 10 },
  priceBox: { marginTop: 20, padding: 16, borderRadius: 14, backgroundColor: '#f5f6f8' },
  price: { fontSize: 24, fontWeight: '800' },
  discount: { marginTop: 5, color: '#0a7a42', fontWeight: '700' },
  meta: { marginTop: 14, color: '#666' }
});