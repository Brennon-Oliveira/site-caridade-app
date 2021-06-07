import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import Constants from 'expo-constants';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { ColorsContext } from '../../contexts/ColorContext';

export default () => {
    
    const [search, setSearch] = useState('');

    const { black, white } = useContext(ColorsContext);

    return (
        <View style={{ paddingHorizontal: 10, paddingTop: 10, alignItems: 'center', marginTop: Constants.statusBarHeight }}>
            <TextInput
                    placeholder='Procurar...'
                    placeholderTextColor={black.toString()}
                    value={search}
                    onChangeText={setSearch}
                    autoCompleteType='username'
                    style={{...styles.input,
                        borderColor:black.toString(),
                        color: black.toString(),
                    }}
                />
            <TouchableOpacity style={{alignItems:'center'}} >
                <Text style={{...styles.buttonText,
                    backgroundColor:black.toString(),
                    color:white.toString()}}>Enviar!</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        width:'90%',
        borderWidth:1,
        paddingHorizontal:5,
        marginBottom:15,
    },
    buttonText:{
        fontSize:20,
        fontFamily:'FiraSans',
        paddingVertical:5,
        textAlign:'center',
        width:200,
    },
})