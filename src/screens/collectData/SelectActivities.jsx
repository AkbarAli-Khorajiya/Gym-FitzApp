import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import backArrow from '../../assets/images/backArrow.png'
import dumble from '../../assets/images/la--dumbbell.png'
import stretch from '../../assets/images/stretch.png'
import women from '../../assets/images/women.png'
import yoga from '../../assets/images/yoga.png'
import powerTraining from '../../assets/images/powerTraining.png'
// import stretch from '../../assets/images/stretch.png'


// import { SafeAreaView } from 'react-native-safe-area-context'

const SelectActivities = ({ navigation }) => {
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
                        <Text style={styles.titleText}>Choose activities that interest</Text>
                    </View>
                    <TouchableOpacity style={styles.selectOption}>
                        <View style={styles.optionCard}>
                            <View style={[styles.imageView, {
                                backgroundColor: "#E5E9EF"
                            }]}>
                                <Image source={stretch} style={styles.img} />
                            </View>
                            <Text style={styles.optionTitle}>Stretch</Text>
                        </View>
                        <View style={styles.radio}>
                            <Text style={styles.radioText}>✔</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectOptionActive}>
                        <View style={styles.optionCard}>
                            <View style={[styles.imageView, {
                                backgroundColor: "#FFEAEA"
                            }]}>
                                <Image source={stretch} style={styles.img} />
                            </View>
                            <Text style={styles.optionTitle}>Cardio</Text>
                        </View>
                        <View style={styles.radioActive}>
                            <Text style={styles.radioText}>✔</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectOption}>
                        <View style={styles.optionCard}>
                            <View style={styles.imageView}>
                                <Image source={yoga} style={styles.img} />
                            </View>
                            <Text style={styles.optionTitle}>Yoga</Text>
                        </View>
                        <View style={styles.radio}>
                            <Text style={styles.radioText}>✔</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectOption}>
                        <View style={styles.optionCard}>
                            <View style={styles.imageView}>
                                <Image source={powerTraining} style={styles.img} />
                            </View>
                            <Text style={styles.optionTitle}>Power training</Text>
                        </View>
                        <View style={styles.radio}>
                            <Text style={styles.radioText}>✔</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectOption}>
                        <View style={styles.optionCard}>
                            <View style={[styles.imageView, {
                                backgroundColor: "#FFEAEA"
                            }]}>
                                <Image source={women} style={styles.img} />
                            </View>
                            <Text style={styles.optionTitle}>Dancing</Text>
                        </View>
                        <View style={styles.radio}>
                            <Text style={styles.radioText}>✔</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => (navigation.navigate('Graph'))}
                underlayColor="#ccc"
            >
                <Text style={styles.btnText}>Continue</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default SelectActivities

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingVertical: 10,
        backgroundColor: "#fff",
    },
    container: {
        flex: 1,
        paddingHorizontal: 15,
        marginBottom: 10
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
        height: 87,
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 5,
        flexDirection: 'row',
        borderWidth: 2,
        paddingHorizontal: 15,
        borderRadius: 4
    },
    selectOption: {
        backgroundColor: '#fff',
        height: 87,
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 5,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#E5E9EF',
        paddingHorizontal: 15,
        borderRadius: 4
    },
    optionCard: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 15
    },
    breadcrumbImg: {
        width: 25,
        height: 25,
    },
    imageView: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 53,
        borderRadius: 5,
        height: 53,
    },
    radio: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#DAE0E8',
        borderRadius: 50,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    radioActive: {
        backgroundColor: '#000',
        borderRadius: 50,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    radioText: {
        color: "#fff",
        fontSize: 10,
        textAlign: 'center'
    },
    img: {
        width: 31,
        height: 31,
    },
    optionTitle: {
        fontWeight: '500',
        fontSize: 16,
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