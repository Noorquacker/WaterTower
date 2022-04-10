import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { WaterView } from './WaterView.js';
import Settings, { SettingsView } from './SettingsView.js';



const Stack = createStackNavigator();

function MyStack() {
	return (
	<Stack.Navigator>
		<Stack.Screen name="Home" component={WaterView} />
		<Stack.Screen name="Settings" component={SettingsView} />
	</Stack.Navigator>
	);
}

export default function App() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<NavigationContainer>
				<MyStack />
			</NavigationContainer>
		</GestureHandlerRootView>
	);
}
