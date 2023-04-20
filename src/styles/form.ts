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
    input: {
        backgroundColor: '#fff',
        height: 40,
        margin: 10
    },
    inputContainer: {
        width: '95%',
    },
    formContainer: {
        backgroundColor: theme.colors.primary,
        borderRadius: 10,
        width: '90%',
        height: '70%',
        alignItems: "center",
    },
    link: {
        color: 'blue',
        fontSize: theme.font.smd
    }
});

export default form;