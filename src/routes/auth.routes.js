import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LoginCadastro from '../Pages/LoginCadastro'

const Stack = createStackNavigator();

function AuthRoutes() {
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='Login'
            component={LoginCadastro}
            options={{ headerShown:false}}
            />
        </Stack.Navigator>
    )
}
export default AuthRoutes;