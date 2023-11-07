import { StyleSheet, Text, View } from "react-native"; 

export const TextScreen = () => {
    return (
        <View style={styles.view}>
            <Text style={{ color: 'black', fontSize: 30, textAlign: 'center', fontWeight: 'bold' }}>
                REACT-NATIVE
            </Text>
        </View>
    )    
}

const styles = StyleSheet.create({
    view: {
    flex: 1,
    justifyContent: 'center',
    }
});
