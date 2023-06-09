// CadastroPequeno.js

import { TextInput, Alert, Image } from "react-native";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import React, { useState } from "react";
import Icon from 'react-native-vector-icons/AntDesign';

import Form from "../components/Form";
import Container from "../components/Container";
import Header from "../components/Header";

import global from "../styles/global";
import theme from "../styles/theme";
import form from "../styles/form";
import crianca from "../styles/crianca";

import { api } from '../services/api';

export default function CadastroPequeno({ navigation }) {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const handleSubmit = async () => {
    // Verificar se os campos numéricos são preenchidos corretamente
    if (!isValidNumber(idade) || !isValidNumber(peso) || !isValidNumber(altura)) {
      Alert.alert('Erro', 'Por favor, preencha os campos numéricos corretamente.');
      return;
    }

    try {
      const response = await api.post('/crianca/add', {
        nome: nome,
        idade: parseInt(idade),
        peso: parseFloat(peso),
        altura: parseFloat(altura)
      });

      console.log(response.data);
      navigation.navigate('AreaResponsavel'); // Redireciona para a página de Área do Responsável após o cadastro
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Ocorreu um erro ao cadastrar a criança. Por favor, tente novamente mais tarde.');
    }
  };

  // verificar se o valor é um número válido
  const isValidNumber = (value) => {
    return !isNaN(parseFloat(value)) && isFinite(value);
  };

  return (
    <ImageBackground source={require('../assets/images/criar-perfis-bg.png')} resizeMode='cover' style={{ flex: 1, width: '100%', height: '100%' }}>
      <Header title='CADASTRE SEU PEQUENO'>
        <TouchableOpacity style={{ marginBottom: 20 }} onPress={() => navigation.navigate('AreaResponsavel')}>
          <Icon name="arrowleft" size={60} color='black' />
        </TouchableOpacity>
      </Header>
      <Container>
        <Form size="100%">
          <View style={[form.inputContainer, { marginTop: 30 }]}>
            <Text style={global.label}>Nome</Text>
            <TextInput
              keyboardType="default"
              style={form.input}
              value={nome}
              onChangeText={(text) => setNome(text)}
            />
          </View>
          <View style={form.inputContainer}>
            <Text style={global.label}>Idade</Text>
            <TextInput
              keyboardType="numeric"
              style={form.input}
              value={idade}
              onChangeText={(text) => setIdade(text)}
            />
          </View>
          <View style={form.inputContainer}>
            <Text style={global.label}>Peso</Text>
            <TextInput
              keyboardType="numeric"
              style={form.input}
              value={peso}
              onChangeText={(text) => setPeso(text)}
            />
          </View>
          <View style={form.inputContainer}>
            <Text style={global.label}>Altura</Text>
            <TextInput
              keyboardType="numeric"
              style={form.input}
              value={altura}
              onChangeText={(text) => setAltura(text)}
            />
          </View>

          <Text style={global.label}>Seu pequeno tem alguma compicação de saúde?</Text>

          <View style={global.line} />

          <TouchableOpacity style={global.btn} onPress={handleSubmit}>
            <Text style={{ fontSize: theme.font.mdl }}>Cadastrar</Text>
          </TouchableOpacity>

          <Text style={[form.link, { marginTop: 10 }]}>Por que pedimos esses dados?</Text>

          <View style={{ position: 'relative' }}>
            <Image source={require('../assets/images/nutrinhos/bananoide.png')} style={{ position: 'relative', zIndex: 2, right: 100, bottom: 100 }} />
            <Image source={require('../assets/images/nutrinhos/laranjita.png')} style={{ position: 'relative', zIndex: 2, left: 100, bottom: 100 }} />
          </View>
        </Form>
      </Container>
    </ImageBackground>
  );
}
