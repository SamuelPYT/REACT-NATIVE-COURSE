import React from "react";
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View, Platform } from "react-native";

interface Props {
    title: string;
    position?: 'bl' | 'br';
    onPress: () => void;
}

export const ButtonFAB = ({ title, position = 'br', onPress }: Props) => {
    const android = () => {
        return (
            <View style={[
                styles.fabLocation,
                (position === 'bl') ? styles.left : styles.right]}
            >
                <TouchableNativeFeedback onPress={onPress}
                    background={TouchableNativeFeedback.Ripple('#C0D6D4', true, 30)}>
                    <View style={styles.fab}>
                        <Text style={styles.fabText}> {title} </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    const ios = () => {
        return (
            <TouchableOpacity
                onPress={onPress}
                activeOpacity={0.75}
                style={[
                    styles.fabLocation,
                    (position === 'bl') ? styles.left : styles.right]}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}> {title} </Text>
                </View>
            </TouchableOpacity>
        )

    }

    return (Platform.OS === 'ios') ? ios() : android();


}

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 120,
    },
    right: {
        right: 40
    },
    left: {
        left: 40
    },
    fab: {
        backgroundColor: '#10AEA4',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,
    },
    fabText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
}); 