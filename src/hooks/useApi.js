import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default () => {
    const [results, setResults ] = useState([]);
    const [ errors, setErrors ] = useState([]);

    const searchWeather = async (city) => {
        try{
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1072b48295f7d725b25ffab39a97f802`);
            setResults(response.data);
        }
        catch(err)
        {
            setErrors(err);
        }
    }

    useEffect(()=>{searchWeather('Saharanpur')},[]);
    return([ searchWeather, results, errors ]);
}