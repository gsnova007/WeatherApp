import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';

const Settings = ({ navigation }) => {
	return(
		<View>
			<Text>Settings Screen</Text>
			<TouchableOpacity>
				<Button title="Different Weather ?" onPress={() => navigation.navigate('DifferentWeather') }/>
			</TouchableOpacity>
			<TouchableOpacity>
				<Button title="Customize Units" onPress={() => navigation.navigate('CustomizeUnits') }/>
			</TouchableOpacity>
		</View>
	);
}

export default Settings;