import { combineReducers } from 'redux';
import CityReducer from './CityReducer';
import CustomizeUnitsReducer from './CustomizeUnitsReducer';

export default combineReducers({ CityReducer:  CityReducer, CustomizeUnitsReducer: CustomizeUnitsReducer});