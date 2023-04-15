import { TextInput } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

import Form from "../components/Form";
import Container from "../components/Container";

import { global } from "../styles/global";
import theme from "../styles/theme";
import form from "../styles/form";

export default function App() {
  return (
    <Container>
      <Form title="CADASTRO">

        <View style={global.inputContainer}>
          <Text style={global.label}>Nome</Text>
          <TextInput keyboardType="default" style={global.input}></TextInput>
        </View>
        <View style={global.inputContainer}>
          <Text style={global.label}>Senha</Text>
          <TextInput secureTextEntry={true} style={global.input}></TextInput>
        </View>
        <View style={global.inputContainer}>
          <Text style={global.label}>Confirmar senha</Text>
          <TextInput keyboardType="email-address" style={global.input}></TextInput>
        </View>
        <View style={global.inputContainer}>
          <Text style={global.label}>E-mail</Text>
          <TextInput secureTextEntry={true} style={global.input}></TextInput>
        </View>

        <TouchableOpacity style={global.btn}>
          <Text style={{ fontSize: theme.font.md }}>Cadastrar</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: theme.font.smd, marginTop: 20}}>Já possui uma conta? <TouchableOpacity><Text style={form.link}>Conecte-se</Text></TouchableOpacity></Text>

      </Form>
    </Container>
  );
}
