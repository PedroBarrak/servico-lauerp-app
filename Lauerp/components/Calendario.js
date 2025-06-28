import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
  ],
  monthNamesShort: [
    'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
    'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez',
  ],
  dayNames: [
    'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado',
  ],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  today: 'Hoje',
};

const hoje = new Date();
const dia = String(hoje.getDate()).padStart(2, '0');
const mes = String(hoje.getMonth() + 1).padStart(2, '0');
const dataAtual = `${dia}/${mes}`;

export default function Calendario() {
  const [eventos, setEventos] = useState([
    { id: '1', data: '24/04', descricao: 'Treino Handball' },
  ]);

  return (
    <View style={estilos.contaiWner}>
      <View style={estilos.cabecalho}>
        <Image
          source={require('../assets/lauerp-logo.png')}
          style={estilos.logo}
          resizeMode="contain"
        />
        <Text style={estilos.titulocabecalho}>Calendario</Text>
      </View>

      <View style={estilos.barraTopo}>
        <Text style={estilos.textoTopo}>Data de Relatório Mensal</Text>
        <Text style={estilos.dataTopo}>{dataAtual}</Text>
      </View>

      <View style={estilos.fundocalendario}>
        <Calendar
          style={estilos.calendario}
          theme={{
            backgroundColor: '#e5e5e5',
            calendarBackground: '#e5e5e5',
            arrowColor: '#000',
            monthTextColor: '#000',
            dayTextColor: '#000',
            todayTextColor: '#DC2626',
            textDisabledColor: '#a1a1a1',
            textSectionTitleColor: '#000',
            selectedDayBackgroundColor: '#000',
            selectedDayTextColor: '#fff',
          }}
          onDayPress={(day) => console.log('Dia selecionado:', day.dateString)}
        />
      </View>

      <Text style={estilos.tituloEventos}>Eventos Marcados</Text>
      <FlatList
        data={eventos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={estilos.eventoItem}>
            <Text style={estilos.eventoTexto}>
              {item.data} - {item.descricao}
            </Text>
            <AntDesign name="down" size={16} color="black" />
          </View>
        )}
      />

      <TouchableOpacity style={estilos.botaoFlutuante}>
        <AntDesign name="plus" size={28} color="#000" />
      </TouchableOpacity>
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
    color: '#000',
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
  fundocalendario: {
    backgroundColor: '#e5e5e5',
    borderRadius: 16,
    padding: 5,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  calendario: {
    backgroundColor: '#e5e5e5',
    borderRadius: 16,
    fontWeight: 800,
  },
  tituloEventos: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  eventoItem: {
    backgroundColor: '#FACC15',
    borderRadius: 4,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  eventoTexto: {
    fontWeight: 'bold',
  },
  botaoFlutuante: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#FACC15',
    width: 55,
    height: 55,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
});

