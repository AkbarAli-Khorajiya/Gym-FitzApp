import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import backArrow from '../../assets/images/backArrow.png'

const SelectGoalWeight = ({ navigation }) => {
    const [selectSegment, setSelectSegment] = useState(0)
    return (
        <SafeAreaView style={styles.screen} >
            <ScrollView style={styles.container}>
                <View style={styles.breadcrumb}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={backArrow} style={styles.img} />
                    </TouchableOpacity>
                    <Text style={styles.breadcrumbText}>Step 6 of 8</Text>
                    <TouchableOpacity onPress={() => (navigation.navigate('Graph'))}>
                        <Text style={{ fontSize: 18 }}>Skip</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.body} >
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Select goal weight</Text>
                    </View>
                    <View style={styles.segement}>
                        <TouchableOpacity style={selectSegment == 0 ? styles.active : styles.inActive}
                            onPress={() => (setSelectSegment(0))}
                        >
                            <Text style={{
                                color: '#000',
                                fontWeight: selectSegment == 0 ? '900' : '400'
                            }}>Pound</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={selectSegment == 1 ? styles.active : styles.inActive}
                            onPress={() => (setSelectSegment(1))}
                        >
                            <Text style={{
                                color: '#000',
                                fontWeight: selectSegment == 1 ? '900' : '400'

                            }}>Kilogram</Text>
                        </TouchableOpacity>
                    </View>
                    {
                        selectSegment == 0 ? <View style={styles.inpGroup}>
                            <TextInput style={styles.input} />
                            <Text style={styles.inpGroupText}>lb</Text>
                        </View>
                            : <View style={styles.inpGroup}>
                                <TextInput style={styles.input} />
                                <Text style={styles.inpGroupText}>kg</Text>
                            </View>
                    }

                </View>
            </ScrollView>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => (navigation.navigate('SelectLevel'))}
                underlayColor="#ccc"
            >
                <Text style={styles.btnText}>Continue</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default SelectGoalWeight

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
    segement: {
        width: '70%',
        height: 39,
        borderRadius: 23.47,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'center',
        alignItems: 'center',
        paddingHorizontal: 4,
        backgroundColor: '#F1F4F8',
    },
    inActive: {
        backgroundColor: '#F1F4F8',
        borderRadius: 23.47,
        width: '50%',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundColor: '#fff',
        shadowColor: "#00000060",
        elevation: 5,
        width: '50%',
        height: 31,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 23.47,
    },
    img: {
        width: 25,
        height: 25,
    },
    inpGroup: {
        height: 61.59,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        gap: 10,
        marginTop: '10%'
    },
    input: {
        fontSize: 25.98,
        textAlign: 'center',
        borderWidth: 1,
        width: 93,
        fontWeight: '600',
        borderColor: "#E5E9EF",
        borderRadius: 7.7,
        lineHeight: 39,
        color: "#000"
    },
    inpGroupText: {
        color: '#000',
        fontSize: 15,
        fontWeight: '400'
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