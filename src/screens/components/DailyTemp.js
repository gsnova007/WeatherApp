import React from 'react';
import { useSelector } from "react-redux";
import { Text, View, StyleSheet, FlatList, Image, SafeAreaView} from 'react-native';
import Temperature, { MinMaxTemp } from "../../helperFunctions/Temperature";
import TimeFormat from "../../helperFunctions/TimeFormat";
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';

const DailyTemp = ({data}) => {
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
            <SafeAreaView style={styles.InnerView}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={data.data2.daily}
                keyExtractor={key => key + Math.random() * 10000000}
                renderItem={({item})=>{
                    const date = new Date(item.dt * 1000);
                    const str = date.toString();
                    // console.log(date);
                    return(
                        <TouchableOpacity>
                            <View style={styles.ContentView}>
                                <Text>{str.slice(0,15)}</Text>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <Text>{`${MinMaxTemp(item.temp.max,item.temp.min,units.temperature)}`}</Text>
                                    <Image source={{uri : `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}} style={styles.icon}/>
                                    <Icon name='angle-right' type='font-awesome' color='#afafaf'/>
                                </View>
                            </View>
                        </TouchableOpacity>
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
    }
});
    
export default DailyTemp;