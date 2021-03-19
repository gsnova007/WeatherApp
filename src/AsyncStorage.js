import AsyncStorage from '@react-native-community/async-storage';

async function AsyncStore(city) {
    try {
      await AsyncStorage.setItem('city', city);
    } catch (error) {
      console.log(error);
    }
}

async function getStore() {
    try {
      const value = await AsyncStorage.getItem('city');
      //console.log(JSON.parse(value));
      return(JSON.parse(value));
    } catch (error) {
      console.log(error);
    }
}

async function setUnits(units) {
  try {
    await AsyncStorage.setItem('units',units);
    //console.log(JSON.parse(value));
  } catch (error) {
    console.log(error);
  }
}

async function setUnitsFirstly() {
  try {
    units = '{ "temperature": 0, "windspeed": 0, "pressure": 0, "precipitation": 0, "distance": 0, "timeformat": 0 }';
    await AsyncStorage.setItem('units',units);
    //console.log(JSON.parse(value));
  } catch (error) {
    console.log(error);
  }
}

async function getUnits() {
  try {
    const value = await AsyncStorage.getItem('units');
    //console.log(JSON.parse(value));
    return(JSON.parse(value));
  } catch (error) {
    console.log(error);
  }
}

export { AsyncStore, getStore, setUnits, getUnits, setUnitsFirstly};