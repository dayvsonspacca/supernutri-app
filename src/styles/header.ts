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
    backContainer: {
        backgroundColor: theme.colors.primary,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 35,
        justifyContent: "space-around"
    },
    title: {
        fontSize: theme.font.md,
        fontWeight: "bold",
        marginBottom: 20,
    },
});

export default header;