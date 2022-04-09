import React from 'react';
import {Text, View, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NumericInput from 'react-native-numeric-input'


export const SettingsView = () => {
	const [number,OnChangeNumber] = React.useState(null);
	
	return (
		<SafeAreaView>
			<Text style={styles.titleText}>
				Enter the you goal below!!!
			</Text>
			<NumericInput onChange={value => console.log(value)} />
			<TextInput style={styles.baseText}
				OnChangeNumber = {OnChangeNumber}
				value ={number}
				placeholder = "Please enter amount of of Water you drink"
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	baseText: {
		fontFamily: "Cochin",
		textAlign: 'center'
	},
	titleText: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: 'center'
	}
});