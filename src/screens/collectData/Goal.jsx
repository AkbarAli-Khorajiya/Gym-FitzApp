import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import backArrow from '../../assets/images/backArrow.png'
import dumble from '../../assets/images/la--dumbbell.png'
import weight from '../../assets/images/weight.png'


// import { SafeAreaView } from 'react-native-safe-area-context'

const Goal = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.screen} >
            <ScrollView style={styles.container}>
                <View style={styles.breadcrumb}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={backArrow} style={styles.breadcrumbImg} />
                    </TouchableOpacity>
                    <Text style={styles.breadcrumbText}>Step 2 of 8</Text>
                    <TouchableOpacity onPress={() => (navigation.navigate('Graph'))}>
                        <Text style={{ fontSize: 18 }}>Skip</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.body} >
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Choose main goal</Text>
                    </View>
                    <TouchableOpacity style={styles.selectOptionActive}>
                        <Image source={weight} style={styles.img} />
                        <Text style={styles.optionText}>Loose weight</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectOption}>
                        <Text style={styles.icon}>🍀</Text>
                        <Text style={styles.optionText}>Keep fit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectOption}>
                        <Text style={styles.icon}>💪</Text>
                        <Text style={styles.optionText}>Get stronger</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectOption}>
                        <Image source={dumble} style={styles.img} />
                        <Text style={styles.optionText}>Gain muscle mass</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => (navigation.navigate('SelectHeight'))}
                underlayColor="#ccc"
            >
                <Text style={styles.btnText}>Continue</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Goal

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
        // backgroundColor: "#fff",
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
        height: 31,
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
        height: 52.93,
        marginHorizontal: 15,
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