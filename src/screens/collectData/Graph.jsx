import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import backArrow from '../../assets/images/backArrow.png'
import dumble from '../../assets/images/la--dumbbell.png'
import stretch from '../../assets/images/stretch.png'
import women from '../../assets/images/women.png'
import yoga from '../../assets/images/yoga.png'
import powerTraining from '../../assets/images/powerTraining.png'
import { AnimatedCircularProgress } from 'react-native-circular-progress';

// import stretch from '../../assets/images/stretch.png'


// import { SafeAreaView } from 'react-native-safe-area-context'

const Graph = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.screen} >
            <ScrollView style={styles.container}>
                <View style={styles.body} >
                    <View style={styles.title}>
                        <Text style={styles.titleText}>We create your training plan</Text>
                    </View>
                    <AnimatedCircularProgress
                        size={250}
                        width={25}
                        fill={78}
                        lineCap='round'
                        rotation={300}
                        tintColor="#3C3DF5"
                        onAnimationComplete={() => console.log('onAnimationComplete')}
                        backgroundColor="#F1F4F8">
                        {
                            (fill) => (
                                <Text style={{
                                    fontSize: 55,
                                    color: '#000',
                                    fontWeight: '900'
                                }}>
                                    78%
                                </Text>
                            )
                        }
                    </AnimatedCircularProgress>
                    <View style={styles.content}>
                        <Text style={styles.contentText}>
                            We create a workout according to demographic profile, activity level and interests
                        </Text>
                    </View>
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

export default Graph

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
        gap: 25,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '25%'
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
    content: {
        width: '65%',
    },
    contentText: {
        lineHeight: 22,
        textAlign: 'center',
        fontSize: 16,
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