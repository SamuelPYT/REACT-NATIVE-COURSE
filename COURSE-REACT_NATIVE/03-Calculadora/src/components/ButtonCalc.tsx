import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    text: string;
    color?: string;
    ancho?: boolean;
    accion: ( numeroTexto: string ) => void; 
}

export const ButtonCalc = ({ text, color = '#2D2D2D', ancho = false, accion }: Props) => {
    return (
        <TouchableOpacity onPress={ () => accion(text)} >
            <View style={{
                ...styles.button,
                backgroundColor: color,
                width: (ancho) ? 180 : 80
            }}
            >
                <Text style={{
                    ...styles.textButton,
                    color: (color === '#9B9B9B') ? 'black' : 'white'
                }}
                > {text} </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 80,
        height: 80,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,

    },
    textButton: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '300',
    }
});