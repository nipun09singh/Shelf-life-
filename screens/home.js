import React from 'react';
import { StyleSheet, TextInput, Component, TouchableOpacity, Image, Text, ImageBackground, View, Alert, Modal, Pressable } from 'react-native';
import { globalStyles } from '../styles/global';
import * as Animatable from 'react-native-animatable';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { globalVars } from '../styles/global';

import addImg from '../assets/addplant.jpg';
import plantImg from '../assets/theme1fiveleaves.jpg';

const Add = (position) => {

    return position
}

const Home = ({ navigation }) => {

    const pressHandler = () => {
        navigation.push('Profile');
    }

    const [plant, setPlant] = React.useState({
        plantSelect: true,
        plant2Select: true,
        plant3Select: true,
        plant4Select: true,
        plant5Select: true,
        plant6Select: true,
        plant7Select: true,
        plant8Select: true,
        plant9Select: true,
        counter: 0,
        counter2: 0,
        counter3: 0,
        counter4: 0,
        counter5: 0,
        counter6: 0,
        counter7: 0,
        counter8: 0,
        counter9: 0,
    });
    const [plantName, setPlantName] = React.useState({
        name: '',
        check_textInputChange: false
    })

    const updatePlantSelect = () => {
        setPlant({
            ...plant,
            plantSelect: !plant.plantSelect,
            counter: plant.counter + 1
        })
    }

    const updatePlant2Select = () => {
        setPlant({
            ...plant,
            plant2Select: !plant.plant2Select,
            counter2: plant.counter2 + 1
        })
    }

    const updatePlant3Select = () => {
        setPlant({
            ...plant,
            plant3Select: !plant.plant3Select,
            counter3: plant.counter3 + 1
        })
    }
    const updatePlant4Select = () => {
        setPlant({
            ...plant,
            plant4Select: !plant.plant4Select,
            counter4: plant.counter4 + 1
        })
    }
    const updatePlant5Select = () => {
        setPlant({
            ...plant,
            plant5Select: !plant.plant5Select,
            counter5: plant.counter5 + 1
        })
    }
    const updatePlant6Select = () => {
        setPlant({
            ...plant,
            plant6Select: !plant.plant6Select,
            counter6: plant.counter6 + 1
        })
    }
    const updatePlant7Select = () => {
        setPlant({
            ...plant,
            plant7Select: !plant.plant7Select,
            counter7: plant.counter7 + 1
        })
    }
    const updatePlant8Select = () => {
        setPlant({
            ...plant,
            plant8Select: !plant.plant8Select,
            counter8: plant.counter8 + 1
        })
    }
    const updatePlant9Select = () => {
        setPlant({
            ...plant,
            plant9Select: !plant.plant9Select,
            counter9: plant.counter9 + 1
        })
    }
    const textInputChange = (val) => {
        if (val.length != 0) {
            setPlantName({
                ...plantName,
                name: val,
                check_textInputChange: true
            });
        }
        else {
            setPlantName({
                ...plantName,
                name: val,
                check_textInputChange: false
            });
        }
    }
    const createHomeAlert = () =>
        Alert.alert(
            "Name your plants!",
            "Click on the plus button to add a plant! Once you've added a plant, click on it again to name it!",
            [
                {
                    text: "OK",
                    onPress: () => console.log("OK pressed!")
                }
            ]
        );

    const [modalVisible, setModalVisible] = React.useState(false);

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", flex: 1, justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={pressHandler}>
                    <View style={styles.iconView}>
                        <AntDesign name="user" style={styles.icon} size={20} />
                        <Text style={styles.iconText}>Profile</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ flexDirection: "column" }}>
                    <Image source={require('../assets/shelflife.jpg')}></Image>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <View style={styles.iconView}>
                        <AntDesign name="poweroff" style={styles.icon} size={20} />
                        <Text style={styles.iconText}>Log Out</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <Modal animationType='slide' transparent={true} visible={modalVisible} onRequestClose={() => {
                    Alert.alert('Modal has been closed'); setModalVisible(!modalVisible);
                }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Needs to be watered in 22 hours!</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.iconText}>OK!</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={{ flex: 3 }}>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 20, paddingLeft: 10, paddingRight: 10 }}>
                        <View>
                            <TouchableOpacity onPress={() => { updatePlantSelect(); console.log(plant.counter) }}>
                                {plant.counter >= 2 && plantName.check_textInputChange == true ?
                                    <Pressable onPress={() => setModalVisible(true)}>
                                        <MaterialCommunityIcons name='watering-can' size={30} style={{ color: '#708090' }} />
                                    </Pressable>
                                    :
                                    <Text></Text>
                                }
                                {/*if plantSelect is true then have the + logo, if false have the plant*/}
                                {plant.plantSelect && plant.counter < 2 ?
                                    <Image source={require('../assets/addplant.jpg')} style={styles.tinyLogo}></Image>
                                    :
                                    <Image source={require('../assets/theme1heartplant.jpg')} style={styles.heartPlantOnShelf}></Image>
                                }
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={updatePlant2Select}>
                                {plant.counter2 >= 2 && plantName.check_textInputChange == true ?
                                    <Pressable onPress={() => setModalVisible(true)}>
                                        <MaterialCommunityIcons name='watering-can' size={30} style={{ color: '#708090' }} />
                                    </Pressable>
                                    :
                                    <Text></Text>
                                }
                                {plant.plant2Select && plant.counter2 < 2 ?
                                    <Image source={require('../assets/addplant.jpg')} style={styles.tinyLogo}></Image>
                                    :
                                    <Image source={require('../assets/theme1fiveleaves.jpg')} style={styles.tallPlantOnShelf}></Image>
                                }
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={updatePlant3Select}>
                                {plant.counter3 >= 2 && plantName.check_textInputChange == true ?
                                    <Pressable onPress={() => setModalVisible(true)}>
                                        <MaterialCommunityIcons name='watering-can' size={30} style={{ color: '#708090' }} />
                                    </Pressable>
                                    :
                                    <Text></Text>
                                }
                                {plant.plant3Select && plant.counter3 < 2 ?
                                    <Image source={require('../assets/addplant.jpg')} style={styles.tinyLogo}></Image>
                                    :
                                    <Image source={require('../assets/theme1flowerpot.jpg')} style={styles.plantOnShelf}></Image>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ paddingBottom: 50, paddingTop: 30, }}>
                    <ImageBackground source={require('../assets/shelf.jpg')} style={styles.logo} />
                    {plant.counter >= 2 ?
                        <View style={{ position: 'absolute', top: -5, left: 10, right: 0, bottom: 0 }}>
                            <TextInput placeholder="Plant name" style={styles.textInput} onChangeText={(val) => textInputChange(val)} />
                        </View>
                        :
                        <Text></Text>
                    }
                    {plant.counter2 >= 2 ?
                        <View style={{ position: 'absolute', top: -5, left: 120, right: 0, bottom: 0 }}>
                            <TextInput placeholder="Plant name" style={styles.textInput} onChangeText={(val) => textInputChange(val)} />
                        </View>
                        :
                        <Text></Text>
                    }
                    {plant.counter3 >= 2 ?
                        <View style={{ position: 'absolute', top: -5, left: 240, right: 0, bottom: 0 }}>
                            <TextInput placeholder="Plant name" style={styles.textInput} onChangeText={(val) => textInputChange(val)} />
                        </View>
                        :
                        <Text></Text>
                    }
                </View>
            </View>
            <View style={{ flex: 3 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10 }}>
                    <TouchableOpacity onPress={updatePlant4Select}>
                        {plant.counter4 >= 2 && plantName.check_textInputChange == true ?
                            <Pressable onPress={() => setModalVisible(true)}>
                                <MaterialCommunityIcons name='watering-can' size={30} style={{ color: '#708090' }} />
                            </Pressable>
                            :
                            <Text></Text>
                        }
                        {plant.plant4Select && plant.counter4 < 2 ?
                            <Image source={require('../assets/addplant.jpg')} style={styles.tinyLogo}></Image>
                            :
                            <Image source={require('../assets/theme1tallplant.jpg')} style={styles.tallPlantOnShelf}></Image>
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={updatePlant5Select}>
                        {plant.counter5 >= 2 && plantName.check_textInputChange == true ?
                            <Pressable onPress={() => setModalVisible(true)}>
                                <MaterialCommunityIcons name='watering-can' size={30} style={{ color: '#708090' }} />
                            </Pressable>
                            :
                            <Text></Text>
                        }
                        {plant.plant5Select && plant.counter5 < 2 ?
                            <Image source={require('../assets/addplant.jpg')} style={styles.tinyLogo}></Image>
                            :
                            <Image source={require('../assets/theme1heartplant.jpg')} style={styles.heartPlantOnShelf}></Image>
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={updatePlant6Select}>
                        {plant.counter6 >= 2 && plantName.check_textInputChange == true ?
                            <Pressable onPress={() => setModalVisible(true)}>
                                <MaterialCommunityIcons name='watering-can' size={30} style={{ color: '#708090' }} />
                            </Pressable>
                            :
                            <Text></Text>
                        }
                        {plant.plant6Select && plant.counter6 < 2 ?
                            <Image source={require('../assets/addplant.jpg')} style={styles.tinyLogo}></Image>
                            :
                            <Image source={require('../assets/theme1threeleafplant.jpg')} style={styles.threeLeafPlant}></Image>
                        }
                    </TouchableOpacity>
                </View>
                <View style={{ paddingBottom: 50, paddingTop: 30 }}>
                    <ImageBackground source={require('../assets/shelf.jpg')} style={styles.logo} />
                    {plant.counter4 >= 2 ?
                        <View style={{ position: 'absolute', top: -5, left: 0, right: 0, bottom: 0 }}>
                            <TextInput placeholder="Plant name" style={styles.textInput} onChangeText={(val) => textInputChange(val)} />
                        </View>
                        :
                        <Text></Text>
                    }
                    {plant.counter5 >= 2 ?
                        <View style={{ position: 'absolute', top: -5, left: 140, right: 0, bottom: 0 }}>
                            <TextInput placeholder="Plant name" style={styles.textInput} onChangeText={(val) => textInputChange(val)} />
                        </View>
                        :
                        <Text></Text>
                    }
                    {plant.counter6 >= 2 ?
                        <View style={{ position: 'absolute', top: -5, left: 270, right: 0, bottom: 0 }}>
                            <TextInput placeholder="Plant name" style={styles.textInput} onChangeText={(val) => textInputChange(val)} />
                        </View>
                        :
                        <Text></Text>
                    }
                </View>
            </View>
            <View style={{ flex: 3 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10 }}>
                    <TouchableOpacity onPress={updatePlant7Select}>
                        {plant.counter7 >= 2 && plantName.check_textInputChange == true ?
                            <Pressable onPress={() => setModalVisible(true)}>
                                <MaterialCommunityIcons name='watering-can' size={30} style={{ color: '#708090' }} />
                            </Pressable>
                            :
                            <Text></Text>
                        }
                        {plant.plant7Select && plant.counter7 < 2 ?
                            <Image source={require('../assets/addplant.jpg')} style={styles.tinyLogo}></Image>
                            :
                            <Image source={require('../assets/theme1tallplant.jpg')} style={styles.tallPlantOnShelf}></Image>
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={updatePlant8Select}>
                        {plant.counter8 >= 2 && plantName.check_textInputChange == true ?
                            <Pressable onPress={() => setModalVisible(true)}>
                                <MaterialCommunityIcons name='watering-can' size={30} style={{ color: '#708090' }} />
                            </Pressable>
                            :
                            <Text></Text>
                        }
                        {plant.plant8Select && plant.counter8 < 2 ?
                            <Image source={require('../assets/addplant.jpg')} style={styles.tinyLogo}></Image>
                            :
                            <Image source={require('../assets/theme1flowerpot.jpg')} style={styles.plantOnShelf}></Image>
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={updatePlant9Select}>
                        {plant.counter9 >= 2 && plantName.check_textInputChange == true ?
                            <Pressable onPress={() => setModalVisible(true)}>
                                <MaterialCommunityIcons name='watering-can' size={30} style={{ color: '#708090' }} />
                            </Pressable>
                            :
                            <Text></Text>
                        }
                        {plant.plant9Select && plant.counter9 < 2 ?
                            <Image source={require('../assets/addplant.jpg')} style={styles.tinyLogo}></Image>
                            :
                            <Image source={require('../assets/theme1fiveleaves.jpg')} style={styles.tallPlantOnShelf}></Image>
                        }
                    </TouchableOpacity>
                </View>
                <View style={{ paddingTop: 30 }}>
                    <ImageBackground source={require('../assets/shelf.jpg')} style={styles.logo} />
                    {plant.counter7 >= 2 ?
                        <View style={{ position: 'absolute', top: -5, left: 0, right: 0, bottom: 0 }}>
                            <TextInput placeholder="Plant name" style={styles.textInput} onChangeText={(val) => textInputChange(val)} />
                        </View>
                        :
                        <Text></Text>
                    }
                    {plant.counter8 >= 2 ?
                        <View style={{ position: 'absolute', top: -5, left: 130, right: 0, bottom: 0 }}>
                            <TextInput placeholder="Plant name" style={styles.textInput} onChangeText={(val) => textInputChange(val)} />
                        </View>
                        :
                        <Text></Text>
                    }
                    {plant.counter9 >= 2 ?
                        <View style={{ position: 'absolute', top: -5, left: 265, right: 0, bottom: 0 }}>
                            <TextInput placeholder="Plant name" style={styles.textInput} onChangeText={(val) => textInputChange(val)} />
                        </View>
                        :
                        <Text></Text>
                    }
                </View>
            </View>
            <View style={{ flex: 1, }}>
                <TouchableOpacity title={"Info"} onPress={createHomeAlert}>
                    <View style={styles.bannerStyle}>
                        <Text style={styles.iconText}>Info</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Home;

//const {height} = Dimensions.get("screen");
//const width_shelf = height * 0.42;
//const height_shelf = height * 0.275;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 20,
    },
    logo: {
        width: '100%',
        height: 30,
        paddingBottom: 150,
        alignItems: 'center',
        flexDirection: 'column',
        position: 'absolute',
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
        alignItems: 'center'
    },
    iconText: {
        color: 'white',
        fontWeight: 'bold',
    },
    icon: {
        color: 'white',
        fontWeight: 'bold',
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
    add: {
        justifyContent: 'center',
        alignContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 25,
    },
    tinyLogo: {
        borderRadius: 60 / 2,
        width: 60,
        height: 60,
        borderWidth: 1,
        borderColor: 'teal',
    },
    plantOnShelf: {
        width: 110,
        height: 95,
    },
    heartPlantOnShelf: {
        width: 87,
        height: 95,
    },
    tallPlantOnShelf: {
        width: 65,
        height: 95,
    },
    threeLeafPlant: {
        height: 95,
        width: 50
    },
    textInput: {
        paddingLeft: 10,
        color: 'black',
        fontWeight: 'bold'
    },
    bannerStyle: {
        width: '100%',
        height: 50,
        borderRadius: 5,
        borderWidth: 3,
        borderColor: 'grey',
        backgroundColor: 'teal',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 5,
        color: 'white',
        fontWeight: 'bold',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#66cdaa',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'teal',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textWater: {
        color: 'teal',
        fontWeight: 'bold',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
