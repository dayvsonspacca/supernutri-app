import { Text, View, Image, TouchableOpacity } from "react-native";

import crianca from "../styles/crianca";
import theme from "../styles/theme";

export default function Crianca ( props:CriancaProps ){
    return (
        <View style={crianca.container}>
            <View style={crianca.imgContainer}>
                <Image source={ require('../assets/images/enzo.png') } style={{width: 60, height: 60, backgroundColor: theme.colors.primary, marginLeft: 10, borderRadius: 50}} />
            </View>
            <View style={crianca.actionsContainer}>
                <View style={crianca.nameContianer}>
                    <Text style={crianca.name}>{props.nome}</Text>
                </View>
                <View style={crianca.optContainer}>
                    <TouchableOpacity style={crianca.opt}><Image source={require('../assets/images/indicadores.png')}/></TouchableOpacity>
                    <TouchableOpacity style={crianca.opt}><Image source={require('../assets/images/joystick.png')}/></TouchableOpacity>
                </View>
            </View>
        </View>
    );
}