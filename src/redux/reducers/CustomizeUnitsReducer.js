const initialState = { temperature: 0, windspeed: 0, pressure: 0, precipitation: 0, distance: 0, timeformat: 0 };

const CustomizeUnitsReducer = (state = initialState, action) => {
    switch(action.type)
    {
        // Set Temperature Units
        case 'temperature':
        if(action.payload === 0)
        {
            return({...state, temperature: 0});
        }
        else if(action.payload === 1)
        {
            return({...state, temperature: 1});
        }

        // Set Wind Speed Units
        case 'windspeed':
        if(action.payload === 0)
        {
            return({...state, windspeed: 0});
        }
        else if(action.payload === 1)
        {
            return({...state, windspeed: 1});
        }
        else if(action.payload === 2)
        {
            return({...state, windspeed: 2});
        }

        // Set Pressure Units
        case 'pressure':
        if(action.payload === 0)
        {
            return({...state, pressure: 0});
        }
        else if(action.payload === 1)
        {
            return({...state, pressure: 1});
        }

        // Set Precipitation Units
        case 'precipitation':
        if(action.payload === 0)
        {
            return({...state, precipitation: 0});
        }
        else if(action.payload === 1)
        {
            return({...state, precipitation: 1});
        }

        // Set Distance Units
        case 'distance':
        if(action.payload === 0)
        {
            return({...state, distance: 0});
        }
        else if(action.payload === 1)
        {
            return({...state, distance: 1});
        }

        // Set Time Format Units
        case 'timeformat':
        if(action.payload === 0)
        {
            return({...state, timeformat: 0});
        }
        else if(action.payload === 1)
        {
            return({...state, timeformat: 1});
        }

        default:
        return state;
    }
}

export default CustomizeUnitsReducer;