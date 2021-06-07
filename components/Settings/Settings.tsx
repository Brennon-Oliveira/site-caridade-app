import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import Constants from 'expo-constants';
import { ColorsContext } from '../../contexts/ColorContext';
import { Switch, TouchableOpacity } from 'react-native-gesture-handler';
import SwitchUtil from './SwitchUtil';

export default () => {
    
    const [publicProfile, setPublicProfile] = useState(true);
    const [twoStepsAuth, setTwoStepsAuth] = useState(false);

    const { darkMode, changeDarkMode,  red, black, white} = useContext(ColorsContext);

    function changePublicProfile(){
        setPublicProfile(!publicProfile)
    }

    function changeTwoStepsAuth(){
        setTwoStepsAuth(!twoStepsAuth);
    }

    return (
        <View style={{ paddingTop: 10, alignItems: 'center', marginTop: Constants.statusBarHeight }}>
            <SwitchUtil currentValue={darkMode} command={changeDarkMode} text='Modo escuro' />
            <SwitchUtil currentValue={publicProfile} command={changePublicProfile} text='Perfil público' />
            <SwitchUtil currentValue={twoStepsAuth} command={changeTwoStepsAuth} text='Verificação em duas etapas' />
            <View style={styles.btnsContainer}>
                <TouchableOpacity style={{...styles.btn, backgroundColor:black.toString()}}>
                    <Text style={{color:white.toString()}}>Mudar senha</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.btn, backgroundColor:red.toString()}}>
                    <Text style={{color:white.toString()}}>Excluir conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    btnsContainer:{
        flex:1,
        width:'100%',
        flexDirection:'row',
        justifyContent: 'space-evenly',
    },
    btn: {
        width:130,
        height:42,
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})