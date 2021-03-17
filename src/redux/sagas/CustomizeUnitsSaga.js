import searchWeather from "../../api/searchWeather";
import { AsyncStore, getStore, setUnits, getUnits } from "../../AsyncStorage";
import {call, put, takeLatest } from 'redux-saga/effects';

function* Temperature(action){
    const getTemp = yield call(getUnits);
    console.log(getTemp);
    const response = yield call(setUnits, action.payload);
    yield put({type: 'temperature', payload:action.payload});
    // const response = yield call(searchWeather,action.payload);
    // if(response.data)
    // {
    //     yield put({type: 'city_detail', payload: response.data});
    // }
    // else if(response.err)
    // {
    //     yield put({type: 'city_error', payload: response.err});
    // }
}

function* WindSpeed(action){
    // console.log('windspeed', action.payload);
    yield put({type: 'windspeed', payload:action.payload});
}

function* Pressure(action){
    // console.log('pressure', action.payload);
    yield put({type: 'pressure', payload:action.payload});
}

function* Precipitation(action){
    // console.log('precipitation', action.payload);
    yield put({type: 'precipitation', payload:action.payload});
}

function* Distance(action){
    // console.log('distance', action.payload);
    yield put({type: 'distance', payload:action.payload});
}

function* TimeFormat(action){
    // console.log('timeformat', action.payload);
    yield put({type: 'timeformat', payload:action.payload});
}

const CustomizeUnitsSaga = [ 
    takeLatest('CustomizeTemp', Temperature),
    takeLatest('CustomizeWind', WindSpeed),
    takeLatest('CustomizePressure', Pressure),
    takeLatest('CustomizePrecipitation', Precipitation),
    takeLatest('CustomizeDistance', Distance),
    takeLatest('CustomizeTimeFormat', TimeFormat),
];

export default CustomizeUnitsSaga;