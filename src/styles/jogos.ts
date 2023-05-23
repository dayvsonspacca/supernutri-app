import { StyleSheet } from "react-native";
import theme from "./theme";

const jogos = StyleSheet.create({
    jogosContainer: {
        width: '90%',
        backgroundColor: theme.colors.primary,
        borderRadius: 25,
    },
    jogoContainer: {
        justifyContent: "center",
        alignItems: 'center',
        height: 100,
        width: '90%',
        backgroundColor: theme.colors.secondary,
        borderRadius: 25,
        marginTop: 20
    },
    title: {
        fontSize: theme.font.md,
        fontWeight: "bold",
    },
});

export default jogos;