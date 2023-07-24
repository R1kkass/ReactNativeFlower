import React, { useEffect, useState } from 'react'
import { Button, Modal, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { purple } from '../../app/const/color'
import axios from 'axios'
import { userApi } from '../../app/api/UserApi'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = ({navigation}) => {

    const [password, setPassword] = useState<string>()
    const [login, setLogin] = useState<string>()
    const [value, setValue] = useState<string | null>()

    useEffect(()=>{
        AsyncStorage.getItem('TASKS').then(e=>setValue(e))
    }, [])

    async function auth() {
        userApi.auth({password, email: login}).then(async (e)=>{
            AsyncStorage.setItem('TASKS', e)
            navigation.navigate('Главная')
            setValue(await AsyncStorage.getItem('TASKS'))
        })
    }

    return (
        <View style={style.containerMain}>
                <View style={style.container}>
                    <Text style={style.entry}>Вход</Text>
                    <View>
                        <Text style={style.text}>Логин:</Text>
                        <TextInput onChangeText={e=>setLogin(e)} placeholder='Введите логин' style={style.input}></TextInput>
                    </View>
                    <View>
                        <Text style={style.text}>Пароль:</Text>
                        <TextInput onChangeText={e=>setPassword(e)} placeholder='Введите пароль' style={style.input} secureTextEntry={true}></TextInput>
                    </View>
                    <Button color={purple} title='Войти' onPress={auth}></Button>
                    <TouchableOpacity>
                        <Text style={style.textReg} onPress={()=>navigation.navigate('Регистрация')}>Зарегистрироваться</Text>
                    </TouchableOpacity>
                    <Text>{value}</Text>
                </View>
        </View>
    )
}

export default Login

const style = StyleSheet.create({
    textReg:{
        color: 'white',
        textAlign: 'center'
    },
    containerMain: {
      padding: 10,
      flex: 1,
      justifyContent: 'center',
      gap: 10,
    },
    container: {
        marginTop: 'auto',
        // height: 500,
        marginBottom: 'auto',
        gap: 10,
        padding: 20,
        color: 'white',
        backgroundColor: 'rgba(199, 21, 133, 0.5)',
        borderRadius: 20,
        shadowColor: purple,
        shadowOffset: {width: -20, height: 40},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    text: {
        fontSize: 20,
        color: 'white'
    },
    input: {
        // height: 60,
        paddingBottom: 5,
        paddingTop:5,
        borderWidth: 2,
        backgroundColor: 'white',
        borderRadius: 20,
        borderColor: purple,
        fontSize: 18,
        paddingStart: 7,
        paddingEnd: 7,
        overflow: 'hidden', 
    },
    entry: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white'
    }
  })