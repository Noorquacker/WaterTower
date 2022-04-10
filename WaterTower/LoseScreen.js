import React,{useState} from 'react';
import {Text, View,ScrollView, StyleSheet, TextInput, ImageBackground, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NumericInput from 'react-native-numeric-input'
import { Component } from 'react/cjs/react.production.min';

export const LoseScreen  = () => {
	return (
		<View style={styles.container}>
      <ImageBackground style={styles.LossImage} source={require('./assets/Night.png')}>
        <Text style={styles.lossText}>Better Luck Next Time!</Text>
      </ImageBackground>
    </View>
	);
};

const styles = StyleSheet.create({
	container: {
    flex: 1
  },
  LossImage: {
    position: 'absolute',
    height: '100%',
    width: '100%'
  },
  lossText: {
    fontSize: 45,
    textAlign: 'center',
    marginTop: 300,
    marginLeft: 88,
    marginRight: 75,
    fontWeight: 'bold'
  }
});