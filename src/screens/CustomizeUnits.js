import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Text, View, StyleSheet, Image } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
const appicon = require('../../assets/appicon_round.png');

const Index = ({ navigation }) => {
	const dispatch = useDispatch();
	const units = useSelector(state => state.CustomizeUnitsReducer);
	// console.log(units);
	return(
		<View style={{flex: 1,backgroundColor:'#fff',paddingTop:15}}>
			<View style={styles.innerView}>
				<Text style={{fontSize:16}}>Temperature</Text>
				<ButtonGroup
					onPress = {(val) => dispatch({type: 'CustomizeTemp', payload: val})}
					selectedIndex={units.temperature}
					buttons={[`\xB0C`, `\xB0F`]}
					containerStyle={{height: 25,width:150}}
					selectedButtonStyle={{backgroundColor:'#e96e50'}}
					buttonStyle={{backgroundColor:'#efefef'}}
				/>
			</View>


			<View style={styles.innerView}>
				<Text style={{fontSize:16}}>Wind speed</Text>
				<ButtonGroup
					onPress = {(val) => dispatch({type: 'CustomizeWind', payload: val})}
					selectedIndex={units.windspeed}
					buttons={[`m/s`, `km/h`, `mph`]}
					containerStyle={{height: 25,width:150}}
					selectedButtonStyle={{backgroundColor:'#e96e50'}}
					buttonStyle={{backgroundColor:'#efefef'}}
				/>
			</View>


			<View style={styles.innerView}>
				<Text style={{fontSize:16}}>Pressure</Text>
				<ButtonGroup
					onPress = {(val) => dispatch({type: 'CustomizePressure', payload: val})}
					selectedIndex={units.pressure}
					buttons={[`hPa`, `inHg`]}
					containerStyle={{height: 25,width:150}}
					selectedButtonStyle={{backgroundColor:'#e96e50'}}
					buttonStyle={{backgroundColor:'#efefef'}}
				/>
			</View>


			<View style={styles.innerView}>
				<Text style={{fontSize:16}}>Precipitation</Text>
				<ButtonGroup
					onPress = {(val) => dispatch({type: 'CustomizePrecipitation', payload: val})}
					selectedIndex={units.precipitation}
					buttons={[`mm`, `in`]}
					containerStyle={{height: 25,width:150}}
					selectedButtonStyle={{backgroundColor:'#e96e50'}}
					buttonStyle={{backgroundColor:'#efefef'}}
				/>
			</View>


			<View style={styles.innerView}>
				<Text style={{fontSize:16}}>Distance</Text>
				<ButtonGroup
					onPress = {(val) => dispatch({type: 'CustomizeDistance', payload: val})}
					selectedIndex={units.distance}
					buttons={[`km`, `mi`]}
					containerStyle={{height: 25,width:150}}
					selectedButtonStyle={{backgroundColor:'#e96e50'}}
					buttonStyle={{backgroundColor:'#efefef'}}
				/>
			</View>


			<View style={styles.innerView}>
				<Text style={{fontSize:16}}>Time format</Text>
				<ButtonGroup
					onPress = {(val) => dispatch({type: 'CustomizeTimeFormat', payload: val})}
					selectedIndex={units.timeformat}
					buttons={[`24-hour`, `12-hour`]}
					containerStyle={{height: 25,width:150}}
					selectedButtonStyle={{backgroundColor:'#e96e50'}}
					buttonStyle={{backgroundColor:'#efefef'}}
				/>
			</View>
			<View style={{flex:1,justifyContent:'flex-end',paddingBottom:20}}>
				<Image source={appicon} style={{height:50, width:50, alignSelf:'center'}}/>
				<Text style={{alignSelf:'center',marginTop:5}}>WeatherApp deveploed by Gaurav Bhatnagar</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	innerView: {
		height:70,
		backgroundColor: "#fff",
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center',
		marginHorizontal:10,
		paddingLeft:5,
		borderBottomWidth:0.7,
		borderBottomColor:'#cfcfcf',
	}
});

export default Index;