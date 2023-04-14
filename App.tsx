import { TextInput } from "react-native";
import { global } from "./src/styles/global";

import Container from "./src/components/Container";
import Form from "./src/components/Form";

export default function App() {
  return (
    <Container>
      <Form title="CONECTE-SE" >
        <TextInput keyboardType="email-address" style={global.input}></TextInput>
        <TextInput secureTextEntry={true} style={global.input}></TextInput>
      </Form>
    </Container>
  );
}
