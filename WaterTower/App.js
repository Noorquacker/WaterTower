// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { WaterView } from './WaterView.js';
import { SettingsView } from './SettingsView.js';



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
	GLOBAL.currentView = 2;
// 	return render();
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<NavigationContainer>
				<MyStack />
			</NavigationContainer>
		</GestureHandlerRootView>
	);
}

function render() {
	switch(GLOBAL.currentView) {
		case 0:
			return WaterView();
			break;
		case 1:
			return DataTextInput();
			break;
		default:
			return MyStack();
			break;
	}
}
