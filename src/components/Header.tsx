import { Text, View } from "react-native";

import header from "../styles/header";

export default function Header (props:HeaderProps ){
    return (
        <View style={props.children ? header.backContainer : header.container}>
            {props.children}
            <View style={{flex:1, justifyContent:'center'}}>
                <Text style={header.title}>{props.title}</Text>
            </View>
        </View>
    );
}