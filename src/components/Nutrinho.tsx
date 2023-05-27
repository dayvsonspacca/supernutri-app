import { View, Text, TouchableOpacity, Image } from "react-native";

import nutrinhos from '../styles/nutrinho'

import bananoide from '../assets/images/nutrinhos/bananoide.png';
import laranjita from '../assets/images/nutrinhos/laranjita-2.png';
import tomatelo  from '../assets/images/nutrinhos/tomatelo.png';
import moranguita  from '../assets/images/nutrinhos/moranguita.png';
import limaozord  from '../assets/images/nutrinhos/limaozord.png';
import alhinho  from '../assets/images/nutrinhos/alhinho.png';
import pimentel  from '../assets/images/nutrinhos/pimentel.png';

export default function Nutrinho(props: NutrinhoProps) {

    const nutrinhosImages = {
        'tomatelo':  tomatelo,
        'laranjita': laranjita,
        'bananoide': bananoide,
        'moranguita': moranguita,
        'limaozord': limaozord,
        'alhinho': alhinho,
        'pimentel': pimentel,
    }

    return(
        <View style={nutrinhos.nutrinhoContainer}>
             <Image style={{ width: 80, height: 80}} source={nutrinhosImages[props.image]}/>
             <View style={nutrinhos.infoContainer}>
                 <Text style={nutrinhos.title}>{props.nome}</Text>
                 <Text style={nutrinhos.descricao}>{props.desc}</Text>
             </View>
        </View>
    );
}