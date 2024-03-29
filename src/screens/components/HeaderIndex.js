import React, { useState } from 'react';
import { Modal, View, StyleSheet, TextInput } from "react-native";
import { Header, Icon } from 'react-native-elements';
import { useDispatch } from "react-redux";
import allActions from '../../redux/actions';

const HeaderIndex = ({navigation, stateData}) => {
    const [modal, setModal] = useState(false);
    const city = stateData;
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    return(
        <>
            <Header
                placement='left'
                leftComponent={{
                    icon: 'search',
                    color: '#000',
                    onPress: () => (setModal(true))
                }}
                centerComponent={{ 
                    text: city.name,
                    style: {
                        color: '#000',
                        fontSize:20,
                        fontWeight:'bold'
                    },
                    onPress: () => (setModal(true))
                }}
                rightComponent={{
                    icon: 'settings', 
                    color: '#000',
                    onPress: ()=>(navigation.navigate('Settings'))
                }}
                containerStyle={{
                    backgroundColor: '#ffffff',
                    justifyContent: 'space-around',
                    height:110
                }}
            />
            <Modal visible={modal} style={styles.modal} animationType="fade">
                <View style={styles.outerView}>
                    <View style={styles.innerView1}>
                        <View style={styles.searchbar}>
                            <Icon name='search' type='evilicon' lightTheme color='#000000' containerStyle={styles.iconSearch}/>
                            <TextInput 
                                placeholder="Enter any city" 
                                style={{flex:1}}
                                onChangeText={(text)=>(setText(text))} 
                                onEndEditing={() => {dispatch(allActions.SearchCity.SearchCity(text)); setModal(false)}}
                            />
                        </View>
                        <Icon name='close' type='antdesign' lightTheme color='#000000' onPress={()=>{setModal(false)}} containerStyle={styles.iconClose}/>
                    </View>
                </View>
            </Modal>
        </>
    );
}

const styles=StyleSheet.create({
    modal:{
        flex:1,
    },
    outerView:{
        flex: 1,
    },
    innerView1:{
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingVertical:15,
    },
    iconClose:{
        justifyContent:'center',
        paddingHorizontal:10
    },
    iconSearch:{
        justifyContent:'center',
        marginLeft:10
    },
    searchbar:{
        flexDirection:'row',
        flex:1,
        backgroundColor:'#dbdbdb',
        borderRadius:50,
        marginLeft:15,
        paddingRight:30
    }
});

export default HeaderIndex;