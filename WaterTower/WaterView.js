import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

export const WaterView = ({navigation}) => {

	return (
	<View style={styles.container}>
		<Text>Todo: make this work lmao [done]</Text>
		<Button title="CLICK ON MEEE" onPress={() => {
			navigation.navigate('Settings');
		}}/>
		<StatusBar style="auto" />
	</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
