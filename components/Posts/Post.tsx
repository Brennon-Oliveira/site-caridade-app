import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import Constants from 'expo-constants';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { ColorsContext } from '../../contexts/ColorContext';

interface props {
    id: String;
    picture: String;
    username: String;
    text: String;
}

export default function Post(props: props){
    
    const [search, setSearch] = useState('');

    const { black, white, red } = useContext(ColorsContext);

    return (
        <View style={{ paddingHorizontal: 10, paddingTop: 10, alignItems: 'center',
        borderWidth: 1, borderColor: black.toString(), marginTop: 15}}>
            <View style={{ ...styles.userImage,borderColor:black.toString() }}></View>
            <Text style={{ ...styles.userName, color:black.toString() }}>{props.username}</Text>
            <Text style={{ ...styles.text, color:black.toString() }}>{props.text}</Text>
            <TouchableOpacity style={{alignItems:'center'}} >
                <Text style={{...styles.buttonText,
                    backgroundColor:red.toString(),
                    color:white.toString()}}>Curtir!</Text>
            </TouchableOpacity>
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
        fontSize: 20,
        marginVertical: 5,
    },
    text: {
        fontFamily:'OpenSans',
        fontSize:13,
        width:'100%',
        paddingHorizontal:10,
        fontWeight: '300',
        textAlign: 'center',
        marginVertical:10,
    },
    buttonText:{
        fontSize:20,
        fontFamily:'FiraSans',
        paddingVertical:5,
        textAlign:'center',
        width:200,
        marginBottom:10,
    },
})