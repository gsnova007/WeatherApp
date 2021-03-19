const Pressure = (val,pressure) => {
    if(pressure === 0)
    {
        return(val + ' hPa');
    }
    else if(pressure === 1)
    {
        newVal = ( val/3386 ).toFixed(2);
        return(newVal + ' inHg');
    }
}

export default Pressure;