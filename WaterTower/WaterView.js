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

		<View style={styles.wContainer}>
			<Image style={styles.wBg} source={require('./assets/water.gif')} />
			<Pressable onPress={addWater}>
				<View style={styles.wContainer}>
					<Image style={styles.wImage} source={require('./assets/WaterTower.png')}/>
				</View>
			</Pressable>
		</View>

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
		zIndex: 1,
		position: 'absolute',
		top: 0,
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
	wBg: {
		width: 198,
		height: 130,
		zIndex: 0,
		position: 'absolute',
		bottom: -247,
	},
});
