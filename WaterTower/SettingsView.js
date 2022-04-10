import React,{useState} from 'react';
import {Text, View,ScrollView, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NumericInput from 'react-native-numeric-input'
import { Component } from 'react/cjs/react.production.min';





export const SettingsView  = () => {
	const [currentValue,setCurrentValue] = useState(0);
	return (
		<View style={styles.container}>
			<Text style={styles.titleText}>
				Enter the you goal below!!!
			</Text>
			
			<NumericInput 
				value={parseInt(currentValue)}
				onChange={value => {setCurrentValue(value)}}
				onLimitReached={(isMin, msg) => console.log(isMin, msg)}
				totalWidth={200}
				totalHeight={100}
				iconSize={10}
				step={1}
				minValue={0}
				maxValue={140}
				valueType="real"
				rounded editable={false}
				textColor="#B0228C"
				iconStyle={{ color: "white" }}
				rightButtonBackgroundColor="#18c2ef"
				leftButtonBackgroundColor="#ff8080"
        	/>
			<Text style = {styles.whitebottom}>
			{currentValue}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	baseText: {
		textAlign: 'center'
	},
	titleText: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: 'center',
		marginBottom: 100
		
	},
	container: {
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#FFFF',
	  },
	whitebottom: {
		marginBottom: 10000,
		backgroundColor: '#FFFF'
	}
});