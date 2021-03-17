import React, { useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button, ScrollView, FlatList, AsyncStorage } from 'react-native';
import HeaderIndex from './components/HeaderIndex';
import { getStore } from "../AsyncStorage";
import { useDispatch, useSelector } from "react-redux";
import WeatherDetail from "./components/WeatherDetail";
import OtherInfo from "./components/OtherInfo";
import HourlyTemperature from "./components/HourlyTemperature";

const Index = ({ navigation }) => {
	const data = useSelector(state => state.CityReducer.CityDetail);
	console.log("data in IndexScreen: ",data);
	return(
		<View style={{flex:1, backgroundColor:'#fff'}}>
			<HeaderIndex navigation={navigation}/>
			<View style={styles.content}>
				<WeatherDetail stateData = {data} />
				<OtherInfo stateData = {data} />
				<HourlyTemperature />
				{/* <ScrollView>
					<Text style={{fontSize:90}}>
					</Text>
				</ScrollView> */}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	
	header: {
		flex:1,
	},
	content:{
		flex:10,
	}
});

export default Index;