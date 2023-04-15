import { StyleSheet } from "react-native"
import theme from "./theme";

const form = StyleSheet.create({
    methodsContianer: {
        marginVertical: 10,
        width: '60%',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    method: {
        backgroundColor: '#fff',
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 10
    },
    link: {
        color: 'blue',
        fontSize: theme.font.smd
    }
});

export default form;