import React, { useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button, ScrollView, FlatList, AsyncStorage } from 'react-native';
import HeaderIndex from './components/HeaderIndex';
import { getStore } from "../AsyncStorage";
import { useDispatch, useSelector } from "react-redux";
import WeatherDetail from "./components/WeatherDetail";
import OtherInfo from "./components/OtherInfo";
import HourlyTemperature from "./components/HourlyTemperature";
import DailyTemp from "./components/DailyTemp";

const Index = ({ navigation }) => {
	const data = useSelector(state => state.CityReducer.CityDetail);
	// console.log("data in IndexScreen: ",data.data2);
	return(
		<View style={{flex:1, backgroundColor:'#fff'}}>
			<HeaderIndex navigation={navigation} stateData = {data.data1}/>
			<ScrollView style={styles.content}>
				<WeatherDetail stateData = {data.data1} />
				<OtherInfo stateData = {data} />
				<HourlyTemperature data={data}/>
				<DailyTemp data={data}/>
				{/* <ScrollView>
					<Text style={{fontSize:90}}>
					</Text>
				</ScrollView> */}
			</ScrollView>
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