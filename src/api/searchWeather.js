import React, { useEffect, useState } from 'react';
import axios from 'axios';

const searchWeather = async (city) => {
    try{
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1072b48295f7d725b25ffab39a97f802`);
        return({ data: response.data});
    }
    catch(err)
    {
        return({err});
    }
}

export default searchWeather;