import { View } from "react-native";

import global from "../styles/global";

export default function Container (props:any ){

    return (
        <View style={global.container}>
            {props.children}
        </View>
    );
}