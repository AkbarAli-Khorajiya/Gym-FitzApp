import { Button, Image, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Apple from '../../assets/images/apple.png'
import FaceBook from '../../assets/images/facebook.png'
import Google from '../../assets/images/google.png'
const SignIn = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>Sign In</Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Phone / Email"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => (navigation.navigate('SignUp'))}
                    underlayColor="#ccc"
                >
                    <Text style={styles.btnText}>Sign In</Text>
                </TouchableOpacity>
                <View>
                    <Text style={styles.forgetPass}>Forgot Password?</Text>
                </View>
            </View>
            <View style={styles.bottom}>
                <View style={styles.with}>
                    <View style={styles.withTitle}>
                        <Text style={styles.withTitleText}>Sign in with</Text>
                    </View>
                    <View style={styles.icon}>
                        <TouchableOpacity>
                            <Image source={Apple} style={styles.logo} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={FaceBook} style={styles.logo} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={Google} style={styles.logo} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.link}>
                    <Text style={{ color: "#000" }}>Don't have an account?</Text>
                    <TouchableHighlight
                        onPress={() => (navigation.navigate('SignUp'))}
                        underlayColor="#ccc">
                        <Text style={styles.linkText}>Sign Up</Text>
                    </TouchableHighlight>
                </View>
            </View>

        </View>

    )
}

export default SignIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        backgroundColor: "#fff",
        alignItems: 'center',
        padding: 16,
    },
    form: {
        width: '100%',
        gap: 12,
        flex: 1,
        justifyContent: 'center'

    },
    title: {
        width: '100%',
        marginBottom: 10

    },
    titleText: {
        fontSize: 30,
        color: '#000',
        fontWeight: "600",
        lineHeight: 30.79,
        textAlign: 'center'
    },
    input: {
        backgroundColor: "#fff",
        height: 52.93,
        borderRadius: 4,
        fontSize: 14,
        paddingLeft: 20,
    },
    btn: {
        marginTop: '3%',
        backgroundColor: '#000',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 4
    },
    btnText: {
        color: "#fff",
        fontWeight: "500",
        fontSize: 18
    },
    forgetPass: {
        textAlign: 'center',
        fontSize: 13,
        color: "#000"
    },
    bottom: {
        width: "100%",
        justifyContent: "space-evenly",
        alignItems: 'center',
        height: 'auto',
    },
    with: {
        width: '100%',
        justifyContent: "center",
        alignItems: 'center',
        marginBottom: 60,
        gap: 25
    },
    withTitleText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#000',
        fontWeight: "600",
        lineHeight: 23.09,
    },
    icon: {
        flexDirection: 'row',
        gap: 20,
    },
    logo: {
        width: 31,
        height: 31
    },
    link: {
        width: '100%',
        flexDirection: 'row',
        gap: 4,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    linkText: {
        color: '#000',
        textDecorationLine: 'underline',
        fontWeight: '600',
        fontSize: 16
    },
})