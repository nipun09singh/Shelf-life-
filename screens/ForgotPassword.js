import React, { isValidElement } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import * as Animatable from 'react-native-animatable';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";

const ForgotPassword = ({ navigation }) => {

    const [data, setData] = React.useState({
        email: '',
        check_textInputChange: false,
        secureTextEntry: true
    });

    const ResetPassword = () => {
        const auth = getAuth();
        sendPasswordResetEmail(auth, data.email)
            .then((userCredentials) => {
                // THIS IS THE RESPONSE OF SUCCESSFULL FIREBASE LOGIN
                console.log('Recovery email sent ' + data.email)
                const user = userCredentials.user;
            })
            .catch((error) => { alert(error.message) });
    };


    const textInputChange = (val) => {
        if (val.length != 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        }
        else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            });
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Password Reset</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.text_footer}>Email:</Text>
                <View style={styles.action}>
                    <Ionicons name="mail-outline" size={20} style={styles.icon_styles} />
                    <TextInput placeholder="Enter your email" style={styles.textInput} autoCapitalize="none" onChangeText={(val) => textInputChange(val)} />
                    {data.check_textInputChange ?
                        <Animatable.View delay={200} animation="fadeIn">
                            <Ionicons name="checkmark-circle-outline" size={20} color="#50C878" />
                        </Animatable.View>
                        : null}
                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => {
                        ResetPassword();
                        navigation.navigate('Login')
                    }} >
                        <Text style={[styles.textSign, { paddingHorizontal: 15 }]}>Reset Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')} >
                        <Text style={[styles.textSign, { paddingHorizontal: 10 }]}>Log In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')} >
                        <Text style={[styles.textSign, { paddingHorizontal: 10 }]}>Sign Up</Text>
                    </TouchableOpacity>
                    <Text style={styles.smallPrint}>New? Click 'Sign up' to make your account and get started today!</Text>
                </View>
            </View>
        </View>
    );
};

export default ForgotPassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    icon_styles: {
        color: "#05375A",
        paddingRight: 10
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        textAlign: 'center',
        marginTop: 20
    },
    login: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        backgroundColor: 'teal',
        borderRadius: 10,
        paddingVertical: 10,
        marginBottom: 10,
        color: 'white',
        fontWeight: 'bold'
    },
    smallPrint: {
        fontSize: 12,
        color: '#A9A9A9'
    }
});
