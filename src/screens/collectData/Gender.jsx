import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import both from '../../assets/images/both.png'
import backArrow from '../../assets/images/backArrow.png'
import { Screen } from 'react-native-screens'


// import { SafeAreaView } from 'react-native-safe-area-context'

const Gender = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.screen} >
            <ScrollView style={styles.container}>
                <View style={styles.breadcrumb}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={backArrow} style={styles.breadcrumbImg} />
                    </TouchableOpacity>
                    <Text style={styles.breadcrumbText}>Step 1 of 8</Text>
                    <TouchableOpacity onPress={() => (navigation.navigate('Graph'))}>
                        <Text style={{ fontSize: 18 }}>Skip</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.body} >
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Choose gender</Text>
                    </View>
                    <TouchableOpacity style={styles.selectOptionActive}>
                        <Text style={styles.icon}>👩</Text>
                        <Text style={styles.optionText}>Woman</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectOption}>
                        <Text style={styles.icon}>👨</Text>
                        <Text style={styles.optionText}>Man</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectOption}>
                        <Image source={both} style={styles.img} />
                        <Text style={styles.optionText}>Gender neutral</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => (navigation.navigate('Goal'))}
            >
                <Text style={styles.btnText}>Continue</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Gender

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingVertical: 10,
        backgroundColor: "#fff",
    },
    container: {
        paddingHorizontal: 15,
        flex: 1,
    },
    breadcrumb: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    breadcrumbText: {
        fontWeight: '500',
        fontSize: 18,
        color: '#000'
    },
    body: {
        backgroundColor: '#fff',
        gap: 15,
        marginTop: '20%'
    },
    title: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        marginBottom: 15
    },
    titleText: {
        fontSize: 28,
        fontWeight: '700',
        lineHeight: 31,
        color: "#000"
    },
    selectOptionActive: {
        backgroundColor: '#fff',
        height: 85,
        alignItems: 'center',
        borderWidth: 2,
        paddingHorizontal: '10%',
        gap: '80%',
        flexDirection: 'row',
        borderRadius: 4
    },
    selectOption: {
        backgroundColor: '#fff',
        height: 85,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E5E9EF',
        paddingHorizontal: '10%',
        gap: '80%',
        flexDirection: 'row',
        borderRadius: 4
    },
    breadcrumbImg: {
        width: 25,
        height: 25,
    },
    img: {
        width: 31,
        height: 31
    },
    icon: {
        fontWeight: '500',
        fontSize: 25,
        color: '#000'
    },
    optionText: {
        fontWeight: '500',
        fontSize: 18,
        color: '#000'
    },
    btn: {
        backgroundColor: '#000',
        marginHorizontal: 15,
        height: 52.93,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    btnText: {
        color: "#fff",
        fontWeight: "500",
        fontSize: 18
    },
})