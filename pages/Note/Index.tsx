import AsyncStorage from "@react-native-async-storage/async-storage"
import { FC, useState } from "react"
import { View, Text, Button, Image, StyleSheet, ImageSourcePropType, Pressable } from "react-native"
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { purple } from "../../app/const/color"
import { styled } from "styled-components/native"
import EventView from "../../shared/MyView/MyView"
import { Dimensions } from 'react-native'

interface INote {
    route:{
        params:{
            id: number
            title: string
            time: string,
            image: ImageSourcePropType,
            price: string
        }
    },
    navigation?: any
}


const halfWindowsWidth = Dimensions.get('window').width - 80

const Note:FC<INote> = ({route, navigation})=>{

    const {id,title, time, image, price}=route?.params

    return(
        <View style={style.flower}>
            <Image style={style.image} source={{uri: image}}></Image>
            <Text style={style.text}>{title}</Text>
            <Text style={style.text}>Цена: {price}</Text>
            <View style={style.buttons}>
                <EventView style={style.likeButton} activeStyle={style.likeButtonActive}>
                    <Ionicons name="heart-outline" size={40} color={'white'}/>
                </EventView>
                <EventView style={style.likeButton2} activeStyle={style.likeButtonActive}>
                    <TextBuy>Купить</TextBuy>
                </EventView>
            </View>
        </View>
    )
}

const TextBuy = styled.Text`
    font-size: 20px;
    color: white
`

const style=StyleSheet.create({
    likeButton:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: purple,
        width: 60,
        borderRadius: 5,
        transition: '0.3s'
    },
    likeButton2:{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: purple,
        width: halfWindowsWidth,
        gap: 10,
        alignItems: 'center',
        borderRadius: 5,
        transition: '0.3s'
    },
    likeButtonActive: {
        backgroundColor: 'purple',
        transition: '0.3s'
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        minWidth: 100,
    },
    flower: {
        paddingLeft: 5,
        paddingRight: 5,
        gap: 10,
        width: '100%'
    },
    image:{
        width: '100%',
        height: 400,
        resizeMode: 'contain'
    },
    text:{
        fontSize: 20
    }
})

export default Note 