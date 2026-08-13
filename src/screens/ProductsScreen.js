import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, FlatList, Pressable, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../store/store';
import ProductCard from '../components/ProductCard';
import { getProductsByCategories } from '../services/api';

const TABS = {
  Masculino: ['mens-shirts', 'mens-shoes', 'mens-watches'],
  Feminino: ['womens-bags', 'womens-dresses', 'womens-jewellery', 'womens-shoes', 'womens-watches']
};

export default function ProductsScreen({ navigation }) {
  const dispatch = useDispatch();
  const [tab, setTab] = useState('Masculino');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadProducts(selectedTab = tab) {
    try {
      setLoading(true);
      const data = await getProductsByCategories(TABS[selectedTab]);
      setProducts(data);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar os produtos. Verifique sua conexão e tente novamente.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { loadProducts(); }, [tab]);

  function handleLogout() {
    dispatch(logout());
    navigation.replace('Login');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Produtos</Text>
        <Pressable onPress={handleLogout}><Text style={styles.logout}>Sair</Text></Pressable>
      </View>
      <View style={styles.tabs}>
        {Object.keys(TABS).map(item => (
          <Pressable key={item} style={[styles.tab, tab === item && styles.activeTab]} onPress={() => setTab(item)}>
            <Text style={[styles.tabText, tab === item && styles.activeTabText]}>{item}</Text>
          </Pressable>
        ))}
      </View>
      {loading ? (
        <View style={styles.center}><ActivityIndicator size="large" /><Text style={styles.loading}>Carregando produtos...</Text></View>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <ProductCard product={item} onPress={() => navigation.navigate('Detalhes', { id: item.id })} />}
          contentContainerStyle={{ paddingBottom: 24 }}
          ListEmptyComponent={<Text style={styles.empty}>Nenhum produto encontrado.</Text>}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f7f8fa' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 },
  heading: { fontSize: 25, fontWeight: '800' },
  logout: { fontWeight: '700' },
  tabs: { flexDirection: 'row', backgroundColor: '#e9eaed', borderRadius: 12, padding: 4, marginBottom: 16 },
  tab: { flex: 1, padding: 11, alignItems: 'center', borderRadius: 9 },
  activeTab: { backgroundColor: '#fff' },
  tabText: { color: '#666', fontWeight: '600' },
  activeTabText: { color: '#111' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loading: { marginTop: 10, color: '#666' },
  empty: { textAlign: 'center', marginTop: 40, color: '#777' }
});