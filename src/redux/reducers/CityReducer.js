const initialState = { CityDetail: {}, Errors: {} };

const CityReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case 'city_detail':
        return { CityDetail : action.payload };

        case 'city_error':
        return {...state, Errors: action.payload }

        default:
        return state;
    }
}

export default CityReducer;