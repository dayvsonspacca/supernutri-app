import { Text, View } from "react-native";

import global from "../styles/global";
import header from "../styles/header";

export default function Header (props:HeaderProps ){

    return (
        <View style={header.container}>
            <Text style={header.title}>{props.title}</Text>
        </View>
    );
}