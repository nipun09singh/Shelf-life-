// import MobileDatePicker from '@mui/lab/MobileDatePicker';
// import TextField from '@mui/material/TextField';
import React, { isValidElement } from 'react';
import { Image, StyleSheet, Text, View, Button, TextInput, ImageBackground } from 'react-native';
import { globalStyles } from '../styles/global';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { auth } from "../firebase"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import logoLeft from '../assets/theme1heartplant.jpg';

const SignUp = ({ navigation }) => {

    const [data, setData] = React.useState({
        email: '',
        password: '',
        confirmPassword: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirmSecureTextEntry: true
    });

    // CALL THIS FUNCTION TO REGISTER USERS ON FIREBASE
    const handleSignUp = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredentials) => {
                // THIS IS THE RESPONSE OF SUCCESSFULL FIREBASE LOGIN
                console.log('Successful login by:' + data.email)
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
    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }
    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirmPassword: val
        });
    }
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirmSecureTextEntry: !data.confirmSecureTextEntry
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 30 }}>
                    <Image style={{ width: 265, height: 100 }} source={require('../assets/shelflife.jpg')} />
                </View>
                <Image source={require('../assets/plantworld.jpg')}
                    style={{ width: 450, height: 193.5 }}
                />
                <View style={{ justifyContent: 'flex-end' }}>
                    <Text style={styles.text_header}>Create New Account</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.action}>
                    <Ionicons name="mail-outline" size={20} style={styles.icon_styles} />
                    <TextInput placeholder="Email" placeholderTextColor={'white'} style={styles.textInput} autoCapitalize="none" onChangeText={(val) => textInputChange(val)} />
                    {data.check_textInputChange ?
                        <Animatable.View delay={200} animation="fadeIn">
                            <Ionicons name="checkmark-circle-outline" size={20} style={styles.checkmark} />
                        </Animatable.View>
                        : null}
                </View>
                <View style={styles.action}>
                    <AntDesign name="lock" size={20} style={styles.icon_styles} />
                    <TextInput placeholder="Password" placeholderTextColor={'white'} secureTextEntry={data.secureTextEntry ? true : false} style={styles.textInput} autoCapitalize="none" onChangeText={(val) => handlePasswordChange(val)} />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ?
                            <Ionicons name="eye-off-outline" size={20} style={styles.icon_styles} />
                            :
                            <Ionicons name="eye-outline" size={20} style={styles.icon_styles} />
                        }
                    </TouchableOpacity>
                </View>
                <View style={styles.action}>
                    <AntDesign name="lock" size={20} style={styles.icon_styles} />
                    <TextInput placeholder="Confirm Password" placeholderTextColor={'white'} secureTextEntry={data.confirmSecureTextEntry ? true : false} style={styles.textInput} autoCapitalize="none" onChangeText={(val) => handleConfirmPasswordChange(val)} />
                    <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                        {data.confirmSecureTextEntry ?
                            <Ionicons name="eye-off-outline" size={20} style={styles.icon_styles} />
                            :
                            <Ionicons name="eye-outline" size={20} style={styles.icon_styles} />
                        }
                    </TouchableOpacity>
                </View>

                <View style={styles.button}>
                    <TouchableOpacity onPress={() => {
                        handleSignUp();
                        navigation.navigate('Login')
                    }} >
                        <Text style={[styles.textSign, { paddingHorizontal: 10 }]}>Create account</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.button2}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Login')
                    }} >
                        <Text style={[styles.textSign2, { paddingHorizontal: 10 }]}>Already have an account? Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    logoleft: {
        width: 97,
        height: 109
    },
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        flex: 7,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 10
    },
    footer: {
        flex: 6,
        backgroundColor: 'teal',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    text_header: {
        color: 'teal',
        fontWeight: 'bold',
        fontSize: 30,
    },
    text_footer: {
        color: 'white',
        fontSize: 18
    },
    icon_styles: {
        color: "white",
        paddingLeft: 10,
        paddingRight: 10,
        paddingVertical: 5
    },
    checkmark: {
        color: "#50C878",
        paddingLeft: 10,
        paddingRight: 10,
        paddingVertical: 5
    },
    action: {
        flexDirection: 'row',
        marginTop: 15,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 23,
        padding: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 15,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 23,
        padding: 5
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: 'white',
        fontWeight: 'bold'
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        textAlign: 'center',
        marginTop: 30
    },
    button2: {
        textAlign: 'center'
    },
    login: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        backgroundColor: 'white',
        borderRadius: 23,
        paddingVertical: 10,
        marginBottom: 10,
        color: 'teal',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20
    },
    textSign2: {
        backgroundColor: 'teal',
        borderRadius: 23,
        paddingVertical: 15,
        marginBottom: 10,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15
    }

});
