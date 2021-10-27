import React from 'react';
import axios from 'axios';

const searchWeather = async (city) => {
    try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1072b48295f7d725b25ffab39a97f802`);
        const response2 = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&appid=1072b48295f7d725b25ffab39a97f802`);
        // console.warn(response,response2);
        return({ data1: response.data, data2: response2.data});
    }
    catch(err)
    {
        return({err});
    }
}

export default searchWeather;