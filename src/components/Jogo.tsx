import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

import jogos from "../styles/jogos";

import monteprato from "../assets/images/bg-monteprato.png";
import chuvacomida from "../assets/images/bg-chuvacomida.png";
import pinte from "../assets/images/bg-pinte.png";

export default function Jogo(props: JogoProps ) {

    const gamesImages = {
        'monteprato'  : monteprato,
        'chuvacomida' : chuvacomida,
        'pinte'       : pinte,
    };

    if (!props.bloqueado) {
        return(
            <TouchableOpacity style={jogos.jogoContainer}>
                <ImageBackground source={ gamesImages[props.img] } resizeMode='contain' style={{ flex:1, width:'100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={jogos.title}>{props.nome}</Text>
                </ImageBackground>
            </TouchableOpacity>
        );
    } else {
        return(
            <View style={[jogos.jogoContainer, { opacity: 0.5}]}>
                <ImageBackground source={ gamesImages[props.img] } resizeMode='contain' style={{ flex:1, width:'100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={[jogos.title, {position: "absolute"}]}>{props.nome}</Text>
                    <Icon name='lock' size={90} color="black"></Icon>
                </ImageBackground>
            </View>
        );
    }
}