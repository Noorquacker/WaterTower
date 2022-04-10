import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image, Button } from 'react-native';
import React from 'react';
import { Component } from 'react';


class WaterView extends Component {

	state = {
		water: 0,
		style2: StyleSheet.create({
			wBg: {
				width: 198,
				height: 0,
				zIndex: 0,
				position: 'absolute',
				bottom: -247,
			},
		})
	}

	
	
	render(navigation)  {

		var [wAmt, setAmt] = React.useState(0);

		const addWater = () => {
			console.log('Adding water');
			setAmt(wAmt + 10);
			console.log(this.state.water);



		const styles = StyleSheet.create({
			container: {
				flex: 1,
				backgroundColor: '#64cef4',
			},
			wContainer: {
				alignItems: 'center',
				justifyContent: 'center',
				// position: 'absolute',
			},
			wImage: {
				height: 512,
				width: 270,
				zIndex: 1,
				position: 'absolute',
				top: 0,
			},
			settingsIcon: {
				height: 50,
				width: 50,
				marginLeft: 'auto',
				marginRight: 5,
			},
			wText: {
				alignItems: 'center',
				justifyContent: 'center',
				marginBottom: 50,
				fontSize: 20,
				fontWeight: 'bold',
			},
			wBg: {
				width: 198,
				height: this.state.water,
				zIndex: 0,
				position: 'absolute',
				bottom: -247,
			},
			wAdd: {
				marginBottom: 50,
			}
		});
		var something = {
			style: {
				width: 198,
				height: wAmt,
				zIndex: 0,
				position: 'absolute',
				bottom: -247,
			}
		}

		

		return (
		<View style={styles.container}>

			<Pressable onPress={() => {
				navigation.navigate('Settings');
			}} style={styles.settingsIcon}>
				<Image style={styles.settingsIcon} source={require('./assets/settings.png')} />
			</Pressable>

			<View style={styles.wText}>
				<Text style={styles.wText}>Happy drinking</Text>
			</View>

			<Button onPress={() => {
						console.log('tower press');
						addWater();
						}}
						title="Add"
						style={styles.wAdd}
						/>


			<View style={styles.wContainer}>
				<Image {...something} id="wBg" source={require('./assets/water.gif')} />
					<View style={styles.wContainer}>

							<Image style={styles.wImage} source={require('./assets/WaterTower.png')}/>

					</View>
					
			</View>

			

			<StatusBar style="auto" />
		</View>
		);
	}



}

export {WaterView};