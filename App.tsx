import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import ForgotPassword from "./src/screens/ForgotPassword";
import AreaResponsavel from "./src/screens/AreaResponsavel";
import CadastroPequeno from "./src/screens/CadastroPequeno";
import Jogos from "./src/screens/Jogos";
import AreaCriancas from "./src/screens/AreaCriancas";
import Nutrinhos from "./src/screens/Nutrinhos";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login"            options={{ headerShown: false }} component={Login} />
        <Stack.Screen name="Register"         options={{ headerShown: false }} component={Register} />
        <Stack.Screen name="ForgotPassword"   options={{ headerShown: false }} component={ForgotPassword} />
        <Stack.Screen name="AreaResponsavel"  options={{ headerShown: false }} component={AreaResponsavel} />
        <Stack.Screen name="CadastroPequeno"  options={{ headerShown: false }} component={CadastroPequeno} />
        <Stack.Screen name="Jogos"            options={{ headerShown: false }} component={Jogos} />
        <Stack.Screen name="AreaCriancas"     options={{ headerShown: false }} component={AreaCriancas} />
        <Stack.Screen name="Nutrinhos"        options={{ headerShown: false }} component={Nutrinhos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
