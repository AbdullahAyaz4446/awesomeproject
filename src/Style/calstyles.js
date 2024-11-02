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
        padding: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
        marginBottom: 15,
        borderColor: 'black',
       
        padding: 10

    },
    buttonstyle: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#E7E9E8',
        alignItems: 'center',
        justifyContent: 'center'


    },
    buttontext: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    }
});

export default styles;