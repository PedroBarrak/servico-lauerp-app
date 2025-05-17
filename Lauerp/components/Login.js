import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Alert,
  Image,
} from 'react-native';

export default function Login() {
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (!matricula || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    } else {
      Alert.alert('Sucesso', `Bem-vindo(a), ${matricula}!`);
    }
  };

  const handleForgotPassword = () => {
    Alert.alert('Recuperação de senha', 'Funcionalidade ainda não implementada.');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/lauerp-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.label}>Matrícula:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua matrícula"
        value={matricula}
        onChangeText={setMatricula}
        autoCapitalize="none"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f4f4f4',
  },
  logo: {
    width: '100%',
    height: 300,
    alignSelf: 'center',
    marginBottom: 32,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#F2BD1D',
    paddingVertical: 14,
    borderRadius: 30,
    marginTop: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '700',
  },
  forgotPassword: {
    color: '#007bff',
    fontSize: 14,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
