import { TextInput } from "react-native";
import { View, Text, TouchableOpacity , ImageBackground } from "react-native";

import Form from "../components/Form";
import Container from "../components/Container";

import global from "../styles/global";
import theme from "../styles/theme";
import form from "../styles/form";

export default function Register({ navigation }) {
  return (
    <ImageBackground source={ require('../assets/images/register-bg.png') } resizeMode='cover' style={{ flex:1, width:'100%', height: '100%' }}> 
      <Container>
        <Form title="CADASTRO">

          <View style={form.inputContainer}>
            <Text style={global.label}>Nome</Text>
            <TextInput keyboardType="default" style={form.input}></TextInput>
          </View>
          <View style={form.inputContainer}>
            <Text style={global.label}>Senha</Text>
            <TextInput secureTextEntry={true} style={form.input}></TextInput>
          </View>
          <View style={form.inputContainer}>
            <Text style={global.label}>Confirmar senha</Text>
            <TextInput keyboardType="email-address" style={form.input}></TextInput>
          </View>
          <View style={form.inputContainer}>
            <Text style={global.label}>E-mail</Text>
            <TextInput secureTextEntry={true} style={form.input}></TextInput>
          </View>

          <TouchableOpacity style={global.btn}>
            <Text style={{ fontSize: theme.font.md }}>Cadastrar</Text>
          </TouchableOpacity>

          <Text style={{ fontSize: theme.font.smd, marginTop: 20}}>Já possui uma conta? <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={form.link}>Conecte-se</Text></TouchableOpacity></Text>

        </Form>
      </Container>
    </ImageBackground>
  );
}
