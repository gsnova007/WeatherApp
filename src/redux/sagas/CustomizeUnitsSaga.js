import searchWeather from "../../api/searchWeather";
import { AsyncStore, getStore, setUnits, getUnits } from "../../AsyncStorage";
import {call, put, takeLatest } from 'redux-saga/effects';
import CustomizeUnitsReducer from "../reducers/CustomizeUnitsReducer";

function* Temperature(action){
    const units = yield call(getUnits);
    newJSON = { ...units, temperature:action.payload};
    const response = yield call(setUnits, JSON.stringify(newJSON));
    yield put({type: 'temperature', payload: newJSON});
    // console.log('get units ->',units);
}

function* WindSpeed(action){
    const units = yield call(getUnits);
    newJSON = { ...units, windspeed:action.payload};
    const response = yield call(setUnits, JSON.stringify(newJSON));
    // console.log('windspeed', action.payload);
    yield put({type: 'windspeed', payload: newJSON});
}

function* Pressure(action){
    const units = yield call(getUnits);
    newJSON = { ...units, pressure:action.payload};
    const response = yield call(setUnits, JSON.stringify(newJSON));
    // console.log('pressure', action.payload);
    yield put({type: 'pressure', payload:newJSON});
}

function* Precipitation(action){
    const units = yield call(getUnits);
    newJSON = { ...units, precipitation:action.payload};
    const response = yield call(setUnits, JSON.stringify(newJSON));
    // console.log('precipitation', action.payload);
    yield put({type: 'precipitation', payload:newJSON});
}

function* Distance(action){
    const units = yield call(getUnits);
    newJSON = { ...units, distance:action.payload};
    const response = yield call(setUnits, JSON.stringify(newJSON));
    // console.log('distance', action.payload);
    yield put({type: 'distance', payload:newJSON});
}

function* TimeFormat(action){
    const units = yield call(getUnits);
    newJSON = { ...units, timeformat:action.payload};
    const response = yield call(setUnits, JSON.stringify(newJSON));
    // console.log('timeformat', action.payload);
    yield put({type: 'timeformat', payload:newJSON});
}

function* CustomizeUnits(action){
    // console.log('timeformat', action.payload);
    yield put({type: 'setunits', payload:action.payload});
}

const CustomizeUnitsSaga = [ 
    takeLatest('CustomizeTemp', Temperature),
    takeLatest('CustomizeWind', WindSpeed),
    takeLatest('CustomizePressure', Pressure),
    takeLatest('CustomizePrecipitation', Precipitation),
    takeLatest('CustomizeDistance', Distance),
    takeLatest('CustomizeTimeFormat', TimeFormat),
    takeLatest('CustomizeUnits', CustomizeUnits),
];

export default CustomizeUnitsSaga;