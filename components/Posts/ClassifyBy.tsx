import React, { useContext, useEffect, useState } from 'react';
import { Picker, StyleSheet, Text, View,  } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { ColorsContext } from '../../contexts/ColorContext';
import { FontAwesome } from '@expo/vector-icons';

export default () => {
    
    const [search, setSearch] = useState('');
    const [classifyBy, setClassifyBy] = useState()

    const { black, white } = useContext(ColorsContext);

    return (
        <View style={{ paddingHorizontal: 10, paddingTop: 10, alignItems: 'center'}}>
            <Text style={{...styles.text,color: black.toString()}}>Classificar por:</Text>
            <View style={{...styles.input,
                borderColor:black.toString()
            }}>
                <Picker
                    selectedValue={classifyBy}
                    onValueChange={(itemValue, itemIndex) => setClassifyBy(itemValue)}
                    style={{color:black.toString()}}
                    >
                    <Picker.Item label="Por data" value="byDate" />
                    <Picker.Item label="Por likes" value="byLikes" />
                </Picker>
                <FontAwesome name="sort-down"
                size={24}
                color={black.toString()}
                style={{
                    position: "absolute",
                    right: 22,
                    top:8
                }}/>
            </View>
            <TouchableOpacity style={{alignItems:'center'}} >
                <Text style={{...styles.buttonText,
                    backgroundColor:black.toString(),
                    color:white.toString()}}
                >Filtrar!</Text>
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
        marginTop:15,
        flex:1,
        height:50,
    },
    buttonText:{
        fontSize:20,
        fontFamily:'FiraSans',
        paddingVertical:5,
        textAlign:'center',
        width:200,
    },
    text: {
        fontSize:20,
    }
})