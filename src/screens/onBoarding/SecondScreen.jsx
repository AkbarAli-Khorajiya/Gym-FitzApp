import { Image, ImageBackground, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SecondPage from '../../assets/images/image.png'
import LinearGradient from 'react-native-linear-gradient'
import Button from '../../components/Button'

const SecondScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../../assets/images/SecondPage.jpeg')}
            />
            <LinearGradient
                style={styles.body}
                colors={['#00000099', '#00000990', '#00000990']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            >
                <View style={styles.contentBody}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Workout Categories</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.contentText}>Workout categories will help you gain strength, get in better shape and embrace a healthy lifestyle</Text>
                    </View>
                    <View style={styles.dotsNav}>
                        <View style={styles.dots}></View>
                        <View style={styles.dotsAvtive}></View>
                        <View style={styles.dots}></View>
                    </View>
                    <Button
                        title={'Start Training'}
                        navigation={navigation}
                        screenName="ThirdScreen"
                    />
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

export default SecondScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#000',
    },
    image: {
        position: 'absolute',
        top: 0,
        width: 375,
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
        gap: 20,
        paddingHorizontal: 20
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
        paddingHorizontal: 40,
        width: '100%',
    },
    contentText: {
        color: '#fff',
        fontWeight: "400",
        textAlign: 'center',
        lineHeight: 22,
        marginBottom: "20%"
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