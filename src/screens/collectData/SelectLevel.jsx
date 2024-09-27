import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import backArrow from '../../assets/images/backArrow.png'
import dumble from '../../assets/images/la--dumbbell.png'
import weight from '../../assets/images/weight.png'


// import { SafeAreaView } from 'react-native-safe-area-context'

const SelectLevel = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.screen} >
            <ScrollView style={styles.container}>
                <View style={styles.breadcrumb}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={backArrow} style={styles.breadcrumbImg} />
                    </TouchableOpacity>
                    <Text style={styles.breadcrumbText}>Step 7 of 8</Text>
                    <TouchableOpacity onPress={() => (navigation.navigate('Graph'))}>
                        <Text style={{ fontSize: 18 }}>Skip</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.body} >
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Choose training level</Text>
                    </View>
                    <TouchableOpacity style={styles.selectOption}>
                        <Text style={styles.optionTitle}>Beginner</Text>
                        <Text style={styles.optionSubTitle}>I want to start training</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectOptionActive}>
                        <Text style={styles.optionTitle}>Irregular traning</Text>
                        <Text style={styles.optionSubTitle}>I train 1-2 times a week</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectOption}>
                        <Text style={styles.optionTitle}>Medium</Text>
                        <Text style={styles.optionSubTitle}>I train 3-5 times a week</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectOption}>
                        <Text style={styles.optionTitle}>Advanced</Text>
                        <Text style={styles.optionSubTitle}>I train more than 5 times a week</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => (navigation.navigate('SelectActivities'))}
                underlayColor="#ccc"
            >
                <Text style={styles.btnText}>Continue</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default SelectLevel

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
        marginTop: '10%'
    },
    title: {
        width: '70%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        marginBottom: 15
    },
    titleText: {
        fontSize: 28,
        fontWeight: '700',
        lineHeight: 35,
        color: "#000",
        textAlign: 'center'
    },
    selectOptionActive: {
        backgroundColor: '#fff',
        height: 95,
        borderWidth: 2,
        justifyContent: 'center',
        paddingHorizontal: 25,
        gap: 5,
        borderRadius: 4
    },
    selectOption: {
        backgroundColor: '#fff',
        height: 95,
        justifyContent: 'center',
        gap: 5,
        borderWidth: 1,
        borderColor: '#E5E9EF',
        paddingHorizontal: 25,
        borderRadius: 4
    },
    breadcrumbImg: {
        width: 25,
        height: 25,
    },
    optionTitle: {
        fontWeight: '500',
        fontSize: 18,
        color: '#000'
    },
    optionSubTitle: {
        color: '#000',
        fontWeight: '300',
        fontSize: 13.47
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