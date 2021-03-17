const SearchCity = (city) => {
    return({
        type: 'search_city',
        payload: city
    });
}

export default { SearchCity };