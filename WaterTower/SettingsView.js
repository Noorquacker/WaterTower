import React,{useState} from 'react';
import {Text, View,ScrollView, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NumericInput from 'react-native-numeric-input'
import { Component } from 'react/cjs/react.production.min';





export const SettingsView  = () => {
	const [currentValue,setCurrentValue] = useState(0);
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.titleText}>
				Enter the you goal below!!!
			</Text>
			<NumericInput
				value={currentValue}
				onChange={value => {setCurrentValue({ value })}}
				onLimitReached={(isMin, msg) => console.log(isMin, msg)}
				totalWidth={80}
				totalHeight={30}
				iconSize={10}
				step={1}
				minValue={0}
				valueType="real"
				rounded editable={false}
				textColor="#B0228C"
				iconStyle={{ color: "white" }}
				rightButtonBackgroundColor="#18c2ef"
				leftButtonBackgroundColor="#ff8080"
        	/>
			<Text>
			
			</Text>
      	</ScrollView>
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
	},
	container: {
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#FFFF',
	  },
});