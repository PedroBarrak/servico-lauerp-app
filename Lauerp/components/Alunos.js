import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

export default function StatusAlunos() {
  const mesAtual = 'Março 2025';

  const dados = [
    { id: '1', nome: 'Ana Laura', mensalidade: true, presenca: 80 },
    { id: '2', nome: 'Vitor Hugo', mensalidade: false, presenca: 80 },
    { id: '3', nome: 'Alessandra', mensalidade: true, presenca: 60 },
    { id: '4', nome: 'Ana Laura', mensalidade: false, presenca: 30 },
  ];

  const corPresenca = (valor) => {
    if (valor >= 80) return '#4ade80'; 
    if (valor >= 50) return '#facc15';
    return '#ef4444'; 
  };

  return (
    <View style={estilos.container}>
      <View style={estilos.header}>
        <Image
          source={require('../assets/lauerp-logo.png')}
          style={estilos.logo}
          resizeMode="contain"
        />
        <Text style={estilos.titulo}>Status dos alunos</Text>
      </View>

      <Text style={estilos.mes}>{mesAtual}</Text>

      <View style={estilos.tabelaCabecalho}>
        <Text style={estilos.cabecalhoNome}></Text>
        <Text style={estilos.cabecalho}>Mensalidade</Text>
        <Text style={estilos.cabecalho}>Presença</Text>
      </View>

      <FlatList
        data={dados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={estilos.linhaAluno}>
            <Text style={estilos.nome}>{item.nome}</Text>

            <View
              style={[
                estilos.tag,
                { backgroundColor: item.mensalidade ? '#4ade80' : '#ef4444' },
              ]}
            >
              <Text style={estilos.tagTexto}>
                {item.mensalidade ? 'Pago' : 'Não Pago'}
              </Text>
            </View>

            <View
              style={[
                estilos.tag,
                { backgroundColor: corPresenca(item.presenca) },
              ]}
            >
              <Text style={estilos.tagTexto}>{item.presenca}%</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  mes: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  tabelaCabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    marginBottom: 6,
  },
  cabecalhoNome: {
    flex: 1.5,
  },
  cabecalho: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  linhaAluno: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 6,
  },
  nome: {
    flex: 1.5,
    fontSize: 14,
  },
  tag: {
    flex: 1,
    paddingVertical: 4,
    borderRadius: 6,
    alignItems: 'center',
  },
  tagTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
