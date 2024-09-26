import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({ title, navigation, screenName, }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(screenName)}
            style={styles.btn}>
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#fff',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 4
    },
    btnText: {
        color: "#000",
        fontWeight: "500",
        fontSize: 18
    },
})