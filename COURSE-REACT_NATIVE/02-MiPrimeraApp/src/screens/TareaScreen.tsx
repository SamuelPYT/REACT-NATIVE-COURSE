import { StyleSheet, View } from "react-native"

export const TareaScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada} />
            <View style={styles.cajaNaranja} />
            <View style={styles.cajaAzul} /> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cajaMorada: {
        height: 100,
        width: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
    },
    cajaNaranja: {
        height: 100,
        width: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
    },
    cajaAzul: {
        height: 100,
        width: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
    },
});

