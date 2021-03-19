const Visibility = (val,distance) => {
    if(distance === 0)
    {
        newVal = (val/1000).toFixed(1);
        return(newVal + ' km');
    }
    else if(distance === 1)
    {
        newVal = (val/1609).toFixed(1);
        return(newVal + ' mi');
    }
}

export default Visibility;