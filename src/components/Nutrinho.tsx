import { View, Text, TouchableOpacity, Image } from "react-native";

import nutrinhos from '../styles/nutrinho'

export default function Nutrinho(props: NutrinhoProps) {
    const image = '../assets/images/nutrinhos/' + props.image + '.png';
    console.log(require(image))
    return(
        <View style={nutrinhos.nutrinhoContainer}>
             {/* <Image source={require(image)}/>
             <View style={nutrinhos.infoContainer}>
                 <Text style={nutrinhos.title}>{props.nome}</Text>
                 <Text style={nutrinhos.descricao}>{props.desc}</Text>
             </View> */}
        </View>
    );
}