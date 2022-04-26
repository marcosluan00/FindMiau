import React, { useContext } from 'react'
import { View, ActivityIndicator } from 'react-native'

import { AuthContext } from '../contexts/auth'
import { LogBox } from 'react-native';

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

export default function Routes() {
    LogBox.ignoreLogs(['Setting a timer for a long period of time'])
    const { signed, loading } = useContext(AuthContext)

    if(loading) {
        return(
            <View
            style={{
                flex: 1,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#36393F'
            }}
            >
                <ActivityIndicator
                size={50}
                color='#e52246'
                />
            </View>
        )
    }
    return ( signed ? <AppRoutes/> : <AuthRoutes/> )
}