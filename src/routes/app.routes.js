import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack'


const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

import HomeBase from '../Pages/HomeBase'
import Perfil from '../Pages/Perfil'
import Publicar from '../Pages/Publicar'
import Modal from '../Pages/Modal'
import Chat from '../Pages/Chat'
import Posts from '../Pages/Posts'
import EditarPosts from '../Pages/EditarPosts'


function AppRoutes() {
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='Home'
            component={ScreenRoutes}
            options={{
                headerShown:false}}
            />
        </Stack.Navigator>
    )
}
function ScreenRoutes() {
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='Home'
            component={HomeBase}
            options={{
                headerShown:false}}
            />
            <Stack.Screen
            name='Publicar'
            component={Publicar}
            options={{
                headerShown:false
            }}
            />
            <Stack.Screen
            name='Perfil'
            component={Perfil}
            />
            <Stack.Screen
            name='Modal'
            component={Modal}
            options={{
                headerTitle: ' Informações '
            }}
            />
            <Stack.Screen
            name='Chat'
            options={{
                headerTitle: 'Comentarios'
            }}
            component={Chat}
            />
            <Stack.Screen
            name='Posts'
            component={Posts}
            options={{
                headerTitle: 'Gerencia de Postagens'
            }}
            />
            <Stack.Screen
            name='Editar'
            component={EditarPosts}
            options={{
                headerTitle: 'Editar informações'
            }}
            />
        </Stack.Navigator>
    )
}
export default AppRoutes;