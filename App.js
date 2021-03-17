import React from 'react';
import {Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Index from './src/screens/Index';
import preLoad from './src/screens/preLoad';
import Settings from './src/screens/Settings';
import DifferentWeather from './src/screens/DifferentWeather';
import CustomizeUnits from './src/screens/CustomizeUnits';
import Icon from 'react-native-vector-icons/Octicons';
import { Provider } from "react-redux";
import store from './src/redux/store';

const Stack = createStackNavigator();

const App = () => {
  return(
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="preLoad">
          <Stack.Screen options={{headerShown: false}} name="preLoad" component={ preLoad }/>
          <Stack.Screen options={{headerShown: false}} name="Home" component={ Index }/>
          <Stack.Screen name="Settings" component={ Settings }/>
          <Stack.Screen name="DifferentWeather" component={ DifferentWeather }/>
          <Stack.Screen name="CustomizeUnits" component={ CustomizeUnits }/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}



export default App;