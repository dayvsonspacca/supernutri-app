import { TextInput } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

import Container from "../components/Container";
import Form from "../components/Form";

import theme from "../styles/theme";
import form from "../styles/form";
import { global } from "../styles/global";

export default function Login() {
  return (
    <Container>
      <Form title="CONECTE-SE">

      <View style={global.inputContainer}>
          <Text style={global.label}>E-mail</Text>
          <TextInput keyboardType="email-address" style={global.input}></TextInput>
      </View>
      <View style={global.inputContainer}>
          <Text style={global.label}>Senha</Text>
          <TextInput secureTextEntry={true} style={global.input}></TextInput>
      </View>

      <View style={global.line}></View>

      <TouchableOpacity style={global.btn}>
        <Text style={{ fontSize: theme.font.md }}>Conectar</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: theme.font.md, marginVertical: 5 }}>Ou entrar através</Text>

      <View style={form.methodsContianer}>
        <TouchableOpacity style={form.method}><Icon name="google" size={50} color='black' /></TouchableOpacity>
        <TouchableOpacity style={form.method}><Icon name="facebook-square" size={50} color='black' /></TouchableOpacity>
      </View>

      <TouchableOpacity><Text style={form.link}>Esqueci minha senha</Text></TouchableOpacity>

      <Text style={{ fontSize: theme.font.smd, marginTop: 20}}>Não possui uma conta? <TouchableOpacity><Text style={form.link}>Cadastre-se</Text></TouchableOpacity></Text>
      </Form>
    </Container>
  );
}