import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity, Alert, Button, Image, Platform, ImageBackground } from 'react-native';
import { globalStyles } from '../styles/global';
import { Fontisto, Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';


const Profile = ({ navigation }) => {

    const pressHandler = () => {
        // function to go back to the home screen
        navigation.goBack();
    }
    const createStreakAlert = () =>
        Alert.alert(
            "Streak:",
            "This is the current amount of days that your plants have been kept alive for!",
            [
                {
                    text: "OK",
                    onPress: () => console.log("OK pressed!")
                }
            ]
        );
    const [image, setImage] = useState(null);

    useEffect(async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Permission was not granted!')
        }
        imageUploaded: true
    }, [])

    const PickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        })
        console.log(result)
        if (!result.cancelled) {
            setImage(result.uri)
        }
        let counter = 0;
        counter++;
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/plantbackground.jpg')} resizeMode="cover" style={styles.image}>
                <View style={{ flexDirection: "row", paddingBottom: 10, flex: 1 }}>
                    <TouchableOpacity onPress={pressHandler}>
                        <View style={styles.iconView}>
                            <Ionicons name="home-outline" style={styles.icon} size={20} />
                            <Text style={styles.iconText}>Home</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.text_header}>Profile</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <View style={styles.iconView}>
                            <AntDesign name="poweroff" style={styles.icon} size={20} />
                            <Text style={styles.iconText}>Log Out</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 4, justifyContent: 'flex-start' }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity title={"Upload a Profile Picture"} onPress={PickImage}>
                            <View style={styles.picUpload}>
                                {image && <Image source={{ uri: image }} style={{
                                    width: 200,
                                    height: 200,
                                    borderRadius: 200 / 2
                                }} />}
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingTop: 6 }}>
                        <TouchableOpacity title={"Upload a Profile Picture"} onPress={PickImage}>
                            <View style={styles.iconView}>
                                <Text style={styles.iconText}>Upload a new profile picture</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FDDFDF', borderColor: 'teal', borderWidth: 5, marginLeft: 60, marginRight: 60, marginTop: 10, marginBottom: 10 }}>
                    <View style={styles.subUserText}>
                        <Text style={styles.headings}>         Leaderboard       </Text>
                        <Fontisto name="fire" style={{ color: '#FC6A03', fontWeight: 'bold' }} size={20} />
                    </View>
                    <View style={{ paddingTop: 5, alignItems: 'flex-end' }}>
                        <View style={styles.userText}>
                            <Image
                                style={styles.tinyLogo}
                                source={require('../assets/theme1flowerpot.jpg')}
                            />
                            <Text style={styles.username}>            Siobhán               </Text>
                            <Text style={styles.username}>9</Text>
                        </View>
                        <View style={styles.userText}>
                            <Image
                                style={styles.tinyLogo}
                                source={require('../assets/theme1heartplant.jpg')}
                            />
                            <Text style={styles.username}>            Stephen               </Text>
                            <Text style={styles.username}>9</Text>
                        </View>

                        <View style={styles.userText}>
                            <Image
                                style={styles.tinyLogo}
                                source={require('../assets/plantworld.jpg')}
                            />
                            <Text style={styles.username}>            Meranie               </Text>
                            <Text style={styles.username}>9</Text>
                        </View>

                        <View style={styles.userText}>
                            <Image
                                style={styles.tinyLogo}
                                source={require('../assets/wateringcan.jpg')}
                            />
                            <Text style={styles.username}>            Kinnane               </Text>
                            <Text style={styles.username}>8</Text>
                        </View>

                        <View style={styles.userText}>
                            <Image
                                style={styles.tinyLogo}
                                source={require('../assets/usr_pic.png')}
                            />
                            <Text style={styles.username}>            Stefania               </Text>
                            <Text style={styles.username}>7</Text>
                        </View>

                        <View style={styles.userText}>
                            <Image
                                style={styles.tinyLogo}
                                source={require('../assets/theme2tallplant.jpg')}
                            />
                            <Text style={styles.username}>            Caoinne               </Text>
                            <Text style={styles.username}>7</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.streakStyle}>
                    <TouchableOpacity title={"Streak Alert"} onPress={createStreakAlert}>
                        <View style={styles.iconView}>
                            <View style={{ flexDirection: "row" }}>
                                <Fontisto name="fire" size={20} style={styles.streakIcon} />
                                <Text style={styles.iconText}>  1</Text>
                            </View>
                            <Text style={styles.iconText}>Current Streak</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}
export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fillerText: {
        color: '#333'
    },
    image: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    logo: {
        alignItems: 'center'
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    iconView: {
        backgroundColor: 'teal',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 5,
        color: 'white',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: 'lightsteelblue'
    },
    picUpload: {
        width: 208,
        height: 208,
        borderRadius: 208 / 2,
        borderWidth: 3,
        borderColor: 'teal',
        backgroundColor: '#fbe4d6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconText: {
        color: 'white',
        fontWeight: 'bold',
    },
    streakStyle: {
        bottom: 0,
        position: 'relative',
        flex: 1
    },
    streakIcon: {
        color: '#FC6A03',
        fontWeight: 'bold',
        alignItems: 'center'
    },
    icon: {
        color: 'white',
        fontWeight: 'bold',
        alignItems: 'center'
    },
    addPicIcon: {
        color: 'teal',
        //fontWeight: 'bold',
        alignItems: 'center'
    },
    textSign: {
        backgroundColor: 'teal',
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 5,
        color: 'white',
        fontWeight: 'bold',
        justifyContent: 'center'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 30
    },
    text_header: {
        color: 'black',
        fontWeight: 'bold',
        justifyContent: 'center',
        fontSize: 40,
        flex: 1,
        paddingHorizontal: 20,
        marginBottom: 15,
        textAlign: 'center'
    },
    footer: {
        flex: 6,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    title: {
        //marginTop: 20,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: "bold",
        paddingTop: 7.5,
        paddingBottom: 7.5
        //marginVertical: 15,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    userText: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 5,
    },
    subUserText: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 20,
        paddingTop: 5,
        paddingBottom: 5,
        borderBottomColor: 'black',
        borderBottomWidth: 2,

    },
    username: {
        //marginTop: 45,
        textAlign: 'center',
        fontSize: 16,
    },
    headings: {
        //marginTop: 45,
        textAlign: 'center',
        paddingBottom: 2,
        fontWeight: 'bold',
        fontSize: 18,
    },
    tinyLogo: {
        borderRadius: 28 / 2,
        width: 28,
        height: 28,
        borderWidth: 1,
        borderColor: 'teal',
    }
});
