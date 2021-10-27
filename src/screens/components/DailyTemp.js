import React, { useState,useEffect } from 'react';
import { useSelector } from "react-redux";
import { Text, View, StyleSheet, FlatList, Image, SafeAreaView, TouchableOpacity, LogBox} from 'react-native';
import { MinMaxTemp } from "../../helperFunctions/Temperature";
import { Icon } from 'react-native-elements';
import Tab from '../components/Tab';

const DailyTemp = ({data}) => {
    // console.log(data.data2.current.sunrise);
    const units = useSelector(state => state.CustomizeUnitsReducer);
    let sunrise_unix_timestamp = [];
    const [visible, setVisible] = useState(true);
    const [FullData, setFullData] = useState([]);
    let [DateStr, setDateStr] = useState('');
    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
        //LogBox.ignoreWarnings(['VirtualizedLists should never be nested']);
    })
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

    if(visible)
    {
        return(
            <View style={styles.OuterView}>
                <SafeAreaView style={styles.InnerView}>
                <FlatList
                    data={data.data2.daily}
                    keyExtractor={key => key + Math.random() * 10000000}
                    renderItem={({item})=>{
                        const date = new Date(item.dt * 1000);
                        const datestr = date.toString();
                        // console.log(date);
                        return(
                            <TouchableOpacity onPress={()=>{setFullData([item]); setDateStr(datestr); setVisible(false);}}>
                                <View style={styles.ContentView}>
                                    <Text>{datestr.slice(0,15)}</Text>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Text>{`${MinMaxTemp(item.temp.max,item.temp.min,units.temperature)}`}</Text>
                                        <Image source={{uri : `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}} style={styles.icon}/>
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
    else{
        return(
            <View>
                <View style={styles.OuterView}>
                    <View style={styles.ContentView}>
                        <Text style={{fontWeight:'bold'}}>{DateStr.slice(0,15)}</Text>
                        <TouchableOpacity onPress={()=>{setVisible(true);}}>
                            <Icon name='times' type='font-awesome' color='#afafaf'/>
                        </TouchableOpacity>
                    </View>
                </View>
                <Tab data={FullData}/>
            </View >
        );
    }
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