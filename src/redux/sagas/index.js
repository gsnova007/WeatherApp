import { all } from "redux-saga/effects";
import CityWeather from "./CitySaga";
import CustomizeUnitsSaga from "./CustomizeUnitsSaga";

export default function* rootSaga() {
    yield all([...CityWeather, ...CustomizeUnitsSaga]);
}