const Temperature = (val,temp) => {
    // console.log(temp);
    if(temp === 0)
    {
        const value = Math.round(val-273.15);
        // console.log(value + '\u00b0C');
        return(value +'\u00b0C');
    }
    if(temp === 1)
    {
        const value = Math.round((val - 273.15) * 9/5 + 32);
        // console.log(value + '\u00b0C');
        return(value + '\u00b0F');
    }
}

export default Temperature;