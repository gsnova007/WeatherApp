import React,{ useEffect } from 'react';
import {View, Image } from 'react-native';
import { getStore, setUnitsFirstly, getUnits } from "../AsyncStorage";
import { useDispatch } from "react-redux";

const preLoad = ({navigation}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetchData() {
            const StoreResponse = await getStore();
            if(StoreResponse)
            {
                const units = await getUnits();
                // console.log(units);
                dispatch({type: 'CustomizeUnits', payload: units});
                if(units.temperature){
                    await setUnitsFirstly();
                }
                dispatch({type: 'search_city', payload: StoreResponse.name});
                setTimeout(function(){ navigation.navigate('Home'); }, 10000);
                // console.log('preLoad if: ',StoreResponse.name);
            }
            else{
                await setUnitsFirstly();
                // const units = await getUnits();
                // console.log(units);
                dispatch({type: 'search_city', payload: 'London'});
                setTimeout(function(){ navigation.navigate('Home'); }, 5000);
                // console.log('preLoad else: ');
            }
        }
    fetchData();
},[]);

    return null;
}

export default preLoad;
