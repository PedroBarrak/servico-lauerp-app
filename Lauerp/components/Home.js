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
import { YellowBox } from 'react-native-web';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/lauerp-logo.png')}
        style={styles.logo}
        resizeMode="contain"
        />
        <Text style={styles.headerTexto}>HOME ADMINISTRADOR</Text>
      </View>

      <View style={styles.barratopo}>
        <Text style={styles.topotexto}>Data de Relatório Mensal</Text>
        <Text style={styles.topodata}>15/06</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Substitua por gradiente se quiser
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  headerTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  barratopo: {
    backgroundColor: '#FACC15',
    height: 42,
    borderRadius: 4,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  topotexto: {
    fontWeight: 'bold',
    color: '#000',
  },
  topodata: {
    fontWeight: 'bold',
    color: '#000',
  },
});

export default function Home() {


  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/lauerp-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.titulo}>Pagina Inicia Administrador</Text>
      <View style={styles.barratopo}>
        <Text style={styles.topotexto}>Data de Relatório Mensal</Text>
        <Text style={styles.topodata}>15/06</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // ou gradiente se estiver usando
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  topBar: {
    backgroundColor: '#FACC15',
    height: 42,
    borderRadius: 4,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  topBarText: {
    fontWeight: 'bold',
    color: '#000',
  },
  topBarDate: {
    fontWeight: 'bold',
    color: '#000',
  },
});
