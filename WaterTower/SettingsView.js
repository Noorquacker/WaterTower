import React from 'react';
import {Text, View, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export const SettingsView = () => {
	const [number,OnChangeNumber] = React.useState(null);

	return (
		<SafeAreaView>
			<Text>
				Settings Page
			</Text>
			<TextInput
				OnChangeNumber = {OnChangeNumber}
				value ={number}
				placeholder = "Please enter amount of of Cum you drink"
			/>
		</SafeAreaView>
	);
};



    


