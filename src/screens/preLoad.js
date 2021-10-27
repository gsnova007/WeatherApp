import React from 'react';
import {View, Image, Text } from 'react-native';
import { getStore, setUnitsFirstly, getUnits } from "../AsyncStorage";
import { useDispatch } from "react-redux";

const appicon = require('../../assets/appicon_round.png');

const preLoad = ({navigation}) => {
    const dispatch = useDispatch();
    navigation.addListener('focus', async () => {
            const StoreResponse = await getStore();
            if(StoreResponse !== null)
            {
                dispatch({type: 'search_city', payload: StoreResponse.data1.name});
                const units = await getUnits();
                // console.log(StoreResponse);
                if(units === null){
                    await setUnitsFirstly();
                }
                else{
                    dispatch({type: 'CustomizeUnits', payload: units});
                }
                setTimeout(function(){ navigation.reset({index:0,routes:[{name:'Home'}]}) }, 5000);
                // console.log('preLoad if: ',StoreResponse.name);
            }
            else{
                dispatch({type: 'search_city', payload: 'London'});
                await setUnitsFirstly();
                // const units = await getUnits();
                // console.log(units);
                setTimeout(function(){ navigation.reset({index:0,routes:[{name:'Home'}]}) }, 5000);
                // console.log('preLoad else: ');
            }
        }
    );
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Image source={appicon} style={{height:100, width:100}}/>
            <Text style={{fontSize:17,fontWeight:'bold'}}>Weather App</Text>
            <Text style={{fontSize:12}}>Fetching Data...</Text>
        </View>
    );
}

export default preLoad;
