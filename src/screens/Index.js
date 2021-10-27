import React from 'react';
import { Text, View, StyleSheet, Button, ScrollView, Image } from 'react-native';
import HeaderIndex from './components/HeaderIndex';
import { useSelector } from "react-redux";
import WeatherDetail from "./components/WeatherDetail";
import OtherInfo from "./components/OtherInfo";
import HourlyTemperature from "./components/HourlyTemperature";
import DailyTemp from "./components/DailyTemp";
const network_disconnected = require('../../assets/network-disconnected.png');

const Index = ({ navigation }) => {
	const data = useSelector(state => state.CityReducer.CityDetail);
	if(data.hasOwnProperty('data1')){ 
	// console.log("data in IndexScreen: ",data.data2);
		return(
			<View style={{flex:1, backgroundColor:'#fff'}}>
				<HeaderIndex navigation={navigation} stateData = {data.data1}/>
				<ScrollView style={styles.content}>
					<WeatherDetail stateData = {data.data1} />
					<OtherInfo stateData = {data} />
					<HourlyTemperature data={data}/>
					<DailyTemp data={data}/>
				</ScrollView>
			</View>
		);
	}
	else{
		return(
			<View style={styles.body}>
				<Image source={network_disconnected} style={{height:100, width:100, alignSelf:'center'}}/>
				<Text>you appear to be offline</Text>
				<Text>Check back when you have a better internet connection</Text>
				<View style={{marginTop:10}}>
					<Button title="Try Again" onPress={()=>{navigation.navigate('preLoad')}}/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	
	header: {
		flex:1,
	},
	content:{
		flex:10,
	},
	body:{
		flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
});

export default Index;