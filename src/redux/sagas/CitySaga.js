import searchWeather from "../../api/searchWeather";
import { AsyncStore, getStore } from "../../AsyncStorage";
import {call, put, takeLatest } from 'redux-saga/effects';

function* FetchCity(action){
    const response = yield call(searchWeather,action.payload);
    if(response.data)
    {
        yield call( AsyncStore, JSON.stringify(response.data) );
        //const responseA = yield call( getStore );
        // console.log('CitySaga', responseA);
        yield put({type: 'city_detail', payload: response.data});
    }
    else if(response.err)
    {
        yield put({type: 'city_error', payload: response.err});
    }
}

const CityWeather = [ 
    takeLatest('search_city', FetchCity)
];

export default CityWeather;