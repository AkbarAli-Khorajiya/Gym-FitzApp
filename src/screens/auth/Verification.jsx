import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { OtpInput } from "react-native-otp-entry";
const Verification = () => {
    return (

        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.body}>
                    <Text style={styles.title}>Phone Verification</Text>
                    <Text style={styles.titleNote}>We sent a code to your number </Text>
                    <View style={styles.phoneChange}>
                        <Text style={{ fontSize: 15, color: "#000", }}>9(173)605-76-05</Text>
                        <Text style={{ fontSize: 15, fontWeight: "600", color: "#000", textDecorationLine: 'underline' }}>Change</Text>

                    </View>
                    <OtpInput
                        numberOfDigits={4}
                        autoFocus={true}
                        focusStickBlinkingDuration={700}
                        onTextChange={(text) => console.log(text)}
                        onFilled={(text) => console.log(`OTP is ${text}`)}
                        theme={{
                            containerStyle: {
                                marginTop: 30,
                                marginBottom: 20
                            },
                            pinCodeContainerStyle: {
                                width: 61,
                                height: 61,
                                borderColor: '#E5E9EF',
                                borderRadius: 7.7,
                                textAlign: 'center',
                                fontSize: 25,
                                marginHorizontal: 5,
                            },
                            pinCodeTextStyle: {
                                color: '#000',
                                fontWeight: '600'
                            },
                            focusStickStyle: {
                                backgroundColor: '#000',
                                width: 0.96,

                            },
                            focusedPinCodeContainerStyle:
                            {
                                borderWidth: 1,
                                borderColor: '#000',
                                borderWidth: 2,
                                borderRadius: 10,
                            },
                        }}
                    />
                </View>
                <View style={styles.phoneChange}>
                    <Text style={{ fontSize: 15.4, lineHeight: 21.17, color: "#000", }}>Don't receive your code?</Text>
                    <Text style={{ fontSize: 15.4, lineHeight: 21.17, fontWeight: "600", color: "#3D37F1" }}>Resend</Text>

                </View>
            </View>
        </SafeAreaView >
    )
}

export default Verification

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    body: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: '600',
        lineHeight: 31,
        color: "#000",
        marginBottom: 10
    },
    titleNote: {
        color: "#000",
        fontSize: 15,
    },
    phoneChange: {
        flexDirection: "row",
        gap: 5,
        color: "#000",
        justifyContent: 'center',
        alignItems: 'center'
    },
    otpContainer: {
        margin: 50
    }
})