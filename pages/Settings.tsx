import React, { useContext } from 'react';
import { Button, ScrollView, View } from "react-native";
import Constants from 'expo-constants';
import { ColorsContext } from '../contexts/ColorContext';
import Perfil from '../components/Perfil';
import Settings from '../components/Settings/Settings';

interface props{
    navigation: {navigate:(args?: String)=>void},
}

export default ({navigation} : props)=>{

    const {white} = useContext(ColorsContext);

    return(
        <ScrollView style={{backgroundColor:white.toString()}}>
            <Perfil />
            <Settings />
        </ScrollView>
    )
}