import AddNote from "./AddNote"
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Router from "./Router"
import LoginRouter from "./LoginRouter";
import { useFocusEffect } from "@react-navigation/native";

const Tab = createBottomTabNavigator()

const Routing = ()=>{

  useFocusEffect(()=>{
    console.log(
      'dds'
    );
  })


    return(
        <>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                      let iconName;
                      let rn = route.name;
          
                      if (rn === 'Главная') {
                        iconName = focused ? 'home' : 'home-outline';
          
                      } else if (rn === "Корзина") {
                        iconName = focused ? 'basket' : 'basket-outline';
          
                      } else if (rn === "Избранное") {
                        iconName = focused ? 'heart' : 'heart-outline';
                      } else if (rn === "Пользователь") {
                        iconName = focused ? 'person' : 'person-outline'
                      }
          
                      return <Ionicons name={iconName} size={size} color={color} />;
                    },
                  })}
                  tabBarOptions={{
                    activeTintColor: '#C71585',
                    inactiveTintColor: 'grey',
                    blur: 0.3,
                    labelStyle: { paddingBottom: 10, fontSize: 10 },
                    style: { padding: 10, height: 70}
                  }}
                  
            >
                <Tab.Screen name="Главная" options={{headerShown: false }} component={Router}/>
                <Tab.Screen name="Корзина" component={AddNote} />
                <Tab.Screen name="Избранное" component={AddNote} />
                <Tab.Screen name="Пользователь" options={{headerShown: false }} component={LoginRouter} />

            </Tab.Navigator>
        {/* {children} */}
        </>
    )
}

export default Routing