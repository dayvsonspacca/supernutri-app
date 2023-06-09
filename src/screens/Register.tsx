import { TextInput } from "react-native";
import { View, Text, TouchableOpacity , ImageBackground } from "react-native";
import React, { useState } from "react";

import Form from "../components/Form";
import Container from "../components/Container";

import global from "../styles/global";
import theme from "../styles/theme";
import form from "../styles/form";

import { api } from '../services/api';

export default function Register({ navigation }) {
  const [nome, setNome] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [email, setEmail] = React.useState('');

const handleSubmit = async () => {
  try {
    const response = await api.post('/responsavel/add', {
      nome: nome,
      senha: senha,
      email: email
    });

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

  return (
    <ImageBackground source={ require('../assets/images/register-bg.png') } resizeMode='cover' style={{ flex:1, width:'100%', height: '100%' }}> 
      <Container>
        <Form title="CADASTRO">

          <View style={form.inputContainer}>
            <Text style={global.label}>Nome</Text>
            <TextInput
              keyboardType="default"
              style={form.input}
              value={nome}
              onChangeText={(text) => setNome(text)}
            />
          </View>
          <View style={form.inputContainer}>
            <Text style={global.label}>Senha</Text>
            <TextInput
              secureTextEntry={true}
              style={form.input}
              value={senha}
              onChangeText={(text) => setSenha(text)}
            />
          </View>
          <View style={form.inputContainer}>
            <Text style={global.label}>E-mail</Text>
            <TextInput
              keyboardType="email-address"
              style={form.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />

          </View>

          <TouchableOpacity style={global.btn} onPress={handleSubmit}>
            <Text style={{ fontSize: theme.font.md }}>Cadastrar</Text>
          </TouchableOpacity>


          <Text style={{ fontSize: theme.font.smd, marginTop: 20}}>Já possui uma conta? <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={form.link}>Conecte-se</Text></TouchableOpacity></Text>

        </Form>
      </Container>
    </ImageBackground>
  );
}
