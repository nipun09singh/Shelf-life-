import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, StatusBar, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';

const Start = ({ navigation }) => {
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <View style={styles.header}>
                <Animatable.Image animation="bounceIn" duraton="1500" source={require('../assets/theme1flowerpot.jpg')} style={styles.logo} resizeMode="stretch" />
            </View>
            <Animatable.View style={[styles.footer, { backgroundColor: colors.background }]} animation="fadeInUpBig">
                <Text style={[styles.title, { color: colors.text }]}>Start growing your indoor plant collection today!</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.textSign}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default Start;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387',
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        backgroundColor: 'teal',
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 30,
        color: 'white',
        fontWeight: 'bold'
    }
});
