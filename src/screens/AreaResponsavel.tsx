// AreaResponsavel.js

import React, { useState, useEffect } from 'react';
import { View, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import Container from '../components/Container';
import Crianca from '../components/Crianca';
import Header from '../components/Header';

import criancaStyle from '../styles/crianca';
import globalStyle from '../styles/global';
import theme from '../styles/theme';

import { api } from '../services/api';

export default function AreaResponsavel({ navigation }) {
  const [criancas, setCriancas] = useState([]);
  const [fotoIndex, setFotoIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      carregarCriancas();
    });

    return unsubscribe;
  }, [navigation]);

  const carregarCriancas = async () => {
    try {
      const response = await api.get('/crianca/');
      setCriancas(response.data.criancas);
    } catch (error) {
      console.error(error);
    }
  };

  const alterarFotoIndex = () => {
    setFotoIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };

  return (
    <ImageBackground
      source={require('../assets/images/area-responsavel-bg.png')}
      resizeMode="cover"
      style={{ flex: 1, width: '100%', height: '100%' }}
    >
      <Header title="VEJA SEUS PEQUENOS" />
      <Container>
        <View style={[globalStyle.content, { height: '90%', alignItems: 'center' }]}>
          {criancas.map((crianca, index) => (
            <Crianca
              navigation={navigation}
              key={crianca.id}
              nome={crianca.nome}
              img={index % 2 === fotoIndex ? 'enzo' : 'maria'}
            />
          ))}
          <TouchableOpacity
            style={criancaStyle.container}
            onPress={() => navigation.navigate('CadastroPequeno')}
          >
            <View style={criancaStyle.plusContainer}>
              <View style={{ borderRadius: 50, backgroundColor: theme.colors.primary }}>
                <Icon name="plus" size={80} color={theme.colors.secondary} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </Container>
    </ImageBackground>
  );
}
