import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./Home/Index"
import Note from "./Note/Index"
import React from 'react'

const Stack = createNativeStackNavigator()

const Router = ()=>{
    return(
            <Stack.Navigator>
                <Stack.Screen name="Главная"  component={Home} />
                <Stack.Screen name="Цветок" options={({route}: any)=>({title: route.params.title})} component={Note} initialParams={{ id:0, title: '32' }}/>
            </Stack.Navigator>
    )
}

export default Router