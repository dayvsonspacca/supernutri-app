import { View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

import jogos from "../styles/jogos";

export default function Jogo(props: JogoProps ) {

    if (!props.bloqueado) {
        return(
            <TouchableOpacity style={jogos.jogoContainer}>
                <Text style={jogos.title}>{props.nome}</Text>
            </TouchableOpacity>
        );
    } else {
        return(
            <View style={[jogos.jogoContainer, { opacity: 0.5}]}>
                <Text style={[jogos.title, {position: "absolute"}]}>{props.nome}</Text>
                <Icon name='lock' size={90} color="black"></Icon>
            </View>
        );
    }
}