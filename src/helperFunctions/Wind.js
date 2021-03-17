const Wind = (val,speed) => {
    // console.log(speed);
    if(speed === 0){
        newValue = val.toFixed(1);
        return(newValue + ' m/s');
    }
    else if(speed === 1){
        const newValue = (val * 3.6).toFixed(1);
        return(newValue + ' km/h');
    }
    else if(speed === 2){
        const newValue = (val * 2.237).toFixed(1);
        return(newValue + ' mph');
    }
}

export default Wind;