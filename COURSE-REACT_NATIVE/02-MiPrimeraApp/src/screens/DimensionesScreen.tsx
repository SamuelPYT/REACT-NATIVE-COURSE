import { StyleSheet, Text, View, Dimensions, useWindowDimensions } from "react-native"

export const DimensionesScreen = () => {
    const {width, height} = useWindowDimensions(); 
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.cajaMorada} />
                <View />
            </View>
            <Text style={styles.title}> W: {width}, H: {height} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 600,
        backgroundColor: 'red',
    },
    cajaMorada: {
        backgroundColor: '#5856D6',
        width: '50%',
        height: '50%',
        // marginVertical: 130,
        // marginHorizontal: 105,
        position: 'absolute',
        bottom: 0,
    },
    cajaNaranja: {

    },
    title: {
        textAlign: 'center',
        fontSize: 25
    }
}); 
