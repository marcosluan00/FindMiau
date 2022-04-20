import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack'


const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

import HomeBase from '../Pages/HomeBase'
import Perfil from '../Pages/Perfil'
import Publicar from '../Pages/Publicar'


function AppRoutes() {
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='Home'
            component={HomeBase}
            options={{
                headerShown:false,
            }}
            />
        </Stack.Navigator>
    )
}
export default AppRoutes;