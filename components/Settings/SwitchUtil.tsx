import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import Constants from 'expo-constants';
import { ColorsContext } from '../../contexts/ColorContext';
import { Switch, TouchableOpacity } from 'react-native-gesture-handler';

interface props {
    currentValue: Boolean;
    command: ()=>void;
    text: String;
}

export default (props: props) => {

    const { red, green, black} = useContext(ColorsContext);

    return (
        <View style={{ marginBottom: 25 ,paddingHorizontal: 15 ,flex:1, width:'100%', justifyContent: 'center', flexDirection:'row'}}>
            
            <Text style={{width:'50%', color:black.toString(), fontSize:16}}>{props.text}</Text>
            <Switch
                style={{width:'50%'}}
                trackColor={{ false: red.toString(), true: green.toString() }}
                thumbColor={black.toString()}
                ios_backgroundColor="#3e3e3e"
                onValueChange={props.command}
                value={!!props.currentValue}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    userImage: {
        width: 70,
        height: 70,
        borderRadius: 70,
        backgroundColor: '#C4C4C4',
        borderWidth:1,
    },
    userName: {
        fontFamily: 'FiraSans',
        fontSize: 24,
        marginVertical: 5,
    },
    userContribution: {
        fontSize: 18,
        fontFamily: 'FiraSans'
    },
    bar:{
        width:'100%',
        height:2,
        marginVertical:15
    }
})