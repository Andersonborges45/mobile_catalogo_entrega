import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../store/store';

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    Alert.alert('Teste', 'O botão Entrar foi pressionado!');

    if (!email.trim() || !password.trim()) {
      Alert.alert('Validação', 'Preencha e-mail e senha.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      Alert.alert('Validação', 'Digite um e-mail válido.');
      return;
    }

    dispatch(login({ email }));
    navigation.replace('Produtos');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.brand}>CATÁLOGO</Text>

      <Text style={styles.subtitle}>
        Acesse seu catálogo de produtos
      </Text>

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
      />

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>

      <Text style={styles.hint}>
        Login demonstrativo para fins acadêmicos.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 28,
    backgroundColor: '#f7f8fa',
  },

  brand: {
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
    letterSpacing: 2,
  },

  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 28,
    marginTop: 8,
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
  },

  button: {
    backgroundColor: '#111',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },

  hint: {
    textAlign: 'center',
    color: '#888',
    marginTop: 18,
    fontSize: 12,
  },
});