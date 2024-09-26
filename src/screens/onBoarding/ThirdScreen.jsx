import { Image, ImageBackground, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SecondPage from '../../assets/images/image.png'
import LinearGradient from 'react-native-linear-gradient'
import Button from '../../components/Button'

const ThirdScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../../assets/images/ThirdPage.jpeg')}
            />
            <LinearGradient
                style={styles.body}
                colors={['#00000099', '#00000990', '#00000990']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            >
                <View style={styles.contentBody}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Custom Workouts</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.contentText}>Create and save your own custom workouts. Name your workouts, save them, and they’ll automatically appear when you’re ready to workout</Text>
                    </View>
                    <View style={styles.dotsNav}>
                        <View style={styles.dots}></View>
                        <View style={styles.dots}></View>
                        <View style={styles.dotsAvtive}></View>
                    </View>
                    <Button
                        navigation={navigation}
                        screenName="SignIn"
                        title={'Start Training'} />
                    <View style={styles.link}>
                        <Text style={{ color: "#fff" }}>Already have account?</Text>
                        <TouchableHighlight
                            onPress={() => (navigation.navigate('SignIn'))}
                            underlayColor="#ccc">
                            <Text style={styles.linkText}>Sign In</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </LinearGradient>
        </View >
    )
}

export default ThirdScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#000',
    },
    image: {
        position: 'absolute',
        top: 0,
        width: 540,
        height: '60%',
        objectFit: 'cover',
        elevation: 20,
        shadowColor: '#ccc'
    },
    body: {
        position: 'absolute',
        bottom: 0,
        zIndex: 99,
        width: '100%',
        height: '50%',
        justifyContent: 'flex-end',
    },
    contentBody: {
        width: "100%",
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 15,
        paddingHorizontal: 18
    },
    title: {
        width: '100%',
    },
    titleText: {
        color: '#fff',
        fontWeight: "600",
        fontSize: 30,
        textAlign: 'center',
        lineHeight: 30.79
    },
    content: {
        width: '100%',
        paddingHorizontal: 19
    },
    contentText: {
        color: '#fff',
        fontWeight: "400",
        textAlign: 'center',
        lineHeight: 22,
        marginBottom: "5%"
    },
    dotsNav: {
        width: '100%',
        flexDirection: 'row',
        gap: 7.7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dotsAvtive: {
        backgroundColor: "#fff",
        width: 7.7,
        height: 7.7,
        borderRadius: 50
    },
    dots: {
        backgroundColor: "#515151",
        width: 7.7,
        height: 7.7,
        borderRadius: 50
    },
    link: {
        width: '100%',
        flexDirection: 'row',
        gap: 7.7,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    linkText: {
        color: '#fff',
        textDecorationLine: 'underline',
    },

})