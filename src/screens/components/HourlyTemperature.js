import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const HourlyTemperature = () => {
    return(
        <View style={styles.OuterView}>
            <View style={styles.InnerView}>
                <Text style={styles.Text}>Wind: 3.4mph SW+</Text>
                <Text style={styles.Text}>Humidity: 30%</Text>
                <Text style={styles.Text}>UV index: 7.8</Text>
            </View>

            <View style={styles.InnerView}>
                <Text style={styles.Text}>Pressure: 3.4mph SW+</Text>
                <Text style={styles.Text}>Visibility: 30%</Text>
                <Text style={styles.Text}>Dew Point: 544</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    OuterView: {
        height:80,
        margin:10,
    },
    InnerView:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    Text:{
        fontWeight:'bold',
        fontSize:12
    }
});
    
export default HourlyTemperature;