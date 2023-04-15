import { TextInput } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

import Container from "../components/Container";
import Form from "../components/Form";

import theme from "../styles/theme";
import form from "../styles/form";
import { global } from "../styles/global";

export default function ForgotPassword() {
  return (
    <Container>
      <Form title="ESQUECI MINHA SENHA" size='50%'>

        <Text style={[global.label, { textAlign: "center"}]}>Para redefinir sua senha, informe sua conta do e-mail</Text>

        <View style={global.line}></View>

        <View style={global.inputContainer}>
          <Text style={global.label}>E-mail</Text>
          <TextInput secureTextEntry={true} style={global.input}></TextInput>
        </View>

        <View style={global.line}></View>

        <TouchableOpacity style={global.btn}>
          <Text style={{ fontSize: theme.font.md }}>Continuar</Text>
        </TouchableOpacity>

        <TouchableOpacity><Text style={[form.link, { marginTop: 10}]}>Cancelar</Text></TouchableOpacity>

      </Form>
    </Container>
  );
}
