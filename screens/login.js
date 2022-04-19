import React, { isValidElement } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, ImageBackground } from 'react-native';
import { globalStyles } from '../styles/global';
import * as Animatable from 'react-native-animatable';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import image from "../assets/addplant.jpg";


const Login = ({ navigation }) => {

    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    });

    const handleLogIn = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredentials) => {
                // THIS IS THE RESPONSE OF SUCCESSFULL FIREBASE LOGIN
                console.log('Successful login by:' + data.email)
                const user = userCredentials.user;
            })
        // .catch((error) => {alert(error.message)});
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
    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    return (
        <ImageBackground
            source={require('../assets/gg.jpg')}
            imageStyle={{ opacity: 0.5 }}
            style={styles.container}>
            <View style={styles.overlayContainer}>
                <View style={styles.top}>

                    <Text style={styles.header}>LOGIN</Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.text_footer}>Email:</Text>
                    <View style={styles.action}>
                        <Ionicons name="mail-outline" size={20} style={styles.icon_styles} />
                        <TextInput placeholder="Enter your email" style={styles.textInput} autoCapitalize="none" onChangeText={(val) => textInputChange(val)} />
                        {data.check_textInputChange ?
                            <Animatable.View delay={200} animation="fadeIn">
                                <Ionicons name="checkmark-circle-outline" size={20} color="#008000" />
                            </Animatable.View>
                            : null}
                    </View>
                    <Text style={[styles.text_footer, { marginTop: 10 }]}>Password:</Text>
                    <View style={styles.action}>
                        <AntDesign name="lock" size={20} style={styles.icon_styles} />
                        <TextInput placeholder="Enter your password" secureTextEntry={data.secureTextEntry ? true : false} style={styles.textInput} autoCapitalize="none" onChangeText={(val) => handlePasswordChange(val)} />
                        <TouchableOpacity onPress={updateSecureTextEntry}>
                            {data.secureTextEntry ?
                                <Ionicons name="eye-off-outline" size={20} color="grey" />
                                :
                                <Ionicons name="eye-outline" size={20} color="grey" />
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={() => {
                            handleLogIn();
                            navigation.navigate('Home')
                        }} >
                            <Text style={[styles.textSign, { paddingHorizontal: 10 }]}>Log In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} >
                            <Text style={[styles.textSign, { paddingHorizontal: 10 }]}>Forgot Password</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')} >
                            <Text style={[styles.textSign, { paddingHorizontal: 10 }]}>Sign Up</Text>
                        </TouchableOpacity>
                        <Text style={styles.smallPrint}>New? Click 'Sign up' to make your account and get started today!</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%'

    },
    overlayContainer: {
        flex: 1,

    },
    top: {
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    header: {
        color: '#000',
        fontSize: 32,
        //  fontStyle: 'sans-serif',
        fontWeight: 'bold',
        padding: 20,
        paddingLeft: 40,
        paddingRight: 40,
        backgroundColor: 'rgba(255,255,255,.1)'

    },
    footer: {
        color: 'white',
        fontSize: 28,
        padding: 10
    },

    text_footer: {
        color: 'black',
        fontSize: 18,
        marginLeft: 35,
        marginEnd: 35,
        paddingTop: 9
    },


    icon_styles: {
        color: "black",
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
        color: 'black'


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
        width: '50%',
        height: 50,
        marginLeft: '30',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 10,
        borderBottomColor: 'black'

    },
    textSign: {
        backgroundColor: '#ddd',
        borderRadius: 10,
        paddingHorizontal: 0,
        paddingVertical: 10,
        marginBottom: 10,
        color: 'black',
        fontWeight: 'bold',
        marginEnd: 60,
        marginLeft: 60

    },
    smallPrint: {
        fontSize: 12,
        color: 'black'
    }
});
