import {AsyncStorage} from 'react-native';

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
    await AsyncStorage.setItem('units',units.toString());
    //console.log(JSON.parse(value));
  } catch (error) {
    console.log(error);
  }
}

async function getUnits() {
  try {
    const value = await AsyncStorage.getItem('units');
    //console.log(JSON.parse(value));
    return(parseInt(value));
  } catch (error) {
    console.log(error);
  }
}

export { AsyncStore, getStore, setUnits, getUnits};