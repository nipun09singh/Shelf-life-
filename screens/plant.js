import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import Constants from 'expo-constants';

const Plant = ({ navigation }) => {




    return (
        <View style={styles.container}>

            <TouchableOpacity
                style={styles.plantContainer}
                onPress={() => {
                    navigation.navigate('Home');
                }}
            >
                <Image source={require('../assets/theme1threeleafplant.jpg')}
                    resizeMode='contain'
                    style={styles.image} />
                <View style={styles.content}>
                    <Text style={styles.title}>Plant Name</Text>
                    <Text>
                        Description to be added
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.plantContainer}
                onPress={() => {
                    navigation.navigate('Home');
                }}
            >
                <Image source={require('../assets/theme1fiveleaves.jpg')}
                    resizeMode='contain'
                    style={styles.image} />
                <View style={styles.content}>
                    <Text style={styles.title}>Plant Name 2</Text>
                    <Text>
                        Description to be added
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.plantContainer}
                onPress={() => {
                    navigation.navigate('Home');
                }}
            >
                <Image source={require('../assets/theme2tallplant.jpg')}
                    resizeMode='contain'
                    style={styles.image} />
                <View style={styles.content}>
                    <Text style={styles.title}>Plant Name 3</Text>
                    <Text>
                        Description to be added
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.plantContainer}
                onPress={() => {
                    navigation.navigate('Home');
                }}
            >
                <Image source={require('../assets/theme1heartplant.jpg')}
                    resizeMode='contain'
                    style={styles.image} />
                <View style={styles.content}>
                    <Text style={styles.title}>Plant Name 4</Text>
                    <Text>
                        Description to be added
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.plantContainer}
                onPress={() => {
                    navigation.navigate('Home');
                }}
            >
                <Image source={require('../assets/theme2flowerpot.jpg')}
                    resizeMode='contain'
                    style={styles.image} />
                <View style={styles.content}>
                    <Text style={styles.title}>Plant 5</Text>
                    <Text>
                        Description to be added
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.plantContainer}
                onPress={() => {
                    navigation.navigate('Home');
                }}
            >
                <Image source={require('../assets/theme1flowerpot.jpg')}
                    resizeMode='contain'
                    style={styles.image} />
                <View style={styles.content}>
                    <Text style={styles.title}>Plant 6</Text>
                    <Text>
                        Description to be added
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
    },
    plantContainer: {
        height: 100,
        width: '100%',
        flexDirection: 'row',
        padding: 5,
    },
    image: {
        height: '100%',
        flex: 1,
    },
    content: {
        flex: 0.65,
        paddingHorizontal: 5,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
});

export default Plant;
