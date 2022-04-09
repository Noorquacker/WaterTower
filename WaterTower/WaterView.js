import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import React from 'react';


function addWater() {
	console.log('Adding water');
}

export const WaterView = ({navigation}) => {
	return (
	<View style={styles.container}>

		<Pressable onPress={() => {
			navigation.navigate('Settings');
		}} style={styles.settingsIcon}>
			<Image style={styles.settingsIcon} source={require('./assets/settings.png')} />
		</Pressable>

		<View style={styles.wText}>
			<Text>Happy drinking</Text>
		</View>

		<Pressable onPress={addWater}>
			<View style={styles.wContainer}>
				<Image style={styles.wImage} source={require('./assets/WaterTower.jpeg')}/>
			</View>
		</Pressable>

		<StatusBar style="auto" />
	</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	wContainer: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	wImage: {
		height: 512,
		width: 270,
		marginBottom: 0,
		marginTop: 'auto',
	},
	settingsIcon: {
		height: 30,
		width: 30,
		marginLeft: 'auto',
		marginRight: 5,
	},
	wText: {
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 50,
	},
});
