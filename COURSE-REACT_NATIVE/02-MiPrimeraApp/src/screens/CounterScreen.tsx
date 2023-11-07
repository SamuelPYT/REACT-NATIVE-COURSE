import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { ButtonFAB } from "../components/ButtonFAB";

export const CounterScreen = () => {
    const [counter, setCounter] = useState(10);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Contador: {counter}
            </Text>        
            <ButtonFAB title="-1" position="bl" onPress={() => setCounter(counter - 1)}/>
            <ButtonFAB title="+1" position="br" onPress={() => setCounter(counter + 1)}/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center'
    },
    title: {
        fontSize: 45,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black'
    },
}); 
