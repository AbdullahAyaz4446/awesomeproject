import { StyleSheet } from "react-native";
import { create } from "react-test-renderer";

const styles = StyleSheet.create({
    header: {
        borderWidth: 2,

        alignSelf: 'center',
        margin: 11,
        padding: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 60,
        marginTop: 20,
    },
});

export default styles;