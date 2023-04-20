import { StyleSheet } from "react-native";
import theme from "./theme";

const global = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.secondary,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: theme.font.mdl,
        fontWeight: "bold",
        marginVertical: 30
    },
    label: {
        fontSize: theme.font.sm,
        marginHorizontal: 10,
    },
    line: {
        height: 3,
        width: '90%',
        backgroundColor: 'black',
        borderRadius: 10,
        marginVertical: 10,
    },
    btn: {
        marginVertical: 10,
        width: '70%',
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: "center",
        alignItems: 'center',
    }
});

export default global;