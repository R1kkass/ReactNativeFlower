import { FC, useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View, Image, Button } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react'
import { Dimensions } from 'react-native'
import { IFlower } from "../../app/api/FlowerApi"
import { purple } from "../../app/const/color";

const halfWindowsWidth = Dimensions.get('window').width / 1.3

interface IPost extends IFlower{
    navigation: any,
    image: string,
    price: string
}

const Post:FC<IPost> = ({_id, name, image, price, navigation})=>{

    const [visible, setVisible] = useState<boolean>(false)

    return(
        <TouchableOpacity
            onPress={()=>navigation.navigate('Цветок', {_id, title: name, price, image})}
            onLongPress={()=>setVisible(p=>!p)}
            style={styles.touch}
        >
        <View style = {styles.block}>
                <Image style={styles.image} source={{uri:image}}/>
                <View style={styles.textBlock}>
                    <Text style={styles.price}>Цена: {price} р</Text>
                    <Text>{name}</Text>
                    <Button color="#C71585" title="Купить"></Button>
                </View>
                <View style={styles.heart}>
                    <Ionicons name="heart-outline" size={30} color={purple}/>
                </View>
        </View>
        </TouchableOpacity>
    )
}

export default Post

const styles = StyleSheet.create({
    heart: {
        position: 'absolute',
        right: 10,
        top: 10
    },
    touch: {
        width: '48%'
    },
    price: {
        fontSize: 20
    },
    image: {
        height: '60%',
        objectFit: 'contain',
        width: '100%'
    },
    button:{
        width: '100%',
        minHeight: 30,
        color: 'white',
        backgroundColor: 'pink',
        textAlign: 'center',
        flex: 1, 
        display:'flex',
        justifyContent:'center',
        alignItems: 'center'
    },
    textBlock: {
        padding: 10
    },
    block: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        marginTop: 10,
        overflow:'hidden',
        height: halfWindowsWidth-0,
        minWidth: "100%",
        boxSizing: 'border-box',
        borderColor: "#C71585",
        borderWidth: 1,
        backgroundColor: 'rgba(199, 21, 133, 0.1)',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        borderRadius: 5,
    },
})