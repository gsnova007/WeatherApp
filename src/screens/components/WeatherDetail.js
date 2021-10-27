import React from "react";
import { useSelector } from 'react-redux';
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import Temperature from "../../helperFunctions/Temperature";

const WeatherDetail = props => {
    const data = props.stateData;
    const units = useSelector(state => state.CustomizeUnitsReducer);
    return(
        <View style={styles.view}>
            <FlatList
                data={data.weather}
                keyExtractor={key => key+1}
                renderItem={({item})=>{
                    return(
                        <View style={styles.view2}>
                            <View style={styles.view3}>
                                <Image source={{uri : `https://openweathermap.org/img/wn/${item.icon}@2x.png`}} style={styles.icon}/>
                                <Text style={styles.text}>{item.main}</Text>
                            </View>
                            <Text style={styles.text2}>{item.description}</Text>
                            <Text style={styles.text3}>
                                {/* { (async () => {const value = await Temperature(data.main.temp); console.log(value)})()} */}
                                {Temperature(data.main.temp,units.temperature)}
                                {/* {temp2} */}
                            </Text>
                            <Text style={styles.text2}>{`Feels like ${Temperature(data.main.feels_like,units.temperature)}`}</Text>
                        </View>
                    );
                }}
            />
            {/* <Text>{JSON.stringify(data)}</Text>  */}
        </View>
    );
}

const styles = StyleSheet.create({
    view:{
        backgroundColor:'#fff',
    },
    view2:{
        alignItems:'center',
        marginTop:20,
        marginBottom:30
    },
    view3:{
        
        justifyContent:'center',
        flexDirection:'row'
    },
    icon:{
        height:55,
        width:55,
    },
    text:{
        color:'#595959',
        marginTop:17,
    },
    text2:{
        color:'#949494',
        fontSize:12,
        top:-5
    },
    text3:{
        fontSize:70,
    }
});

export default WeatherDetail;