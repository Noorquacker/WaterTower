import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export const WaterView = () => {
	return (
	<View style={styles.container}>
		<Text>Todo: make this work lmao</Text>
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
