import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from 'react'
import Login from "./Login/Login"
import Registration from "./Login/Registration"

const Stack = createNativeStackNavigator()

const LoginRouter = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Авторизация"  component={Login} />
            <Stack.Screen name="Регистрация" component={Registration}/>
        </Stack.Navigator>
    )
}

export default LoginRouter