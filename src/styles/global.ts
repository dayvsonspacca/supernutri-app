import { StyleSheet } from "react-native";
import theme from "./theme";

export const global = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.secondary,
        alignItems: "center",
        justifyContent: "center"
    },
    formContainer: {
        backgroundColor: theme.colors.primary,
        borderRadius: 10,
        width: '90%',
        height: '60%',
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 25
    },
    input: {
        backgroundColor: '#fff',
        width: '90%',
        height: 40,
        margin: 10
    },
    inputContainer: {
        width: '100%',
        alignItems: 'center',
    }
});