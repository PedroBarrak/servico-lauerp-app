import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  ScrollView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const hoje = new Date();
const dia = String(hoje.getDate()).padStart(2, '0');
const mes = String(hoje.getMonth() + 1).padStart(2, '0');
const dataAtual = `${dia}/${mes}`;

export default function ChamadaJogadores() {
  const [jogadores, setJogadores] = useState([
    { id: '1', nome: 'Aluno1', selecionado: true },
    { id: '2', nome: 'Aluno2', selecionado: false },
    { id: '3', nome: 'Aluno3', selecionado: false },
    { id: '4', nome: 'Aluno4', selecionado: false },
    { id: '5', nome: 'Aluno5', selecionado: false },
    { id: '6', nome: 'Aluno6', selecionado: false },
    { id: '7', nome: 'Aluno7', selecionado: false },
    { id: '8', nome: 'Aluno8', selecionado: false },
    { id: '9', nome: 'Aluno9', selecionado: false },
    { id: '10', nome: 'Aluno10', selecionado: false },
    { id: '11', nome: 'Aluno11', selecionado: false },
    { id: '12', nome: 'Aluno12', selecionado: false },
  ]);

  const [textoPesquisa, setTextoPesquisa] = useState('');

  const toggleJogador = (id) => {
    setJogadores(jogadores.map(jogador => 
      jogador.id === id 
        ? { ...jogador, selecionado: !jogador.selecionado }
        : jogador
    ));
  };

  const jogadoresFiltrados = jogadores.filter(jogador =>
    jogador.nome.toLowerCase().includes(textoPesquisa.toLowerCase())
  );

  const renderJogador = ({ item }) => (
    <TouchableOpacity 
      style={estilos.itemJogador}
      onPress={() => toggleJogador(item.id)}
    >
      <View style={estilos.checkbox}>
        {item.selecionado && (
          <AntDesign name="close" size={12} color="#000" />
        )}
      </View>
      <Text style={estilos.nomeJogador}>{item.nome}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={estilos.container}>
      <View style={estilos.cabecalho}>
        <Image
          source={require('../assets/lauerp-logo.png')}
          style={estilos.logo}
          resizeMode="contain"
        />
        <Text style={estilos.titulocabecalho}>Chamada - Jogadores</Text>
      </View>

      <View style={estilos.barraTopo}>
        <Text style={estilos.textoTopo}>Data de Relatório Mensal</Text>
        <Text style={estilos.dataTopo}>{dataAtual}</Text>
      </View>

      <View style={estilos.containerPesquisa}>
        <TextInput
          style={estilos.campoPesquisa}
          placeholder="13/05    Pesquisar"
          placeholderTextColor="#666"
          value={textoPesquisa}
          onChangeText={setTextoPesquisa}
        />
        <TouchableOpacity style={estilos.botaoOK}>
          <Text style={estilos.textoOK}>OK</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={estilos.listaContainer} showsVerticalScrollIndicator={false}>
        <FlatList
          data={jogadoresFiltrados}
          keyExtractor={(item) => item.id}
          renderItem={renderJogador}
          scrollEnabled={false}
        />
      </ScrollView>

      <View style={estilos.containerBotoes}>
        <TouchableOpacity style={estilos.botaoEditar}>
          <Text style={estilos.textoBotao}>EDITAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.botaoOutrasDatas}>
          <Text style={estilos.textoBotao}>Outras datas</Text>
        </TouchableOpacity>
      </View>
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
  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  titulocabecalho: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',W
  },
  barraTopo: {
    backgroundColor: '#FACC15',
    height: 42,
    borderRadius: 4,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  textoTopo: {
    fontWeight: 'bold',
    color: '#000',
  },
  dataTopo: {
    fontWeight: 'bold',
    color: '#000',
  },
  containerPesquisa: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 10,
  },
  campoPesquisa: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: '#000',
  },
  botaoOK: {
    backgroundColor: '#E5E5E5',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  textoOK: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16,
  },
  listaContainer: {
    flex: 1,
    marginBottom: 20,
  },
  itemJogador: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#000',
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  nomeJogador: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  containerBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
    paddingBottom: 20,
  },
  botaoEditar: {
    flex: 1,
    backgroundColor: '#FACC15',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
  },
  botaoOutrasDatas: {
    flex: 1,
    backgroundColor: '#FACC15',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
  },
  textoBotao: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16,
  },
});