import { useEffect, FC, useState } from 'react';
import {View, TextInput, StyleSheet, ScrollView, FlatList, RefreshControl, TouchableOpacity, Dimensions, Text} from 'react-native';
import Post from '../../entities/Post/Post';
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks/redux';
import { fetchFlowers } from '../../app/redux/ActionCreator';
import { purple } from '../../app/const/color';
import Search from '../../features/Search/Search';

const halfWindowsWidth = Dimensions.get('window').height - 60

export interface INotes{
    id: number,
    text: string,
    time: string
}

const Home:FC<{navigation: any}> = ({navigation})=>{

    const flowers = useAppSelector(state=>state.flowerReducer.flower)
    const dispatch = useAppDispatch()
    const isLoading = useAppSelector(state=>state.flowerReducer.isLoading)

    function fetching(){
        dispatch(fetchFlowers())
    }
    const input = useAppSelector(state=>state.searchReducer.search)

    useEffect(()=>{
        fetching()
    },[])

    if(!isLoading && flowers.length==0) {
        
        return (
            <View>
                <Search></Search>
                <Text>Ничего не найдено</Text>
            </View>
        )
    }
    
    return(
        <View>
            <Search></Search>
            <ScrollView 
                    refreshControl={<RefreshControl colors={[purple]} refreshing={isLoading} onRefresh={()=>dispatch(fetchFlowers({name: input}))}/>} style={{minHeight: halfWindowsWidth}}
                >
                <View style={styles.scroll}>
                    {flowers?.map(({_id,name, price, description, status, image})=>(
                        <Post key={_id} status={status} description={description} navigation={navigation} image={image} price={price} _id={_id} name={name}/>
                    ))}
                    </View>
            </ScrollView>
        </View>
    )
}

export default Home


const styles = StyleSheet.create({
    container: {
      padding:5,
      backgroundColor: '#fff',
      height: halfWindowsWidth,
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      width: '100%',
      justifyContent: 'space-around'
    },
    scroll: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        minHeight: "100%",
        marginBottom: 100,
        justifyContent: 'space-around'
    },
    block: {
        marginTop: 10,
        overflow:'hidden',
        padding: 10,
        borderColor: '#007bff',
        borderWidth: 5,
        borderRadius: 20,
        borderBottomRightRadius: 20,
    },
});