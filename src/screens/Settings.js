import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Icon } from 'react-native-elements';

const Settings = ({ navigation }) => {
	return(
		<View style={styles.body}>
			<View style={styles.outerView}>
				<TouchableOpacity onPress={() => navigation.navigate('DifferentWeather') }>
					<View style={styles.innerView}>
						<Text>Different Weather?</Text>
						<Icon name='angle-right' type='font-awesome' color='#0f0f0f'/>
					</View>
				</TouchableOpacity>
			</View>
			
			<View style={styles.outerView}>
				<TouchableOpacity onPress={() => navigation.navigate('CustomizeUnits') }>
					<View style={styles.innerView}>
						<Text>Customize Units</Text>
						<Icon name='angle-right' type='font-awesome' color='#0f0f0f'/>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	body:{
		backgroundColor: '#fff',
		flex:1,
		paddingTop:5
	},

	innerView:{
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'space-between'
	},

	outerView:{
		borderBottomWidth:1,
		borderBottomColor:'#cfcfcf',
		padding:10,
		marginTop:15
	}
});

export default Settings;