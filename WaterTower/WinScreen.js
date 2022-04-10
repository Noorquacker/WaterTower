import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, ImageBackground } from 'react-native';
import React from 'react';


function addWater() {

}

export const WinScreen = ({navigation}) => {
	return (
	<View style={styles.container}>
        <ImageBackground style={styles.wImage} source={require('./assets/BrokenWaterTower.png')} >
            <Text style={styles.wText}>You Win!</Text>
        </ImageBackground>
		<StatusBar style="auto" />
	</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#269e1b',
    },
	wImage: {
        position: 'absolute',
		height: '100%',
		width: '100%'
    },
    wText: {
        fontSize: 75,
        textAlign: 'center',
        marginTop: 500,
        fontWeight: 'bold'
    }
});