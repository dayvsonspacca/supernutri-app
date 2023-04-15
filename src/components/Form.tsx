import { View, Text } from "react-native";
import { global } from "../styles/global";

export default function Form(props: FormProps) {
    return (
        <View style={[global.formContainer, { height: props.size} ]}>
            <Text style={global.title}>{props.title}</Text>
            {props.children}
        </View>
    );
}