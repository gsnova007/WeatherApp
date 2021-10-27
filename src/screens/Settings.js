import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';

const appicon = require('../../assets/appicon_round.png');

const Settings = ({ navigation }) => {
	return(
		<View style={styles.body}>
			{/* <View style={styles.outerView}>
				<TouchableOpacity onPress={() => navigation.navigate('DifferentWeather') }>
					<View style={styles.innerView}>
						<Text>Different Weather?</Text>
						<Icon name='angle-right' type='font-awesome' color='#0f0f0f'/>
					</View>
				</TouchableOpacity>
			</View>
			 */}
			<View style={styles.outerView}>
				<TouchableOpacity onPress={() => navigation.navigate('CustomizeUnits') }>
					<View style={styles.innerView}>
						<Text>Customize Units</Text>
						<Icon name='angle-right' type='font-awesome' color='#0f0f0f'/>
					</View>
				</TouchableOpacity>
			</View>
			<View style={{flex:1,justifyContent:'flex-end',paddingBottom:20}}>
				<Image source={appicon} style={{height:50, width:50, alignSelf:'center'}}/>
				<Text style={{alignSelf:'center',marginTop:5}}>WeatherApp deveploed by Gaurav Bhatnagar</Text>
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