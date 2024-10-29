import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',

    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 20,

    },
    input: {
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 4,
        width: '90%',
        textAlign: 'right',
        fontSize: 20,
        marginBottom: 30,
        fontWeight: 'bold',
        padding: 15
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
        marginBottom: 15,
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 30,
        padding: 10

    },
    buttonstyle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'


    },
    buttontext: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    }
});

export default styles;