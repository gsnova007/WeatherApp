import { useEffect } from 'react';
import { getStore } from "../AsyncStorage";
import { useDispatch } from "react-redux";

const preLoad = ({navigation}) => {
    const dispatch = useDispatch();
    const StoreResponse = getStore();
    const data = dispatch({type: 'search_city', payload: 'London'});
    navigation.navigate('Home');

    return null;
}

export default preLoad;
