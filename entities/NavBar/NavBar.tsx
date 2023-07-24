import { StyleSheet, Text, View } from "react-native"
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

interface INavBar{
    navigation: any
}

const NavBar: React.FC<INavBar> = ({navigation}) => {
    return (
        <View style={styles.navBar}>
            <View   style={styles.text}>
                <Ionicons name="home" color="#C71585" size={30}/>
                <Text>Главная</Text>
            </View>
            <View style={styles.text}>
                <Ionicons name="heart" color="#C71585" size={30}/>
                <Text>Избранное</Text>
            </View>
            <View style={styles.text}>
                <Ionicons name="basket" color="#C71585" size={30}/>
                <Text>Корзина</Text>
            </View>
        </View>
    )
}

export default NavBar


const styles = StyleSheet.create({
    text:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    navBar: {
        height: 60,
        backgroundColor: "",
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})