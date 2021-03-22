import React from 'react';
import { useSelector } from "react-redux";
import { Text, View, StyleSheet, FlatList, Image} from 'react-native';
import Temperature from "../../helperFunctions/Temperature";
import TimeFormat from "../../helperFunctions/TimeFormat";

const HourlyTemperature = ({data}) => {
    // console.log(data.data2.current.sunrise);
    const units = useSelector(state => state.CustomizeUnitsReducer);
    let sunrise_unix_timestamp = [];
        //sunrise time
        for(let i=0; i<2; i++)
        {
            sunrise_unix_timestamp.push(data.data2.daily[i].sunrise);
            const sunrise_date = new Date(sunrise_unix_timestamp * 1000);
        }
        // console.log(sunrise_unix_timestamp);
        // const sunrise_unix_timestamp = data.data2.current.sunrise;
        // const sunrise_date = new Date(sunrise_unix_timestamp * 1000);
        // const sunrise_time = sunrise_date.getHours();
        // const sunrise_minute = sunrise_date.getMinutes();

        // if(data.data2.current.sunrise)
    return(
        <View style={styles.OuterView}>
            <View style={styles.InnerView}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data.data2.hourly}
                keyExtractor={key => key + Math.random() * 10000000}
                renderItem={({item})=>{
                    return(
                        <View style={{alignItems : 'center', marginHorizontal:1}}>
                            <Text style={styles.Time}>{TimeFormat(item.dt,units.timeformat)} </Text>
                            <Image source={{uri : `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}} style={styles.icon}/>
                            <Text>{Temperature(item.temp,units.temperature)}</Text>
                        </View>
                    );
                }}
            />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    OuterView: {
        height:80,
        margin:10,
    },
    InnerView:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    Time:{
        fontSize:12,
        color: '#8f8f8f'
    },
    icon:{
        height:45,
        width:45,
    },
});
    
export default HourlyTemperature;