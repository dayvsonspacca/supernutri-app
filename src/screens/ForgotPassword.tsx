import { View, Text, TouchableOpacity, TextInput, ImageBackground } from "react-native";

import Container from "../components/Container";
import Form from "../components/Form";

import theme from "../styles/theme";
import form from "../styles/form";
import global from "../styles/global";

export default function ForgotPassword({ navigation }) {
  return (
    <ImageBackground source={ require('../assets/images/forgot-password-bg.png') } resizeMode='cover' style={{ flex:1, width:'100%', height: '100%' }}> 
      <Container>
        <Form title="ESQUECI MINHA SENHA" size='50%'>

          <Text style={[global.label, { textAlign: "center"}]}>Para redefinir sua senha, informe sua conta do e-mail</Text>

          <View style={global.line}></View>

          <View style={form.inputContainer}>
            <Text style={global.label}>E-mail</Text>
            <TextInput secureTextEntry={true} style={form.input}></TextInput>
          </View>

          <View style={global.line}></View>

          <TouchableOpacity style={global.btn}>
            <Text style={{ fontSize: theme.font.md }}>Continuar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={[form.link, { marginTop: 10}]}>Cancelar</Text></TouchableOpacity>

        </Form>
      </Container>
    </ImageBackground>
  );
}
