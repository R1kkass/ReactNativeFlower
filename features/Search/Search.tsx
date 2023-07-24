import { View, TouchableOpacity, StyleSheet, TextInput } from "react-native"
import React, {FC, useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { purple } from "../../app/const/color"
import { useDispatch } from "react-redux"
import { useAppDispatch, useAppSelector } from "../../app/hooks/redux"
import { fetchFlowers } from "../../app/redux/ActionCreator"
import { sendSearch } from "../../app/redux/SearchSlice"

const Search:FC<{navigation?: any}> = ({navigation})=>{
    const dispatch = useAppDispatch()
    const input = useAppSelector(state=>state.searchReducer.search)

    return (
        <View style={styles.search}>
            <View style={styles.input}>
                <TextInput onSubmitEditing={()=>dispatch(fetchFlowers({name: input}))} onChangeText={(e)=>dispatch(sendSearch(e))} placeholder='Поиск...'></TextInput>
                <TouchableOpacity onPress={()=>dispatch(fetchFlowers({name: input}))} style={styles.button}>
                    <Ionicons name="search" color="#C71585" size={30}/>
                </TouchableOpacity>
            </View>
        </View>    
    )
}

export default Search

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        right: 10,
    },
    search: {
        display: 'flex',
        flexDirection:'row',
        borderColor: 'gray',
        height: 50,
        backgroundColor: 'white',
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    input:{
        position: 'relative',
        width: '100%',
        padding: 5,
        borderWidth: 1,
        borderColor: purple,
        backgroundColor: 'white',
        height: 45,
        borderRadius: 10
    }
})