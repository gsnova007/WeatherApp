const TimeFormat = (val,tf) => {
    // console.log(temp);
    if(tf === 0)
    {
        var date = new Date(val * 1000);
        var hours = date.getHours();
        var minute = date.getMinutes();
        return(`${hours}:00`);
    }
    if(tf === 1)
    {
        var date = new Date(val * 1000);
        var hours = date.getHours();
        var minute = date.getMinutes();
        var AmOrPm = hours >= 12 ? 'pm' : 'am';
        hours = (hours % 12) || 12;
        return(`${hours} ${AmOrPm}`);
    }
}

export default TimeFormat;