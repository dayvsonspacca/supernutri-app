import { StyleSheet } from "react-native";
import theme from "./theme";

const crianca = StyleSheet.create({
    container: {
        width: '90%',
        height: 100,
        backgroundColor: theme.colors.secondary,
        borderRadius: 25,
        marginTop: 15,
        flexDirection: 'row'
    },
    name: {
        fontSize: theme.font.md,
        fontWeight: "bold"
    },
    imgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionsContainer: {
        flexDirection: "column",
        width: '80%',
    },
    nameContianer: {
        alignItems: 'center',
        width: '100%',
    },
    optContainer: {
        justifyContent: 'space-around',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        flex: 1
    },
    opt: {
        backgroundColor: theme.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: 100,
        height: 50
    },
    plusContainer: {
        justifyContent:'center',
        alignItems: 'center',
        flex: 1,
    }
});

export default crianca;