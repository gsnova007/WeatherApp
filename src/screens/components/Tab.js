import React from "react";
import { useSelector } from "react-redux";
import { Text, View, StyleSheet, FlatList, Image, SafeAreaView} from 'react-native';
import { MinMaxTemp } from "../../helperFunctions/Temperature";
import { TimeFormatFull } from "../../helperFunctions/TimeFormat";
import Wind from "../../helperFunctions/Wind";
import WindDegree from "../../helperFunctions/WindDegree";
import Pressure from "../../helperFunctions/Pressure";

const Tab = ({data}) => {
    const units = useSelector(state => state.CustomizeUnitsReducer);
    return(
        <View style={styles.OuterView}>
            <SafeAreaView style={styles.InnerView}>
            <FlatList
                data={data}
                keyExtractor={key => key + Math.random() * 10000000}
                renderItem={({item})=>{
                    const date = new Date(item.dt * 1000);
                    const datestr = date.toString();
                    // console.log(item);
                    return(
                        <>
                            <View style={styles.ContentView}>
                                <View>
                                    <Text style={{fontWeight:'bold'}}>{item.weather[0].main}</Text>
                                    <Text style={{ fontSize:12 }}>{item.weather[0].description}</Text>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'center',marginRight:-10}}>
                                    <Text>{`${MinMaxTemp(item.temp.max,item.temp.min,units.temperature)}`}</Text>
                                    <Image source={{uri : `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}} style={styles.icon}/>
                                </View>
                            </View>

                            {/* <View style={styles.ContentView}>
                            <Text>Precipitaton</Text>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <Text>{`${MinMaxTemp(item.temp.max,item.temp.min,units.temperature)}`}</Text>
                                    <Image source={{uri : `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}} style={styles.icon}/>
                                </View>
                            </View>

                            <View style={styles.ContentView}>
                            <Text>Probability of precipitation</Text>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <Text>{`${MinMaxTemp(item.temp.max,item.temp.min,units.temperature)}`}</Text>
                                    <Image source={{uri : `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}} style={styles.icon}/>
                                </View>
                            </View> */}

                            <View style={styles.Contents}>
                                <Text>Wind</Text>
                                <Text>{Wind(item.wind_speed,units.windspeed) + " "}{WindDegree(item.wind_deg)}</Text>
                            </View>

                            <View style={styles.Contents}>
                                <Text>Pressure</Text>
                                <Text>{Pressure(item.pressure,units.pressure)}</Text>
                            </View>

                            <View style={styles.Contents}>
                                <Text>Humidity</Text>
                                <Text>{item.humidity}%</Text>
                            </View>

                            <View style={styles.Contents}>
                                <Text>UV index</Text>
                                <Text>{item.uvi}</Text>
                            </View>

                            <View style={styles.Contents}>
                                <Text>Sunrise</Text>
                                <Text>{TimeFormatFull(item.sunrise,units.timeformat)}</Text>
                            </View>

                            <View style={styles.Contents}>
                                <Text>Sunset</Text>
                                <Text>{TimeFormatFull(item.sunset,units.timeformat)}</Text>
                            </View>
                        </>
                    );
                }}
            />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({

    OuterView: {
        // height:500,
        margin:10,
    },
    InnerView:{
        flex:1,
        flexDirection:'column',
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
    ContentView:{
        padding: 10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems : 'center',
        marginHorizontal:1,
        borderBottomColor:'#efefef',
        borderBottomWidth:1
    },
    Contents:{
        paddingHorizontal: 10,
        paddingVertical:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems : 'center',
        marginHorizontal:1,
        borderBottomColor:'#efefef',
        borderBottomWidth:1
    }
});

export default Tab;