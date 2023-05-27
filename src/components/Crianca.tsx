import { Text, View, Image, TouchableOpacity } from "react-native";

import crianca from "../styles/crianca";
import theme from "../styles/theme";

import enzo from '../assets/images/enzo.png';
import maria from '../assets/images/maria.png';

export default function Crianca ( props:CriancaProps ){

    const kidsImages = {
        'enzo': enzo,
        'maria': maria
    }

    return (
        <View style={crianca.container}>
            <View style={crianca.imgContainer}>
                <Image source={ kidsImages[props.img] } style={{width: 60, height: 60, backgroundColor: theme.colors.primary, marginLeft: 10, borderRadius: 50}} />
            </View>
            <View style={crianca.actionsContainer}>
                <View style={crianca.nameContianer}>
                    <Text style={crianca.name}>{props.nome}</Text>
                </View>
                <View style={crianca.optContainer}>
                    <TouchableOpacity style={crianca.opt}><Image source={require('../assets/images/indicadores.png')}/></TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate('AreaCriancas')} style={crianca.opt}><Image source={require('../assets/images/joystick.png')}/></TouchableOpacity>
                </View>
            </View>
        </View>
    );
}