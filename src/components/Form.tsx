import { View, Text } from "react-native";
import global from "../styles/global";
import form from "../styles/form";

export default function Form(props: FormProps) {
    return (
        <View style={[form.formContainer, { height: props.size} ]}>
            {
                props.title &&
                <Text style={global.title}>{props.title}</Text>
            }
            {props.children}
        </View>
    );
}