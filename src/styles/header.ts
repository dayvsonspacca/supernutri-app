import { StyleSheet } from "react-native";
import theme from "./theme";

const header = StyleSheet.create({
    container: {
        justifyContent: "flex-end",
        alignItems: 'center',
        height: '15%',
        backgroundColor: theme.colors.primary,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        marginBottom: 20
    },
    title: {
        fontSize: theme.font.md,
        fontWeight: "bold",
        marginBottom: 20
    },
});

export default header;