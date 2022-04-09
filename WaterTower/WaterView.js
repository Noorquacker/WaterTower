import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import React from 'react';


function addWater() {

}

export const WaterView = ({navigation}) => {
	return (
	<View style={styles.container}>
		<Text>Todo: make this work lmao [done]</Text>
		<Pressable onPress={() => {
			navigation.navigate('Settings');
		}}>
			<Image style={styles.settingsIcon} source={require('./assets/settings.png')} />
		</Pressable>
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
	},
	settingsIcon: {
		height: 30,
		width: 30,
	},
});
