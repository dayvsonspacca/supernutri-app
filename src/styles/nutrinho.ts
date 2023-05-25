import { StyleSheet } from "react-native";
import theme from "./theme";

const nutrinhos = StyleSheet.create({
    title: {
        fontSize: theme.font.md,
        fontWeight: "bold",
    },
    descricao: {
        fontSize: theme.font.xs,
    },
    nutrinhoContainer: {
        width: '90%',
        backgroundColor: theme.colors.secondary,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 25,
        padding: 10,
        marginTop: 10
    },
    infoContainer: {
        flex:1
    }
});

export default nutrinhos;