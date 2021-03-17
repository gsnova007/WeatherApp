import React from 'react';
import { useSelector } from "react-redux";
import { Text, View, StyleSheet} from 'react-native';
import Wind from "../../helperFunctions/Wind";
import WindDegree from "../../helperFunctions/WindDegree";

const OtherInfo = props => {
    const data = props.stateData;
    console.log('data in OtherScreen: ', data);
    const units = useSelector(state => state.CustomizeUnitsReducer);
    return(
        <View style={styles.OuterView}>
            <View style={styles.InnerView}>
                {/* <Text style={styles.Text}>Wind: {Wind(data.wind.speed,units.windspeed) + " "}{WindDegree(data.wind.deg)}</Text> */}
                <Text style={styles.Text}>Humidity: {data.main.humidity}%</Text>
                <Text style={styles.Text}>UV index: 7.8</Text>
            </View>

            <View style={styles.InnerView}>
                <Text style={styles.Text}>Pressure: 3.4mph SW+</Text>
                <Text style={styles.Text}>Visibility: 30%</Text>
                <Text style={styles.Text}>Dew Point: 544</Text>
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