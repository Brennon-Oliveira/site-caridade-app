import React, { useContext } from 'react';
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Constants from 'expo-constants';
import { ColorsContext } from '../contexts/ColorContext';
import SearchBar from '../components/Posts/SearchBar';
import Perfil from '../components/Perfil';
import ClassifyBy from '../components/Posts/ClassifyBy';
import Post from '../components/Posts/Post';

interface props{
    navigation: {navigate:(args?: String)=>void},
}

export default ({navigation}:props)=>{

    const {white, black} = useContext(ColorsContext);

    return(
        <ScrollView style={{backgroundColor:white.toString()}}>
            <SearchBar />
            <View style={{...styles.bar,backgroundColor:black.toString()}}></View>
            <Perfil posts={true} />
            <View style={{...styles.bar,backgroundColor:black.toString()}}></View>
            <ClassifyBy />
            <View style={{...styles.bar,backgroundColor:black.toString()}}></View>
            <View style={{paddingHorizontal:20}}>
                <Post id='' picture='' username='Nome do usuário' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum turpis elit, dictum a velit sed, accumsan bibendum ex. Nunc risus arcu, dictum id rhoncus eget, accumsan nec orci. Praesent acLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum turpis elit, dictum a velit sed, accumsan bibendum ex. Nunc risus arcu, dictum id rhoncus eget, accumsan nec orci. Praesent ac..' />
                <Post id='' picture='' username='Nome do usuário' text='Maecenas quis tristique nisl. Sed id risus mauris. Nunc sed blandit nunc. Phasellus ut nisl elit. Suspendisse egestas sollicitudin dui ut eleifend. Vivamus nulla erat, lobortis id commodo nec, pulvinar at velit. Curabitur vel libero nec nulla tempus sagittis.' />
                <Post id='' picture='' username='Nome do usuário' text='Nullam aliquam mauris posuere mi imperdiet faucibus. Nullam ut tortor augue. Donec tincidunt massa eu sem tempor tempus. Aliquam erat volutpat. Sed mattis posuere maximus. Suspendisse tincidunt viverra eros, maximus condimentum purus consectetur sed. Duis nulla velit, luctus et dolor id, molestie vehicula nulla. Suspendisse nunc mi, consectetur eu felis non, venenatis tincidunt neque.' />
                <Post id='' picture='' username='Nome do usuário' text='Proin nisl tortor, accumsan eget iaculis id, consequat at sem. Nulla facilisi. Aenean nibh urna, ullamcorper laoreet nisi at, mattis sodales nunc. Sed auctor consequat porta. Aenean ultricies porta elit, eget fringilla enim pulvinar vel. Phasellus neque sapien, porta ac vehicula sit amet, porttitor eget est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    bar:{
        width:'100%',
        height:2,
        marginVertical:15
    },
})