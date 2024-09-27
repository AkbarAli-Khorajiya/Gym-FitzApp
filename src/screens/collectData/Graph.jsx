import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Graph = ({ navigation }) => {
    return (
        <View onPress={() => (navigation.navigate('initialScreen'))}>
            <Text>Graph</Text>
        </View>
    )
}

export default Graph

const styles = StyleSheet.create({})