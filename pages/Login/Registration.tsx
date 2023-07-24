import React, { useEffect, useState } from 'react'
import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { purple } from '../../app/const/color'
import { userApi } from '../../app/api/UserApi'
import { validatePasssword } from '../../app/utils/validate'

const Registration = ({navigation}) => {
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [repeatPassword, setRepeatPassword] = useState<string>('')
    const [error, setError] = useState<string>('')

    function registration(){
        let valid = validatePasssword(password, repeatPassword)
        if(valid){ 
            setError(String(valid))
        }
        else if(login.length<4 || !password || !repeatPassword) {
            setError('Заполните поля')
        }
        else if(password==repeatPassword && login){
            userApi.registration({login, password})
                .then(navigation.navigate('Авторизация'))
                .catch(e=>setError(e.message))
        }
    }

    return (
        <View style={style.containerMain}>
                <View style={style.container}>
                    <Text style={style.entry}>Регистрация</Text>
                    <View>
                        <Text style={style.text}>Логин:</Text>
                        <TextInput onChangeText={(e)=>setLogin(e)} placeholder='Введите логин' style={style.input}></TextInput>
                    </View>
                    <View>
                        <Text style={style.text}>Пароль:</Text>
                        <TextInput onChangeText={(e)=>setPassword(e)} placeholder='Введите пароль' style={style.input} secureTextEntry={true}></TextInput>
                    </View>
                    <View>
                        <Text style={style.text}>Повторите пароль:</Text>
                        <TextInput onChangeText={(e)=>setRepeatPassword(e)} placeholder='Повторите пароль' style={style.input} secureTextEntry={true}></TextInput>
                    </View>
                    <Button onPress={registration} color={purple} title='Зарегистироваться'></Button>
                    <Text style={style.textReg}>{error}</Text>
                </View>
        </View>
    )
}

export default Registration

const style = StyleSheet.create({
    textReg: {
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