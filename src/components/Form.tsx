import { View, Text } from "react-native";
import { global } from "../styles/global";

export default function Form(props: FormProps) {
    return (
        <View style={global.formContainer}>
            <Text style={global.title}>{props.title}</Text>
            <View style={global.inputContainer}>
                {props.children}
            </View>
        </View>
    );
}