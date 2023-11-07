import { StyleSheet } from "react-native";

export const colors = {
    default: '#000000',
    purple: '#5856D6',
    yellow: '#F39F5A',
    white: 'white',
    pink: '#E5989B',
    primary_blue: '#2596CF',
    second_blue: '#8FB8CA',
}

export const styles = StyleSheet.create({
    globalmargin: {
        marginHorizontal: 20,
        alignItems: 'center',
        marginTop: 80
    },
    title: {
        fontSize: 30,
        marginBottom: 40,
        color: 'black',
        fontWeight: 'bold',
    },
    bigButton: {
        width: 100,
        height: 100,
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: colors.default,
        justifyContent: 'center',
        marginRight: 10,
    },
    bigButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    titleArguments: {
        alignSelf: 'center',
        marginBottom: 40,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20
    },
    bodyJson: {
        fontSize: 30,
        color: 'black',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    avatarContainer: {
        marginTop: 20,
        alignItems: 'center'
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 30,
    },
    menuBtn: {
      marginVertical: 10
    },
    menuText: {
        fontSize: 18
    },
});