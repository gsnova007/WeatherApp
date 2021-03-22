import React from 'react';
import { useSelector } from "react-redux";
import { Text, View, StyleSheet} from 'react-native';
import Wind from "../../helperFunctions/Wind";
import WindDegree from "../../helperFunctions/WindDegree";
import Pressure from "../../helperFunctions/Pressure";
import Visibilty from "../../helperFunctions/Visibility";
import Temperature from "../../helperFunctions/Temperature";

const OtherInfo = props => {
    const data = props.stateData;
    // console.log('data in OtherScreen: ', data);
    const units = useSelector(state => state.CustomizeUnitsReducer);
    return(
        <View style={styles.OuterView}>
            <View style={styles.InnerView}>
                <Text style={styles.Text}>Wind: {Wind(data.data1.wind.speed,units.windspeed) + " "}{WindDegree(data.data1.wind.deg)}</Text>
                <Text style={styles.Text}>Humidity: {data.data1.main.humidity}%</Text>
                <Text style={styles.Text}>UV index: {data.data2.current.uvi}</Text>
            </View>

            <View style={styles.InnerView}>
                <Text style={styles.Text}>Pressure: {Pressure(data.data1.main.pressure,units.pressure)}</Text>
                <Text style={styles.Text}>Visibility: {Visibilty(data.data1.visibility,units.distance)}</Text>
                <Text style={styles.Text}>Dew Point: {Temperature(data.data2.current.dew_point,units.temperature)}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    OuterView: {
        height:80,
        backgroundColor:'#dfdfdf',
        borderRadius:10,
        marginHorizontal:7,
        paddingHorizontal:15,
        paddingVertical:20,
        justifyContent:'space-between'
    },
    InnerView:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    Text:{
        fontWeight:'bold',
        fontSize:12
    }
});
    
export default OtherInfo;